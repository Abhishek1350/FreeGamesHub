import { configureStore } from "@reduxjs/toolkit";
import { gamesApi, newsAndGiveawaysApi } from "./api";

export const store = configureStore({
    reducer: {
        [gamesApi.reducerPath]: gamesApi.reducer,
        [newsAndGiveawaysApi.reducerPath]: newsAndGiveawaysApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(gamesApi.middleware, newsAndGiveawaysApi.middleware),
});
