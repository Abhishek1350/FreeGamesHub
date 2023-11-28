import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_GAMES_API_HOST,
    'x-rapidapi-key': process.env.REACT_APP_GAMES_API_KEY,
};
const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

export const gamesApi = createApi({
    reducerPath: 'gamesApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_GAMES_API_URL }),
    endpoints: (builder) => ({
        getAllGames: builder.query({
            query: () => createRequest(`/games`),
        }),

        getGameDetails: builder.query({
            query: (id: number) => createRequest(`/game?id=${id}`),
        }),

        getPopularGames: builder.query({
            query: () => createRequest(`/games??sort-by=popularity`),
        }),

        getNewGames: builder.query({
            query: () => createRequest(`/games?sort-by=release-date`),
        }),

        getGamesByPlatform: builder.query({
            query: (platform: string) => createRequest(`/games?platform=${platform}`),
        }),
    
    }),
});

export const { useGetAllGamesQuery, useGetGameDetailsQuery, useGetGamesByPlatformQuery } = gamesApi;