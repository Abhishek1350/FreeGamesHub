"use client";

import { NavbarItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@nextui-org/dropdown";
import NextLink from "next/link";
import { ChevronDown } from "@/components/icons";

interface NavItemProps {
    item: {
        name: string;
        link?: string;
        categories: { name: string; slug: string }[];
    };
}

export const NavItem = ({ item }: NavItemProps) => {
    return item?.link ? (
        <NavbarItem className="h-8 sm:h-full">
            <NextLink href="/">{item.name}</NextLink>
        </NavbarItem>
    ) : (
        <Dropdown>
            <NavbarItem>
                <DropdownTrigger>
                    <Button
                        disableRipple
                        className="p-0 bg-transparent data-[hover=true]:bg-transparent flex justify-center"
                        endContent={<ChevronDown />}
                        radius="sm"
                        variant="light"
                    >
                        {item.name}
                    </Button>
                </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
                itemClasses={{
                    base: "gap-2",
                }}
            >
                {item?.categories?.map((category: any) => (
                    <DropdownItem
                        key={category.slug}
                        as={NextLink}
                        href={category.slug}
                        className="nav-link"
                    >
                        {category.name}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};
