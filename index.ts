import inquirer from 'inquirer';

import { getResteraunts } from './external-api/wolt/getResteraunts';
const main = async () => {
    inquirer.registerPrompt('checkbox-plus', require('inquirer-checkbox-plus-prompt'));
    const resteraunts = await getResteraunts(32.0719266, 34.7955698);
    console.log(resteraunts.sections[1].items[0].venue.tags);

    console.log('getting all tags');

    const existingTags = new Set<string>();
    for (const resteraunt of resteraunts.sections[1].items) {
        for (const tag of resteraunt.venue.tags) {
            existingTags.add(tag);
        }
    }
    const tags = [...existingTags];

    const mustHaveTags = (
        await inquirer.prompt({
            type: 'checkbox-plus' as any,
            name: 'musthaveTags',
            message: 'What tags must the resteraunts have?',
            choices: tags,
            highlight: true,
            searchable: true,
            source: (answersSoFar: any, input: string) => {
                return new Promise((resolve, reject) => {
                    if (!input) return resolve(tags);
                    const filtered = tags.filter((tag) => tag.toLowerCase().indexOf(input.toLowerCase()) !== -1);
                    resolve(filtered);
                });
            },
        } as any)
    ).mustHaveTags as string[] | undefined;

    const optionalTagsPrompt = {
        type: 'checkbox-plus' as any,
        name: 'optionalTags',
        message: 'What tags are optional?',
        choices: tags,
        highlight: true,
        searchable: true,
        source: (answersSoFar: any, input: string) => {
            return new Promise((resolve, reject) => {
                if (!input) return resolve(tags);
                const filtered = tags.filter((tag) => tag.toLowerCase().indexOf(input.toLowerCase()) !== -1);
                resolve(filtered);
            });
        },
    };
    const optionalTags = (await inquirer.prompt(optionalTagsPrompt)).optionalTags as string[] | undefined;

    console.log('must have tags:', mustHaveTags);
    console.log('optional tags:', optionalTags);

    const randomResterauntPool = resteraunts.sections[1].items.filter((resteraunt) => {
        const resterauntTags = resteraunt.venue.tags;
        const isResterauntOnline = resteraunt.venue.online;
        if (!isResterauntOnline) return false;
        const resterauntIncludesMustHaveTags = mustHaveTags ? mustHaveTags.every((tag) => resterauntTags.indexOf(tag) !== -1) : true;
        if (!resterauntIncludesMustHaveTags) return false;
        const resterauntIncludesOptionalTags = optionalTags ? optionalTags.some((tag) => resterauntTags.indexOf(tag) !== -1) : true;
        if (!resterauntIncludesOptionalTags) return false;

        return true;
    });

    const randomResteraunt = randomResterauntPool[Math.floor(Math.random() * randomResterauntPool.length)];

    console.log(`the random resteraunt chosed is: ${randomResteraunt.venue.name}`, randomResteraunt);
};

(async () => {
    await main();
})();
