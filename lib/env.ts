function assertValue<T>(v: T | undefined, errorMessage: string): T {
    if (v === undefined) {
        throw new Error(errorMessage);
    }

    return v;
}

export const apiBaseUrl = assertValue(
    process.env.GAMES_API_URL,
    "Missing environment variable: GAMES_API_URL"
);

export const apiHost = assertValue(
    process.env.GAMES_API_HOST,
    "Missing environment variable: GAMES_API_HOST"
);

export const apiKey = assertValue(
    process.env.GAMES_API_KEY,
    "Missing environment variable: GAMES_API_KEY"
);
