import { gamesApiBaseUrl, gamesApiHost, gamesApiKey, portfolioUrl } from "./env";
import { IGame, IGiveaway, INews, ISocialLink } from "./types";

const API_HEADERS = {
    "x-rapidapi-host": gamesApiHost,
    "x-rapidapi-key": gamesApiKey,
};

class ApiService {
    private static async fetchJson<T>(url: string): Promise<T> {
        const response = await fetch(url, {
            headers: API_HEADERS,
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    }

    public static async getGames(sortBy: string = "relevance"): Promise<IGame[]> {
        return this.fetchJson<IGame[]>(`${gamesApiBaseUrl}/games?sort-by=${sortBy}`);
    }

    public static async getGameById(id: string | number): Promise<IGame | null> {
        return this.fetchJson<IGame>(`${gamesApiBaseUrl}/game?id=${id}`);
    }

    public static async getSocialLinks(): Promise<ISocialLink[]> {
        return this.fetchJson<ISocialLink[]>(`${portfolioUrl}/api/get-social-links`);
    }
}

export default ApiService;
