import inquirer from 'inquirer';

export const getMustHaveTagsPrompt = (tags: string[]) => ({
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
});
