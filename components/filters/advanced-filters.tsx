"use client";

import { Button, ButtonGroup } from "@nextui-org/button";
import { FaFilter } from "react-icons/fa";
import { FcClearFilters } from "react-icons/fc";
import { useRouter, usePathname } from "next/navigation";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
} from "@nextui-org/modal";

export function AdvancedFilters() {
    const router = useRouter();
    const pathname = usePathname();

    const { isOpen, onOpen, onClose } = useDisclosure();

    const hangleClearAll = () => {
        router.push(pathname);
    };

    return (
        <>
            <ButtonGroup className="w-full">
                <Button
                    size="lg"
                    radius="sm"
                    color="warning"
                    variant="flat"
                    endContent={<FaFilter />}
                    className="w-full"
                    onPress={onOpen}
                >
                    More
                </Button>
                <Button
                    size="lg"
                    radius="sm"
                    color="danger"
                    variant="flat"
                    endContent={<FcClearFilters color="inherit" />}
                    className="w-full"
                    onPress={hangleClearAll}
                >
                    Clear All
                </Button>
            </ButtonGroup>

            <Modal
                isOpen={isOpen}
                onClose={onClose}
                placement="center"
                backdrop="blur"
                className="pb-2"
                isDismissable={false}
                isKeyboardDismissDisabled={false}
            >
                <ModalContent>
                    <ModalHeader>More Filters</ModalHeader>
                    <ModalBody>Modal</ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
