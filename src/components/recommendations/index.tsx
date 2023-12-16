import { useGetAllGamesQuery } from "../../services";
import { useMemo } from "react";
import { SwiperSlider, RecommendationsCard } from "../";
import { SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

const stagger = 0.25;
const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export const Recommendations = () => {
    const { data } = useGetAllGamesQuery();

    const recommendadedGames = useMemo(() => {
        if (!data) return [];

        const totalGames = data?.length;
        const randomIndex = Math.floor(Math.random() * (totalGames - 9));

        return data.slice(randomIndex, randomIndex + 9); // 9 is the number of cards to show
    }, [data]);

    return (
        <SwiperSlider effect="slide">
            {recommendadedGames?.map((game, index: number) => (
                <SwiperSlide key={game.id}>
                    <motion.div
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            delay: index * stagger,
                            ease: "easeInOut",
                            duration: 0.5,
                        }}
                        viewport={{ amount: 0 }}
                    >
                        <RecommendationsCard game={game} />
                    </motion.div>
                </SwiperSlide>
            ))}
        </SwiperSlider>
    );
};
