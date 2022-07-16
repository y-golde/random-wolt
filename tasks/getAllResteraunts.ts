import { getResteraunts } from '../external-api/wolt/getResteraunts';

export const getAllResteraunts = async () => {
    const resteraunts = await getResteraunts(32.0719266, 34.7955698);

    return resteraunts;
};
