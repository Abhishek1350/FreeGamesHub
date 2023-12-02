import { useMemo } from "react";
import { GamesCard, GamesCardSkeleton, Pagination } from "../../components";
import { useGetAllGamesQuery, Game } from "../../services"
import { motion } from "framer-motion"
import { useSize } from "../../utils";
import { useSearchParams, useNavigate } from "react-router-dom";

const stagger = 0.25;
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
    const [searchParams] = useSearchParams();
    const { width } = useSize();
    const redirect = useNavigate();

    const itemsPerPage = width < 500 ? 6 : 12;
    const currentPage = Number(searchParams.get("page")) || 1;
    const currentPlatform = searchParams.get("platform") === "pc" ? PLATFORMS.PC : PLATFORMS.BROWSER || null;
    const currentCategory = searchParams.get("category") || null;

    const games = useMemo(() => {
        return allGames?.filter((game: Game) => {
            if (currentPlatform && currentCategory) {
                return game?.platform === currentPlatform && game?.genre === currentCategory;
            } else if (currentPlatform) {
                return game?.platform === currentPlatform;
            } else if (currentCategory) {
                return game?.genre === currentCategory;
            } else {
                return game;
            }
        })
    }, [allGames, currentPlatform, currentCategory]);

    return (
        <section className="text-gray-400 body-font py-10">
            <div className="container px-5 py-24 mx-auto ">
                <div className="flex flex-wrap gap-y-5">
                    {
                        isLoading ? (
                            [1, 2, 3, 4, 5, 6].map((item) => (
                                <GamesCardSkeleton key={item} />
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
                                        ease: "easeInOut",
                                        duration: 0.5,
                                    }}
                                    viewport={{ amount: 0 }}
                                    className="md:w-1/3 sm:w-1/2 p-4"
                                >
                                    <GamesCard game={game} />
                                </motion.div>
                            ))
                        )
                    }
                </div>
                {
                    games && games?.length > itemsPerPage && (
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
                    )
                }
            </div>
        </section >
    )
}