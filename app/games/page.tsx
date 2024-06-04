import { getGames } from "@/lib/action";
import { IGame, IFilter } from "@/lib/types";
import {
    Container,
    GamesCard,
    BlurIn,
    Pagination,
    QuickFilterItem,
    AdvancedFilters,
} from "@/components";
import { getCategories, filterGames, getYears } from "@/lib/utils";
import {
    ITEMS_PER_PAGE,
    platformFilterValues,
    sortFilterValues,
} from "@/lib/constants";
import { Metadata } from "next";
import { currentSiteUrl } from "@/lib/env";

export const metadata: Metadata = {
    title: "Download and Play Free Games | FreeGamesHub",
    description:
        "Explore the best collection of free PC games and browser-based at FreeGamesHub. Download exciting titles and play online without any cost. Your go-to destination for endless gaming enjoyment!",
    openGraph: {
        title: "Download and Play Free Games | FreeGamesHub",
        description:
            "Explore the best collection of free PC games and browser-based at FreeGamesHub. Download exciting titles and play online without any cost. Your go-to destination for endless gaming enjoyment!",
    },
    alternates: {
        canonical: new URL(`${currentSiteUrl}/games`),
    },
};

export default async function Games({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const { page } = searchParams;

    const games: IGame[] = await getGames();

    const categories = getCategories(games, "all");

    const years = getYears(games);

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
            label: "Year",
            values: years.map((year) => ({
                value: year,
                label: year,
            })),
        },
        {
            label: "Sort By",
            values: sortFilterValues,
        },
    ];

    const filteredGames = filterGames(searchParams, games);

    const currentPage = page ? parseInt(page as string) : 1;

    const showPagination = filteredGames.length > ITEMS_PER_PAGE;

    return (
        <section className="text-gray-400 pb-10 shadow-inset-1 min-h-[80dvh]">
            <Container>
                <BlurIn className="mb-10" once={true}>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                        {filters.map((filter) => (
                            <QuickFilterItem
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
                                className="max-w-full"
                            />
                        ))}
                        <AdvancedFilters categories={categories} years={years} />
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
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"
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

                {showPagination && (
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
