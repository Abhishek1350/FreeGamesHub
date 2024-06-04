"use client";

import { Button, ButtonGroup } from "@nextui-org/button";
import { FaFilter } from "react-icons/fa";
import { FcClearFilters } from "react-icons/fc";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
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
import { useState, useEffect } from "react";

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

function buildSearchQuery(selectedFilters: SelectedFilters) {
    const searchQuery = new URLSearchParams();
    if (selectedFilters.sort.length) {
        searchQuery.set("sortby", selectedFilters.sort);
    }
    if (selectedFilters.platform.length) {
        searchQuery.set("platform", selectedFilters.platform.join(","));
    }
    if (selectedFilters.categories.length) {
        searchQuery.set("category", selectedFilters.categories.join(","));
    }
    if (selectedFilters.years.length) {
        searchQuery.set("year", selectedFilters.years.join(","));
    }
    return searchQuery.toString();
}

export function AdvancedFilters({ categories, years }: AdvancedFiltersProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>(
        initialSelectedFilters
    );

    const { isOpen, onOpen, onClose } = useDisclosure();

    const hangleClearAll = () => {
        setSelectedFilters(initialSelectedFilters);
        router.push(pathname);
    };

    const handleApplyFilters = () => {
        const searchQuery = buildSearchQuery(selectedFilters);
        if (searchQuery) {
            router.push(`${pathname}?${searchQuery}`);
        } else {
            router.push(pathname);
        }
        onClose();
    };

    useEffect(() => {
        const sort = searchParams.get("sortby") || "";
        const platform = searchParams.get("platform")?.split(",") || [];
        const categories = searchParams.get("category")?.split(",") || [];
        const years = searchParams.get("year")?.split(",") || [];

        setSelectedFilters({
            sort,
            platform,
            categories,
            years,
        });
    }, [searchParams]);

    return (
        <>
            <ButtonGroup className="w-full">
                <Button
                    size="lg"
                    radius="sm"
                    color="warning"
                    variant="flat"
                    endContent={<FaFilter />}
                    className="w-full gap-1"
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
                    className="w-full gap-1"
                    onPress={hangleClearAll}
                >
                    Clear
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
                                        platform: (selected as string[]).filter(
                                            (value: string) => value !== ""
                                        ),
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
                                        years: (selected as string[]).filter(
                                            (value: string) => value !== ""
                                        ),
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
                                        categories: (selected as string[]).filter(
                                            (value: string) => value !== ""
                                        ),
                                    })
                                }
                            />
                        </div>
                    </ModalBody>
                    <ModalFooter className="border-t border-gray-500">
                        <Button
                            radius="sm"
                            color="danger"
                            variant="flat"
                            onPress={hangleClearAll}
                        >
                            Reset
                        </Button>
                        <Button
                            radius="sm"
                            color="primary"
                            variant="ghost"
                            onPress={handleApplyFilters}
                        >
                            Apply
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
