import { Resteraunts } from '../external-api/wolt/model/resteraunt';

export const getAllExistingTags = (resteraunts: Resteraunts[]) => {
    const existingTags = new Set<string>();

    for (const resteraunt of resteraunts) {
        for (const tag of resteraunt.venue.tags) {
            existingTags.add(tag);
        }
    }
    const tags = [...existingTags];

    return tags;
};
