import { clinet } from './client';
import { GetResterauntRequest } from './model/resteraunt';

export const getResteraunts = async (lat: number, lon: number) => {
    const response = await clinet.get<GetResterauntRequest>(`/pages/restaurants?lat=${lat}&lon=${lon}`);

    return response.data;
};
