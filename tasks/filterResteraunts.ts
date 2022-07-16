import { Resteraunts } from '../external-api/wolt/model/resteraunt';

interface FilterResterauntsParams {
    resteraunts: Resteraunts[];
    mustHaveTags?: string[];
    optionalTags?: string[];
}

export const filterResteraunts = ({ resteraunts, mustHaveTags, optionalTags }: FilterResterauntsParams) => {
    const randomResterauntPool = resteraunts.filter((resteraunt) => {
        const resterauntTags = resteraunt.venue.tags;
        const isResterauntOnline = resteraunt.venue.online;
        if (!isResterauntOnline) return false;
        const resterauntIncludesMustHaveTags = mustHaveTags?.length
            ? mustHaveTags.every((tag) => resterauntTags.indexOf(tag) !== -1)
            : true;
        if (!resterauntIncludesMustHaveTags) return false;
        const resterauntIncludesOptionalTags = optionalTags?.length ? optionalTags.some((tag) => resterauntTags.indexOf(tag) !== -1) : true;
        if (!resterauntIncludesOptionalTags) return false;

        return true;
    });

    return randomResterauntPool;
};
