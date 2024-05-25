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

interface SearchProps {
    games: IGame[];
}

function handleSearch(games: IGame[], query: string) {
    return games.filter((game) => {
        let titleMatch = game.title?.toLowerCase().includes(query);
        let genreMatch = game.genre?.toLowerCase().includes(query);
        let platformMatch = game.platform?.toLowerCase().includes(query);
        return titleMatch || genreMatch || platformMatch;
    });
}

export function Search({ games }: SearchProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [searchQuery, setSearchQuery] = useState("");
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");

    const inputRef = useRef<HTMLInputElement>(null);

    const results = useMemo(() => {
        if (!isOpen || !(debouncedSearchQuery.trim()?.length > 2)) return [];
        return handleSearch(games, debouncedSearchQuery.toLowerCase());
    }, [isOpen, debouncedSearchQuery, games]);

    console.log(results);

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
                labelPlacement="inside"
                placeholder="Search..."
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
                backdrop="opaque"
                hideCloseButton
            >
                <ModalContent>
                    <ModalHeader className="p-0">
                        <Input
                            ref={inputRef}
                            labelPlacement="inside"
                            className="bg-content1"
                            placeholder="Search..."
                            startContent={
                                <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            type="search"
                            onChange={(e) => setSearchQuery(e.target.value)}
                            value={searchQuery}
                        />
                    </ModalHeader>
                    <ModalBody></ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}
