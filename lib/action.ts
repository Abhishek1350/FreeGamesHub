import { apiBaseUrl, portfolioUrl } from "./env";

export async function getGames() {
    try {
        const response = await fetch(`${apiBaseUrl}/games?sort-by=popularity`);
        return response.json();
    } catch (error) {
        return [];
    }
}

export async function getGameById(id: string | number) {
    try {
        const response = await fetch(`${apiBaseUrl}/game?id=${id}`);
        return response.json();
    } catch (error) {
        return null;
    }
}

export async function getNews() {
    try {
        const response = await fetch(`${apiBaseUrl}/latestnews`);
        return response.json();
    } catch (error) {
        return [];
    }
}

export async function getGiveaways() {
    try {
        const response = await fetch(`${apiBaseUrl}/giveaways`);
        return response.json();
    } catch (error) {
        return [];
    }
}

export async function getSocialLinks() {
    try {
        const response = await fetch(`${portfolioUrl}/api/get-social-links`);
        return response.json();
    } catch (error) {
        return [];
    }
}
