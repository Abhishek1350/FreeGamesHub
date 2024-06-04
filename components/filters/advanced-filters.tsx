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
    ModalFooter,
    useDisclosure,
} from "@nextui-org/modal";
import { AdvancedFilterItem } from "./advanced-filter-item";
import { platformFilterValues, sortFilterValues } from "@/lib/constants";
import { useState } from "react";

interface AdvancedFiltersProps {
    categories: string[];
    years: string[];
}

interface SelectedFilters {
    sort: string;
    platform: string[];
    categories: string[];
    years: string[];
}

const initialSelectedFilters: SelectedFilters = {
    sort: "",
    platform: [],
    categories: [],
    years: [],
};

export function AdvancedFilters({ categories, years }: AdvancedFiltersProps) {
    const router = useRouter();
    const pathname = usePathname();

    const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>(
        initialSelectedFilters
    );

    const { isOpen, onOpen, onClose } = useDisclosure();

    const hangleClearAll = () => {
        setSelectedFilters(initialSelectedFilters);
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
                isDismissable={false}
                isKeyboardDismissDisabled={false}
                size="lg"
                scrollBehavior="inside"
            >
                <ModalContent>
                    <ModalHeader>More Filters</ModalHeader>
                    <ModalBody className="scrollbar-hide">
                        <div className="mb-2">
                            <h6>Sorted By</h6>
                            <AdvancedFilterItem
                                type="sort"
                                options={sortFilterValues}
                                label="Sort By"
                                selected={selectedFilters.sort}
                                onChange={(selected) =>
                                    setSelectedFilters({
                                        ...selectedFilters,
                                        sort: selected as string,
                                    })
                                }
                            />
                        </div>

                        <div className="mb-2">
                            <h6 className="mb-2">Platforms</h6>
                            <AdvancedFilterItem
                                type="platform"
                                options={platformFilterValues}
                                label="Sort By"
                                selected={selectedFilters.platform}
                                onChange={(selected) =>
                                    setSelectedFilters({
                                        ...selectedFilters,
                                        platform: selected as string[],
                                    })
                                }
                            />
                        </div>

                        <div className="mb-2">
                            <h6 className="mb-2">Release Year</h6>
                            <AdvancedFilterItem
                                type="years"
                                options={years}
                                label="Sort By"
                                selected={selectedFilters.years}
                                onChange={(selected) =>
                                    setSelectedFilters({
                                        ...selectedFilters,
                                        years: selected as string[],
                                    })
                                }
                            />
                        </div>

                        <div className="pb-2"> 
                            <h6 className="mb-2">Categories</h6>
                            <AdvancedFilterItem
                                type="categories"
                                options={categories}
                                label="Categories"
                                selected={selectedFilters.categories}
                                onChange={(selected) =>
                                    setSelectedFilters({
                                        ...selectedFilters,
                                        categories: selected as string[],
                                    })
                                }
                            />
                        </div>
                    </ModalBody>
                    <ModalFooter className="border-t border-gray-500">
                        <Button
                            radius="sm"
                            color="danger"
                            variant="light"
                            onPress={onClose}
                        >
                            Close
                        </Button>
                        <Button
                            radius="sm"
                            color="primary"
                            onPress={() => {
                                console.log(selectedFilters);
                            }}
                        >
                            Action
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
