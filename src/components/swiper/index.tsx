import { Swiper } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { Button } from "@nextui-org/react";
import { useSize } from "../../utils";

interface Props {
    children: React.ReactNode;
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

export const SwiperSlider = (props: Props) => {
    const { width } = useSize();
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
            effect={props.effect}
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
            style={
                width < 500 ? { padding: "10px" } : 
                props.effect === "coverflow" ? { padding: "10px 0" } : { padding: "10px" }
            }
        >
            <CustomPrevArrow />
            <CustomNextArrow />
            {props.children}
        </Swiper>
    );
};
