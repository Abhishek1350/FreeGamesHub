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
            padding: "3px",
            borderRadius: "50%",
            height: "30px",
            width: "30px",
            boxShadow: "rgb(217, 217, 217) 0px 2px 10px",
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
            padding: "3px",
            borderRadius: "50%",
            height: "30px",
            width: "30px",
            boxShadow: "rgb(217, 217, 217) 0px 2px 10px",
        }}
    >
        <MdNavigateNext />
    </div>
);

export const SwiperSlider = (props: any) => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={4}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper: any) => console.log(swiper)}
            navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next'
            }}
            modules={[Navigation]}
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