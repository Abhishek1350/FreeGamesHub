export enum PLATFORMS {
    PC = "PC (Windows)",
    BROWSER = "Web Browser",
}

export const ITEMS_PER_PAGE = 12;

export const platformFilterValues = [
    {
        value: "pc",
        label: PLATFORMS.PC,
    },
    {
        value: "browser",
        label: PLATFORMS.BROWSER,
    },
];

export const sortFilterValues = [
    {
        value: "a-z",
        label: "Alphabetical A-Z",
    },
    {
        value: "z-a",
        label: "Alphabetical Z-A",
    },
    {
        value: "newest",
        label: "Newest",
    },
    {
        value: "oldest",
        label: "Oldest",
    },
    {
        value: "popularity",
        label: "Popularity",
    },
];
