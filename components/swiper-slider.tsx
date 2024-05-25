"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { Button } from "@nextui-org/button";
import { IGame } from "@/lib/types";
import { NewGamesCard } from "./cards";

interface Props {
    type: "newGames" | "recentGames" | "news" | "giveaways";
    games: IGame[];
    effect: "coverflow" | "slide";
}

const CustomPrevArrow = () => (
    <div
        className="swiper-button-prev"
        style={{
            padding: "0px",
            borderRadius: "50%",
            height: "20px",
            width: "20px",
            left: "10px",
        }}
    >
        <Button isIconOnly size="sm" color="warning" radius="full">
            <MdNavigateBefore />
        </Button>
    </div>
);

const CustomNextArrow = () => (
    <div
        className="swiper-button-next"
        style={{
            padding: "0px",
            borderRadius: "50%",
            height: "20px",
            width: "20px",
            right: "10px",
        }}
    >
        <Button isIconOnly size="sm" color="warning" radius="full">
            <MdNavigateNext />
        </Button>
    </div>
);

export function Slider({ type, games, effect }: Props) {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            slidesPerGroup={1}
            modules={[Navigation, EffectCoverflow]}
            navigation={{
                prevEl: ".swiper-button-prev",
                nextEl: ".swiper-button-next",
            }}
            effect={effect}
            breakpoints={{
                1000: {
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                },

                550: {
                    slidesPerView: 2,
                    slidesPerGroup: 1,
                },
            }}
            className={`${effect === "coverflow" ? "!py-3" : "!p-3 flex"}`}
        >
            <CustomPrevArrow />
            <CustomNextArrow />
            {games?.map((game: IGame, index: number) => (
                <SwiperSlide key={game.id}>
                    <NewGamesCard game={game} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
