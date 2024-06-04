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
import { NewsCard, TrendingGamesCard, GiveawayCard, RecommendationCard } from "./cards";
import { StaggerItem } from "./animations";

interface Props {
    type: "games" | "news" | "giveaways" | "recommendations";
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
            return data.slice(0, 3).map((news, index: number) => (
                <SwiperSlide key={news.id}>
                    <StaggerItem index={index}>
                        <NewsCard news={news as INews} />
                    </StaggerItem>
                </SwiperSlide>
            ));
        case "giveaways":
            return data.slice(0, 3).map((giveaway, index: number) => (
                <SwiperSlide key={giveaway.id}>
                    <StaggerItem index={index}>
                        <GiveawayCard giveaway={giveaway as IGiveaway} />
                    </StaggerItem>
                </SwiperSlide>
            ));

        case "recommendations":
            return data.map((game) => (
                <SwiperSlide key={game.id}>
                    <RecommendationCard game={game as IGame} />
                </SwiperSlide>
            ));
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
            className={`${effect === "coverflow" ? "!py-3" : "!p-0 sm:!p-3"}`}
        >
            <CustomPrevArrow />
            <CustomNextArrow />
            {renderItems(type, data)}
        </Swiper>
    );
}
