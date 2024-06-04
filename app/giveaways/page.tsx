import { GiveawayCard, Container, BlurIn } from "@/components";
import { IGiveaway } from "@/lib/types";
import { getGiveaways } from "@/lib/action";
import { Metadata } from "next";
import { currentSiteUrl } from "@/lib/env";

export const metadata: Metadata = {
    title: "Giveaways | FreeGamesHub",
    description:
        "Explore the best collection of free PC games and browser-based at FreeGamesHub. Download exciting titles and play online without any cost. Your go-to destination for endless gaming enjoyment!",
    openGraph: {
        title: "Giveaways | FreeGamesHub",
        description:
            "Explore the best collection of free PC games and browser-based at FreeGamesHub. Download exciting titles and play online without any cost. Your go-to destination for endless gaming enjoyment!",
    },
    alternates: {
        canonical: new URL(`${currentSiteUrl}/giveaways`),
    },
};

export default async function Giveaways() {
    const giveaways: IGiveaway[] = await getGiveaways();

    return (
        <section className="text-gray-400 pb-10 shadow-inset-1 min-h-[80dvh]">
            <Container>
                <div className="mb-5">
                    <h1 className="text-3xl font-bold">Giveaways</h1>
                    <p>Today's top {giveaways?.length} Giveaways</p>
                </div>
                <BlurIn className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                    {giveaways?.map((giveaway) => (
                        <GiveawayCard giveaway={giveaway} key={giveaway.id} />
                    ))}
                </BlurIn>
            </Container>
        </section>
    );
}
