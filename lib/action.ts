import { apiBaseUrl, apiHost, apiKey } from "./env";

const REQUEST_HEADERS = {
    "x-rapidapi-host": apiHost,
    "x-rapidapi-key": apiKey,
};

export async function getGames() {
    const response = await fetch(`${apiBaseUrl}/games`, {
        headers: REQUEST_HEADERS,
    });
    return response.json();
}

export async function getGameById(id: string | number) {
    const response = await fetch(`${apiBaseUrl}/games?${id}`, {
        headers: REQUEST_HEADERS,
    });
    return response.json();
}

export async function getNews() {
    const response = await fetch(`${apiBaseUrl}/latestnews`, {
        headers: REQUEST_HEADERS,
    });
    return response.json();
}

export async function getGiveaways() {
    const response = await fetch(`${apiBaseUrl}/giveaways`, {
        headers: REQUEST_HEADERS,
    });
    return response.json();
}
