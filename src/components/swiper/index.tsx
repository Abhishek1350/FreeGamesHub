import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

// interface Data {
//     id: number;
//     title: string;
//     description: string;
//     image: string;
//     placeformat: string;
//     genre: string;
// }

// type Props = {
//     data: Data[];
//     children: React.ReactNode;
// }

const CustomPrevArrow = () => (
    <div className='swiper-button-prev'
        style={{
            background: "#fff",
            padding: "0px",
            borderRadius: "50%",
            height: "20px",
            width: "20px",
            left: 0
        }}
    >
        <MdNavigateBefore />
    </div>
);

const CustomNextArrow = () => (
    <div
        className='swiper-button-next'
        style={{
            background: "#fff",
            padding: "0px",
            borderRadius: "50%",
            height: "20px",
            width: "20px",
            right: 0
        }}
    >
        <MdNavigateNext />
    </div>
);

export const SwiperSlider = (props: any) => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            slidesPerGroup={1}
            navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            }}
            modules={[Navigation]}
            breakpoints={{
                1000: {
                    slidesPerView: 3,
                    slidesPerGroup: 3
                },

                550: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    navigation: false
                }
            }}
            style={{ padding: "10px" }}
        >
            <CustomPrevArrow />
            <CustomNextArrow />
            {
                [1, 2, 3, 4, 5, 6].map((item) => (
                    <SwiperSlide >
                        {props.children}
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}