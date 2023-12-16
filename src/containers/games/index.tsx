import { useMemo, useCallback } from "react";
import { GamesCard, GamesCardSkeleton, Pagination, HeadContent, MobPagination } from "../../components";
import { useGetAllGamesQuery, useGetPopularGamesQuery } from "../../services"
import { motion } from "framer-motion"
import { useSize } from "../../utils";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { Game } from "../../utils";

const stagger = 0.07;
const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

enum PLATFORMS {
    PC = "PC (Windows)",
    BROWSER = "Web Browser",
}


export const Games = () => {
    const { data: allGames, isLoading } = useGetAllGamesQuery();
    const { data: popularGames } = useGetPopularGamesQuery();

    const [searchParams] = useSearchParams();
    const { width } = useSize();
    const redirect = useNavigate();
    const location = useLocation();

    const handleNavigate = useCallback((path: string) => {
        const currentLocation = location.pathname + location.search;
        return redirect(path, { state: { from: currentLocation } })
    }, [location, redirect]);

    const itemsPerPage = 12;
    const currentPage = Number(searchParams.get("page")) || 1;
    const sortBy = searchParams.get("sortby") || null;
    const currentCategory = searchParams.get("category") || null;
    const currentPlatform =
        searchParams.get("platform") === "pc"
            ? PLATFORMS.PC
            : searchParams.get("platform") === "browser"
                ? PLATFORMS.BROWSER
                : null;

    const games = useMemo(() => {
        if (!allGames) return null;
        if (!currentCategory && !currentPlatform && !sortBy) return allGames;

        let filteredGames = [...allGames];

        if (sortBy === "popularity") return popularGames;

        if (sortBy === "recently_added") {
            return filteredGames.sort((a: Game, b: Game) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
        }

        return filteredGames.filter((game: Game) => {
            const platformCondition = !currentPlatform || game.platform === currentPlatform;
            const categoryCondition = !currentCategory || game.genre === currentCategory;
            return platformCondition && categoryCondition;
        });

    }, [allGames, currentPlatform, currentCategory, sortBy, popularGames]);

    return (
        <>
            <HeadContent
                title="Download and Play Free Games | FreeGamesHub"
                description="Explore the best collection of free PC games and browser-based at FreeGamesHub. Download exciting titles and play online without any cost. Your go-to destination for endless gaming enjoyment!"
            />
            <section className="text-gray-400 body-font py-10 shadow-inset-1 min-h-[80dvh]">
                <div className="container px-5 py-24 mx-auto ">
                    <div className="flex flex-wrap gap-y-5 justify-center sm:justify-start">
                        {
                            isLoading ? (
                                [...Array(6)].map((_, index) => (
                                    <div key={index} className="w-full md:w-1/3 sm:w-1/2 p-4">
                                        <GamesCardSkeleton key={index} />
                                    </div>
                                ))
                            ) : (
                                games?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((game: Game, index: number) => (
                                    <motion.div
                                        key={game?.id}
                                        variants={variants}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{
                                            delay: index * stagger,
                                            ease: "easeIn",
                                            duration: 0.5,
                                        }}
                                        viewport={{ amount: 0 }}
                                        className="md:w-1/3 sm:w-1/2 p-4"
                                    >
                                        <GamesCard game={game} handleNavigate={handleNavigate} />
                                    </motion.div>
                                ))
                            )
                        }
                    </div>
                    {
                        games && games?.length > itemsPerPage && (
                            width > 768 ? (
                                <div className="mt-10">
                                    <Pagination
                                        showControls
                                        total={Math.ceil(games?.length / itemsPerPage)}
                                        initialPage={currentPage}
                                        onChange={(page: number) => {
                                            searchParams.set("page", page.toString());
                                            redirect(`?${searchParams.toString()}`)
                                        }}
                                    />
                                </div>
                            ) : (
                                <MobPagination
                                    total={Math.ceil(games?.length / itemsPerPage)}
                                    initialPage={currentPage}
                                    onClick={(page: number) => {
                                        searchParams.set("page", page.toString());
                                        redirect(`?${searchParams.toString()}`)
                                    }}
                                />

                            )
                        )
                    }
                </div>
            </section >
        </>
    )
}