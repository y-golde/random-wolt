import { getAllResteraunts } from './getAllResteraunts';
import { getAllExistingTags } from './getAllExistingTags';
import { promptQuestions } from './questions/prompt';
import { filterResteraunts } from './filterResteraunts';

export const runRandomiser = async () => {
    const resterauntsResponse = await getAllResteraunts();
    const resteraunts = resterauntsResponse.sections[1].items;

    const tags = getAllExistingTags(resteraunts);

    const { mustHaveTags, optionalTags } = await promptQuestions(tags);

    const randomResterauntPool = filterResteraunts({ resteraunts, mustHaveTags, optionalTags });

    const randomResteraunt = randomResterauntPool[Math.floor(Math.random() * randomResterauntPool.length)];

    console.log(`the random resteraunt chosen is: ${randomResteraunt?.venue.name}`, randomResteraunt);
};
