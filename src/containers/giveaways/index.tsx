import { GiveawayCard, HeadContent, GiveawayCardSkeleton } from "../../components";
import { useGetGiveawaysQuery } from "../../services";
import { motion } from "framer-motion";
import { Giveaway } from "../../utils";

const stagger = 0.3;
const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export const Giveaways = () => {
    const { data: giveaways, isLoading } = useGetGiveawaysQuery();

    return (
        <>
            <HeadContent
                title="Giveaways | FreeGamesHub"
                description="Explore the best collection of free PC games and browser-based at FreeGamesHub. Download exciting titles and play online without any cost. Your go-to destination for endless gaming enjoyment!"
            />
            <section className="text-gray-400 body-font py-10 shadow-inset-1 min-h-[80dvh]">
                <div className="container px-5 py-24 mx-auto ">
                    <div className="flex flex-wrap gap-y-5 justify-center sm:justify-start">
                        {isLoading
                            ? [1, 2, 3, 4, 5, 6].map((item) => (
                                <div key={item} className="w-full md:w-1/3 sm:w-1/2 p-4">
                                    <GiveawayCardSkeleton key={item} />
                                </div>
                            ))
                            : giveaways?.map((giveaway: Giveaway, index: number) => (
                                <motion.div
                                    key={giveaway?.id}
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
                                    <GiveawayCard giveaway={giveaway} />
                                </motion.div>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
};
