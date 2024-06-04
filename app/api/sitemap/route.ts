import { SitemapStream, streamToPromise } from "sitemap";
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

export async function GET() {
    try {
        const games: IGame[] = await getGames();

        const dynamicRoutes: IRoute[] = games.map((game) => ({
            path: `/games/${game.id}`,
            lastmod: isValidDate(game.release_date as string)
                ? new Date(game.release_date).toISOString()
                : new Date().toISOString(),
            priority: 0.9,
        }));

        const sitemap = new SitemapStream({
            hostname: currentSiteUrl || "http://localhost:3000",
        });

        staticRoutes.forEach((route) => {
            sitemap.write({
                url: route.path,
                lastmod: new Date().toISOString(),
                changefreq: "monthly",
                priority: route.priority || 1,
            });
        });

        dynamicRoutes.forEach((route) => {
            sitemap.write({
                url: route.path,
                lastmod: route.lastmod,
                changefreq: "monthly",
                priority: route.priority || 1,
            });
        });

        sitemap.end();

        const sitemapXml = await streamToPromise(sitemap);

        return new Response(sitemapXml, {
            headers: {
                "Content-Type": "application/xml",
            },
        });
    } catch (error) {
        return Response.json({ error: "Something went wrong!" });
    }
}
