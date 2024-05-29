"use client";

import { Input } from "@nextui-org/input";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
} from "@nextui-org/modal";
import { SearchIcon } from "@/components/icons";
import { useEffect, useRef, useMemo, useState } from "react";
import { IGame } from "@/lib/types";
import { Kbd } from "@nextui-org/kbd";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Listbox, ListboxItem } from "@nextui-org/listbox";
import { Avatar } from "@nextui-org/avatar";
import NextLink from "next/link";

interface SearchProps {
    games: IGame[];
}

function handleSearch(games: IGame[], query: string) {
    return games.filter((game) => {
        const titleMatch = game.title?.toLowerCase().includes(query);
        const genreMatch = game.genre?.toLowerCase().includes(query);
        const platformMatch = game.platform?.toLowerCase().includes(query);
        return titleMatch || genreMatch || platformMatch;
    });
}

export function Search({ games }: SearchProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();
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
        <>
            <Input
                aria-label="Search"
                classNames={{
                    inputWrapper: "bg-default-100 hover:bg-default-150",
                    input: "w-full cursor-pointer",
                }}
                placeholder="Search"
                startContent={
                    <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
                }
                type="search"
                readOnly
                onClick={onOpen}
            />
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
        </>
    );
}
