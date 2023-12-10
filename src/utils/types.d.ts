export interface Location {
    pathname: string;
    search: string;
    state: { from: string } | null;
    hash: string;
    key: string;
}

export interface Screenshot {
    id: number
    image: string
}

export interface MinimumSystemRequirement {
    graphics: string;
    memory: string;
    os: string;
    processor: string;
    storage: string;
}

export interface Game {
    id: number
    developer: string
    freetogame_profile_url: string
    game_url: string
    genre: string
    platform: string
    publisher: string
    release_date: Date | string
    short_description: string
    thumbnail: string
    title: string
    minimum_system_requirements?: MinimumSystemRequirement
    description: string
    screenshots: Screenshot[]
    status: string
}

export type GamesResponse = Game[]

export interface News {
    id: number
    title : string
    short_description: string
    thumbnail: string
    main_image: string
    article_content: string
    article_url: string
}

export type NewsResponse = News[]

export interface Giveaway {
    id: number
    title: string
    keys_left: string
    thumbnail: string
    main_image: string
    short_description: string
    giveaway_url: string
}

export type GiveawaysResponse = Giveaway[]
