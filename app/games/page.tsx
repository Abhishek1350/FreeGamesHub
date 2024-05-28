import { getGames } from "@/lib/action";
import { IGame } from "@/lib/types";
import { Container, GamesCard, BlurIn } from "@/components";

export default async function Games({
    searchParams,
}: {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const games: IGame[] = await getGames();

    // const { page, platform, category, sort } = searchParams; : TODO: Implement search

    return (
        <section className="text-gray-400 body-font py-4 shadow-inset-1 min-h-[80dvh]">
            <Container>
                <div className="mb-5">
                    <h1 className="text-2xl sm:text-3xl font-bold text-color-3 mb-1">
                        Games
                    </h1>
                    <p className="text-color-2">
                        {games.length > 1
                            ? `${games?.length} Games Found`
                            : `${games?.length} Game found`}
                    </p>
                </div>
                <BlurIn className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-10">
                    {games.map((game) => (
                        <GamesCard key={game.id} game={game} />
                    ))}
                </BlurIn>
            </Container>
        </section>
    );
}
