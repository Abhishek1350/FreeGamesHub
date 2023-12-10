import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Game, GamesResponse, NewsResponse, GiveawaysResponse } from "../utils";

// Games API
const GAMES_API_HEADERS = {
    "x-rapidapi-host": process.env.REACT_APP_GAMES_API_HOST,
    "x-rapidapi-key": process.env.REACT_APP_GAMES_API_KEY,
};

const createGamesApiRequest = (url: string) => ({ url, headers: GAMES_API_HEADERS });

export const gamesApi = createApi({
    reducerPath: "gamesApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_GAMES_API_URL }),
    endpoints: (builder) => ({
        getAllGames: builder.query<GamesResponse, void>({
            query: () => createGamesApiRequest(`/games`),
        }),

        getGameDetails: builder.query<Game, number>({
            query: (id: number) => createGamesApiRequest(`/game?id=${id}`),
        }),

        getPopularGames: builder.query<GamesResponse, void>({
            query: () => createGamesApiRequest(`/games?sort-by=popularity`),
        }),
    }),
});

export const {
    useGetAllGamesQuery,
    useGetGameDetailsQuery,
    useGetPopularGamesQuery,
} = gamesApi;


// News and Giveaways API
const NEWS_AND_GIVEAWAYS_API_HEADERS = {
    "x-rapidapi-host": process.env.REACT_APP_NEWS_AND_GIVEAWAYS_API_HOST,
    "x-rapidapi-key": process.env.REACT_APP_GAMES_API_KEY, //Same key as gamesApi
}

const createNewsAndGiveawaysApiRequest = (url: string) => ({ url, headers: NEWS_AND_GIVEAWAYS_API_HEADERS });

export const newsAndGiveawaysApi = createApi({
    reducerPath: "newsAndGiveawaysApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_AND_GIVEAWAYS_API_URL }),
    endpoints: (builder) => ({
        getNews: builder.query<NewsResponse, void>({
            query: () => createNewsAndGiveawaysApiRequest('/latestnews'),
        }),

        getGiveaways: builder.query<GiveawaysResponse, void>({
            query: () => createNewsAndGiveawaysApiRequest('/giveaways'),
        }),
    }),
});

export const {
    useGetNewsQuery,
    useGetGiveawaysQuery,
} = newsAndGiveawaysApi;
