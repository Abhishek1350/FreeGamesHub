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

export const portfolioUrl = assertValue(
    process.env.PORTFOLIO_URL,
    "Missing environment variable: PORTFOLIO_URL"
);

export const currentSiteUrl = assertValue(
    process.env.NEXT_PUBLIC_CURRENT_SITE_URL,
    "Missing environment variable: NEXT_PUBLIC_CURRENT_SITE_URL"
);

export const googleAnalyticsId = assertValue(
    process.env.GOOGLE_ANALYTICS_ID,
    "Missing environment variable: GOOGLE_ANALYTICS_ID"
);
