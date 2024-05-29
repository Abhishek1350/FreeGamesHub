import { getGames } from "@/lib/action";
import { IGame, PLATFORMS } from "@/lib/types";
import { Container, GamesCard, BlurIn, Pagination } from "@/components";

const ITEMS_PER_PAGE = 12;

function getPlatfrom(platform: string) {
    if (platform === "pc") return PLATFORMS.PC;
    if (platform === "browser") return PLATFORMS.BROWSER;
    return platform;
}

function filterGames(
    params: {
        [key: string]: string | string[] | undefined;
    },
    games: IGame[]
) {
    if (params.sortby) {
        if (params.sortby === "popularity") return games;
        if (params.sortby === "recently_added") {
            return games.sort(
                (a: IGame, b: IGame) =>
                    new Date(b.release_date).getTime() -
                    new Date(a.release_date).getTime()
            );
        }
    }

    if (!params.platform && !params.category) return games;
    return games.filter((game: IGame) => {
        const platformCondition =
            !params.platform ||
            game.platform === getPlatfrom(params.platform as string);
        const categoryCondition =
            !params.category || game.genre === params.category;
        return platformCondition && categoryCondition;
    });
}

export default async function Games({
    searchParams,
}: {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const { page } = searchParams;

    const games: IGame[] = await getGames();

    const filteredGames = filterGames(searchParams, games);

    const currentPage = page ? parseInt(page as string) : 1;

    return (
        <section className="text-gray-400 py-5 shadow-inset-1 min-h-[80dvh]">
            <Container>
                {currentPage === 1 && (
                    <div className="mb-5">
                        <p className="text-color-2">
                            {filteredGames.length > 1
                                ? `${filteredGames?.length} Games Found`
                                : `${filteredGames?.length} Game found`}
                        </p>
                    </div>
                )}
                <BlurIn className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {filteredGames
                        ?.slice(
                            (currentPage - 1) * ITEMS_PER_PAGE,
                            currentPage * ITEMS_PER_PAGE
                        )
                        .map((game) => (
                            <GamesCard key={game.id} game={game} />
                        ))}
                </BlurIn>

                {filteredGames && filteredGames?.length > ITEMS_PER_PAGE && (
                    <div className="mt-10">
                        <Pagination
                            showControls
                            total={Math.ceil(filteredGames?.length / ITEMS_PER_PAGE)}
                            initialPage={currentPage}
                            key={currentPage}
                        />
                    </div>
                )}
            </Container>
        </section>
    );
}
