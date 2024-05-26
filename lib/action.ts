import { apiBaseUrl, portfolioUrl } from "./env";

export async function getGames() {
    const response = await fetch(`${apiBaseUrl}/games?sort-by=popularity`);
    return response.json();
}

export async function getGameById(id: string | number) {
    const response = await fetch(`${apiBaseUrl}/games?${id}`);
    return response.json();
}

export async function getNews() {
    const response = await fetch(`${apiBaseUrl}/latestnews`);
    return response.json();
}

export async function getGiveaways() {
    const response = await fetch(`${apiBaseUrl}/giveaways`);
    return response.json();
}

export async function getSocialLinks() {
    const response = await fetch(`${portfolioUrl}/api/get-social-links`);
    return response.json();
}
