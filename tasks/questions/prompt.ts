import inquirer from 'inquirer';
import { getMustHaveTagsPrompt } from './prompts/mustHaveTags';
import { getOptionalTagsPrompt } from './prompts/optionalTagsPrompt';

export const promptQuestions = async (tags: string[]) => {
    // register the checkbox plus module
    inquirer.registerPrompt('checkbox-plus', require('inquirer-checkbox-plus-prompt'));

    const mustHaveTags = (await inquirer.prompt(getMustHaveTagsPrompt(tags))).musthaveTags as string[] | undefined;
    const optionalTags = (await inquirer.prompt(getOptionalTagsPrompt(tags))).optionalTags as string[] | undefined;

    return {
        mustHaveTags,
        optionalTags,
    };
};
