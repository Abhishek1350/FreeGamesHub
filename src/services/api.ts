import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Screenshots {
    id: number
    image: string
}

interface MinimumSystemRequirements {
    graphics: string;
    memory: string;
    os: string;
    processor: string;
    storage: string;
}

interface Game {
    id: number
    developer: string
    freetogame_profile_url: string
    game_url: string
    genre: string
    platform: string
    publisher: string
    release_date: Date | string
    short_description: string
    thumbnail: string
    title: string
    minimum_system_requirements?: MinimumSystemRequirements
    description: string
    screenshots: Screenshots[]
    status: string
}

type GamesResponse = Game[]

const apiHeaders = {
    'x-rapidapi-host': process.env.REACT_APP_GAMES_API_HOST,
    'x-rapidapi-key': process.env.REACT_APP_GAMES_API_KEY,
};
const createRequest = (url: string) => ({ url, headers: apiHeaders });

export const gamesApi = createApi({
    reducerPath: 'gamesApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_GAMES_API_URL }),
    endpoints: (builder) => ({
        getAllGames: builder.query<GamesResponse, void>({
            query: () => createRequest(`/games`),
        }),

        getGameDetails: builder.query<Game, number>({
            query: (id: number) => createRequest(`/game?id=${id}`),
        }),

        getPopularGames: builder.query<GamesResponse, void>({
            query: () => createRequest(`/games?sort-by=popularity`),
        }),

        getGamesByPlatform: builder.query<GamesResponse, string>({
            query: (platform: string) => createRequest(`/games?platform=${platform}`),
        }),

    }),
});

export const { useGetAllGamesQuery, useGetGameDetailsQuery, useGetPopularGamesQuery, useGetGamesByPlatformQuery } = gamesApi;