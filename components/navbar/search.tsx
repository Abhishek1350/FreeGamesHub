"use client";

import { Input } from "@nextui-org/input";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/modal";
import { useEffect, useRef, useMemo, useState } from "react";
import { IGame } from "@/lib/types";
import { Kbd } from "@nextui-org/kbd";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import { Avatar } from "@nextui-org/avatar";
import NextLink from "next/link";
import { SearchIcon } from "@/components/icons";

interface SearchProps {
    games: IGame[];
    handleRouteChange: (
        url: string,
        e: React.MouseEvent<HTMLAnchorElement>
    ) => void;
    isOpen: boolean;
    onClose: () => void;
}

function handleSearch(games: IGame[], query: string) {
    return games.filter((game) => {
        const titleMatch = game.title?.toLowerCase().includes(query);
        const genreMatch = game.genre?.toLowerCase().includes(query);
        const platformMatch = game.platform?.toLowerCase().includes(query);
        return titleMatch || genreMatch || platformMatch;
    });
}

export function Search({
    games,
    handleRouteChange,
    isOpen,
    onClose,
}: SearchProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");

    const inputRef = useRef<HTMLInputElement>(null);

    const results = useMemo(() => {
        if (!isOpen || !(debouncedSearchQuery.trim()?.length > 1)) return [];
        return handleSearch(games, debouncedSearchQuery.toLowerCase());
    }, [isOpen, debouncedSearchQuery, games]);

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
        }
        return () => {
            setSearchQuery("");
            setDebouncedSearchQuery("");
        };
    }, [isOpen]);

    useEffect(() => {
        const debounceTimeout = setTimeout(() => {
            setDebouncedSearchQuery(searchQuery);
        }, 300);

        return () => clearTimeout(debounceTimeout);
    }, [searchQuery]);

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            placement="top-center"
            backdrop="blur"
            hideCloseButton
            className="pb-2"
        >
            <ModalContent>
                <ModalHeader className="p-0">
                    <Input
                        ref={inputRef}
                        placeholder="Search by title, genre & platform"
                        startContent={
                            <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
                        }
                        type="search"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        value={searchQuery}
                        endContent={<Kbd>ESC</Kbd>}
                    />
                </ModalHeader>
                <ModalBody>
                    <ScrollShadow hideScrollBar className="max-h-[400px]">
                        {debouncedSearchQuery.trim().length > 1 ? (
                            results.length ? (
                                <Listbox
                                    items={results}
                                    variant="faded"
                                    classNames={{
                                        list: "gap-2",
                                    }}
                                    hideEmptyContent
                                >
                                    {(item) => (
                                        <ListboxItem
                                            key={item.id}
                                            startContent={
                                                <Avatar
                                                    radius="sm"
                                                    src={item.thumbnail}
                                                    className="w-20 mr-2"
                                                />
                                            }
                                            description={
                                                <p className="text-sm text-default-500">
                                                    {item.genre}, {item.platform}
                                                </p>
                                            }
                                            as={NextLink}
                                            href={`/games/${item.id}`}
                                            onClick={(e) =>
                                                handleRouteChange(`/games/${item.id}`, e as any)
                                            }
                                        >
                                            {item.title}
                                        </ListboxItem>
                                    )}
                                </Listbox>
                            ) : (
                                <p className="text-center text-default-500 mt-2">
                                    No results found.
                                </p>
                            )
                        ) : (
                            <p className="text-center text-default-500 mt-2">
                                Type at least 2 characters to search.
                            </p>
                        )}
                    </ScrollShadow>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}
