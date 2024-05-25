"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { Button } from "@nextui-org/button";
import { IGame, INews, IGiveaway } from "@/lib/types";
import { NewsCard, TrendingGamesCard } from "./cards";

interface Props {
    type: "games" | "news" | "giveaways";
    data: IGame[] | INews[] | IGiveaway[];
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

function renderItems(type: string, data: IGame[] | INews[] | IGiveaway[]) {
    switch (type) {
        case "games":
            return data.slice(0, 15).map((game) => (
                <SwiperSlide key={game.id}>
                    <TrendingGamesCard game={game as IGame} />
                </SwiperSlide>
            ));
        case "news":
            return data.slice(0, 3).map((news) => (
                <SwiperSlide key={news.id}>
                    <NewsCard news={news as INews} />
                </SwiperSlide>
            ));
        case "giveaways":
            return null;
        default:
            return null;
    }
}

export function Slider({ type, data, effect }: Props) {
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
            {renderItems(type, data)}
        </Swiper>
    );
}
