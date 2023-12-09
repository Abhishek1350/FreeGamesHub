import { NewsCard, HeadContent, NewsCardSkeleton } from "../../components";
import { useGetNewsQuery } from "../../services";
import { motion } from "framer-motion";
import { News as NewsInterface } from "../../utils";

const stagger = 0.3;
const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export const News = () => {
    const { data, isLoading } = useGetNewsQuery();

    return (
        <>
            <HeadContent
                title="Latest Gaming News | FreeGamesHub"
                description="Get the latest gaming news, reviews, walkthroughs, and more for PC, PS4, Xbox One, Nintendo Switch, and mobile."
            />
            <section className="text-gray-400 body-font py-10 shadow-inset-1 min-h-[80dvh]">
                <div className="container px-5 py-24 mx-auto ">
                    <div className="flex flex-wrap gap-y-5 justify-center sm:justify-start">
                        {isLoading
                            ? [1, 2, 3, 4, 5, 6].map((item) => (
                                <div key={item} className="md:w-1/3 sm:w-1/2 w-full p-5">
                                    <NewsCardSkeleton key={item} />
                                </div>
                            ))
                            : data?.map((newsItem: NewsInterface, index: number) => (
                                <motion.div
                                    key={newsItem?.id}
                                    variants={variants}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{
                                        delay: index * stagger,
                                        ease: "easeIn",
                                        duration: 0.5,
                                    }}
                                    viewport={{ amount: 0 }}
                                    className="md:w-1/3 sm:w-1/2 p-5 mb-2"
                                >
                                    <NewsCard news={newsItem} />
                                </motion.div>
                            ))}
                    </div>
                </div>
            </section>
        </>
    );
};
