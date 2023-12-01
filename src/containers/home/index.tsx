import { Button } from "@nextui-org/react";
import { FaWindows, FaFirefoxBrowser } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  SwiperSlider,
  NewGamesAddedCard,
  MostPlayedGamesCard,
  TopPicksCard,
  MostPlayedGamesSkeleton,
  NewGameAddedSkeleton
} from "../../components";
import { useGetAllGamesQuery, useGetPopularGamesQuery, Game } from "../../services"
import { useMemo } from "react";
import { SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion"

const stagger = 0.25;
const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const Home = () => {
  const { data: allGames, isLoading } = useGetAllGamesQuery();
  const { data: popularGames, isFetching } = useGetPopularGamesQuery();

  const newGames = useMemo(() => {
    if (!allGames) return
    const gamesCopy = [...allGames];
    const sortedGames: Game[] = gamesCopy.sort((a: Game, b: Game) => {
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);

      if (dateA > dateB) {
        return -1;
      } else if (dateA > dateB) {
        return 1;
      } else {
        return 0
      }
    });

    return sortedGames.slice(0, 15);
  }, [allGames]);

  return (
    <section className="top-section">
      <div
        className="bg-center bg-cover bg-no-repeat py-4 sm:py-14"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.80), rgba(0, 0, 0, 0.80)), url(https://wallpaper.dog/large/5483415.jpg)"
        }}
      >
        <div className="container mx-auto flex items-center justify-center flex-col">
          <div className="text-center max-w-[700px]">
            <h1 className="sm:text-4xl text-3xl mb-3 sm:mb-5 font-semibold text-white">
              Hunt Down the Ultimate <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent font-bold">Free-to-Play</span> Gaming Experiences!
            </h1>
            <p className="mb-5 sm:text-[16px] text-[15px]">
              Embark on a quest for the best free-to-play thrills! Discover diverse digital realms, each offering exciting adventures. Unleash the <span className="bg-gradient-to-r from-danger to-warning bg-clip-text text-transparent font-semibold">ultimate gaming experiences</span> and let the quest begin!
            </p>
            <p className="sm:text-3xl text-2xl mb-6 font-bold text-danger">
              Choose your platform
            </p>
            <div className="flex justify-center gap-6">
              <Button
                color="primary"
                variant="ghost"
                className="font-bold gap-1"
                size="lg"
                startContent={<FaWindows size={18} />}
                as={Link}
                to="/pc-games"
              >
                Windows
              </Button>
              <Button
                color="secondary"
                variant="ghost"
                className="font-bold gap-1"
                size="lg"
                startContent={<FaFirefoxBrowser size={18} />}
                as={Link}
                to="/browser-games"
              >
                Browser
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container !py-10">
        <div className="flex justify-between items-center mb-2">
          <h4 className="sm:text-3xl text-2xl">
            <span className="bg-gradient-to-r from-danger to-warning bg-clip-text text-transparent font-bold">
              Recently Added
            </span>
          </h4>
          <Button
            endContent={<MdNavigateNext size={22} />}
            color="primary"
            variant="light"
            className="font-semibold px-1 gap-0"
          >
            View All
          </Button>
        </div>
        <SwiperSlider effect="coverflow">
          {
            isLoading ? (
              [1, 2, 3, 4, 5, 6].map((item, index) => (
                <SwiperSlide key={item}>
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
                    <NewGameAddedSkeleton />
                  </motion.div>
                </SwiperSlide>
              ))
            ) : (
              newGames?.map((game: Game, index: number) => (
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
                    <NewGamesAddedCard game={game} />
                  </motion.div>
                </SwiperSlide>
              ))
            )
          }

        </SwiperSlider>
      </div >

      <div className="container !py-10 pt-15">
        <div className="flex justify-between items-center mb-2">
          <h4 className="sm:text-3xl text-2xl">
            <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent font-bold">
              Today's Popular
            </span>
          </h4>
          <Button
            endContent={<MdNavigateNext size={22} />}
            color="primary"
            variant="light"
            className="font-semibold px-1 gap-0"
          >
            View All
          </Button>
        </div>
        <SwiperSlider effect="slide">
          {
            isFetching ? (
              [1, 2, 3, 4, 5, 6].map((item, index) => (
                <SwiperSlide key={item}>
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
                    <MostPlayedGamesSkeleton />
                  </motion.div>
                </SwiperSlide>
              ))
            ) : (
              popularGames?.slice(0, 15)?.map((game: Game, index: number) => (
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
                    <MostPlayedGamesCard game={game} />
                  </motion.div>
                </SwiperSlide>
              ))
            )
          }

        </SwiperSlider>
      </div>

      <div className="container !py-10 pt-15">
        <div className="flex justify-between items-center mb-4">
          <h4 className="sm:text-3xl text-2xl">
            <span className="bg-gradient-to-r from-danger to-warning bg-clip-text text-transparent font-bold">
              Community Recommendations
            </span>
          </h4>
        </div>
        <div className="flex justify-center gap-10 flex-wrap sm:flex-nowrap md:justify-between">
          <TopPicksCard game={newGames && newGames[newGames.length - 1]} />
          <TopPicksCard game={newGames && newGames[newGames.length - 2]} />
        </div>
      </div>
    </section >
  )
}