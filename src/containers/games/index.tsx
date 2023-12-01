import { GamesCard, GamesCardSkeleton } from "../../components";
import { useGetAllGamesQuery, Game } from "../../services"
import { motion } from "framer-motion"

const stagger = 0.25;
const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export const Games = () => {
    const { data: allGames, isLoading } = useGetAllGamesQuery();

    return (
        <section className="text-gray-400 body-font py-10">
            <div className="container px-5 py-24 mx-auto ">
                <div className="flex flex-wrap">
                    {
                        isLoading ? (
                            [1, 2, 3, 4, 5, 6].map((item, index) => (
                                <motion.div
                                    variants={variants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{
                                        delay: index * stagger,
                                        ease: "easeInOut",
                                        duration: 0.5,
                                    }}
                                    key={item}
                                    viewport={{ amount: 0 }}
                                    className="md:w-1/3 sm:w-1/2 p-4"
                                >
                                    <GamesCardSkeleton />
                                </motion.div>
                            ))
                        ) : (
                            allGames?.slice(0, 15).map((game: Game, index: number) => (
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
            </div>
        </section >
    )
}