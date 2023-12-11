import { Modal, ModalContent, ModalBody, Image } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { Button } from "@nextui-org/react";
import { Screenshot } from "../../utils";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    images: Screenshot[];
    currentImage: number | 0;
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
        <Button isIconOnly size="sm" color="primary" radius="full">
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
        <Button isIconOnly size="sm" color="primary" radius="full">
            <MdNavigateNext />
        </Button>
    </div>
);

export const ImageSliderModal = (props: Props) => {
    const { isOpen, onClose, images, currentImage } = props;

    return (
        <Modal
            size="lg"
            isOpen={isOpen}
            onClose={onClose}
            placement="center"
            className="dark text-foreground bg-background bg-transparent"
            backdrop="blur"
            classNames={{
                closeButton: "text-foreground z-10 bg-background",
            }}
            radius="sm"
        >
            <ModalContent className="max-w-[1000px]">
                <ModalBody className="p-0">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        slidesPerView={1}
                        navigation={{
                            prevEl: ".swiper-button-prev",
                            nextEl: ".swiper-button-next",
                        }}
                        pagination={{ clickable: true }}
                        initialSlide={currentImage}
                        className="max-w-full"
                    >
                        <CustomPrevArrow />
                        <CustomNextArrow />
                        {images &&
                            images.map((item) => {
                                return (
                                    <SwiperSlide key={item.id}>
                                        <Image
                                            src={item.image}
                                            alt={`Image ${item.id}`}
                                            className="aspect-video"
                                            radius="none"
                                        />
                                    </SwiperSlide>
                                );
                            })}
                    </Swiper>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};
