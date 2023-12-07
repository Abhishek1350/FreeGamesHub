import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Game, GamesResponse } from "../utils";

const apiHeaders = {
    "x-rapidapi-host": process.env.REACT_APP_GAMES_API_HOST,
    "x-rapidapi-key": process.env.REACT_APP_GAMES_API_KEY,
};
const createRequest = (url: string) => ({ url, headers: apiHeaders });

export const gamesApi = createApi({
    reducerPath: "gamesApi",
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
    }),
});

export const {
    useGetAllGamesQuery,
    useGetGameDetailsQuery,
    useGetPopularGamesQuery,
} = gamesApi;
