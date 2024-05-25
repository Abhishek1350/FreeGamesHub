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
