import { getGames } from "@/lib/action";
import { IGame, PLATFORMS, IFilter } from "@/lib/types";
import {
    Container,
    GamesCard,
    BlurIn,
    Pagination,
    FilterItem,
} from "@/components";
import { getCategories } from "@/lib/utils";

const ITEMS_PER_PAGE = 12;

const platformFilterValues = [
    {
        value: "pc",
        label: PLATFORMS.PC,
    },
    {
        value: "browser",
        label: PLATFORMS.BROWSER,
    },
];

const sortFilterValues = [
    {
        value: "popularity",
        label: "Popularity",
    },
    {
        value: "recently_added",
        label: "Recently Added",
    },
    {
        value: "oldest",
        label: "Oldest",
    },
    {
        value: "a-z",
        label: "Alphabetical A-Z",
    },
    {
        value: "z-a",
        label: "Alphabetical Z-A",
    },
];

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
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const { page } = searchParams;

    const games: IGame[] = await getGames();

    const categories = getCategories(games, "all");

    const filters: IFilter[] = [
        {
            label: "Platform",
            values: platformFilterValues,
        },
        {
            label: "Category",
            values: categories.map((category) => ({
                value: category,
                label: category,
            })),
        },
        {
            label: "Sort By",
            values: sortFilterValues,
        },
    ];

    const filteredGames = filterGames(searchParams, games);

    const currentPage = page ? parseInt(page as string) : 1;

    return (
        <section className="text-gray-400 pb-10 shadow-inset-1 min-h-[80dvh]">
            <Container>
                <BlurIn className="mb-10" once={true}>
                    <div className="flex flex-wrap justify-center md:justify-start gap-5">
                        {filters.map((filter) => (
                            <FilterItem
                                key={filter.label}
                                selectedKey={
                                    filter.values
                                        .map((value) => value.value)
                                        .includes(
                                            searchParams[
                                            filter.label.toLocaleLowerCase().replace(" ", "")
                                            ] as string
                                        )
                                        ? (searchParams[
                                            filter.label.toLocaleLowerCase().replace(" ", "")
                                        ] as string)
                                        : ""
                                }
                                filter={filter}
                                className="max-w-full md:max-w-[200px]"
                            />
                        ))}
                    </div>
                    {currentPage === 1 && (
                        <p className="mt-5">
                            {filteredGames.length > 1
                                ? `${filteredGames?.length} Games Found`
                                : `${filteredGames?.length} Game found`}
                        </p>
                    )}
                </BlurIn>
                <BlurIn
                    key={Object.values(searchParams).join("")}
                    className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-10"
                >
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
