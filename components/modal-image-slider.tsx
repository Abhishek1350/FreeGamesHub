"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { Button } from "@nextui-org/button";
import { IScreenshot } from "@/lib/types";
import { StaggerItem } from "./animations";
import { Image } from "@nextui-org/image";
import {
    Modal,
    ModalContent,
    ModalBody,
    useDisclosure,
} from "@nextui-org/modal";
import { useState } from "react";

interface Props {
    images: IScreenshot[];
    gameTitle: string;
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

export function ModalImageSlider({ images, gameTitle }: Props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const { isOpen, onOpen, onClose } = useDisclosure();

    function handleOpenImageSliderModal(index: number) {
        onOpen();
        setCurrentImageIndex(index);
    }

    return (
        <>
            {images.map((image, index) => (
                <StaggerItem key={image?.id} once index={index} className="lg:w-[49%]">
                    <Image
                        src={image?.image}
                        alt={`${gameTitle}-FreeGamesHub`}
                        radius="sm"
                        className="w-full h-full object-cover cursor-pointer aspect-video"
                        classNames={{
                            wrapper: "!max-w-full",
                        }}
                        onClick={() => handleOpenImageSliderModal(index)}
                    />
                </StaggerItem>
            ))}

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
                            initialSlide={currentImageIndex}
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
                                                className="aspect-video w-full"
                                                radius="none"
                                                classNames={{
                                                    wrapper: "!max-w-full",
                                                }}
                                            />
                                        </SwiperSlide>
                                    );
                                })}
                        </Swiper>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
