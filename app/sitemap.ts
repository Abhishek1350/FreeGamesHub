import { MetadataRoute } from 'next'
import { currentSiteUrl } from "@/lib/env";
import { getGames } from "@/lib/action";
import { IGame } from "@/lib/types";
import { isValidDate } from "@/lib/utils";

interface IRoute {
    path: string;
    lastmod?: string;
    priority?: number;
}

const staticRoutes: IRoute[] = [
    {
        path: "/",
        priority: 1,
    },
    {
        path: "/games",
        priority: 1,
    },
    {
        path: "/news",
        priority: 0.8,
    },
    {
        path: "/giveaways",
        priority: 0.7,
    },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const games: IGame[] = await getGames();

    const dynamicRoutes: IRoute[] = games.map((game) => ({
        path: `/games/${game.id}`,
        lastmod: isValidDate(game.release_date as string)
            ? new Date(game.release_date).toISOString()
            : new Date().toISOString(),
        priority: 0.9,
    }));

    const sitemap: MetadataRoute.Sitemap = [];

    staticRoutes.forEach((route) => {
        sitemap.push({
            url: `${currentSiteUrl}${route.path}`,
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly",
            priority: route.priority || 1,
        });
    });

    dynamicRoutes.forEach((route) => {
        sitemap.push({
            url: `${currentSiteUrl}${route.path}`,
            lastModified: route.lastmod,
            changeFrequency: "monthly",
            priority: route.priority || 1,
        });
    });

    return sitemap;
}