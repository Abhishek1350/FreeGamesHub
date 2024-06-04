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
import { usePathname, useSearchParams } from "next/navigation";

interface NavItemProps {
    item: {
        name: string;
        link?: string;
        categories: { name: string; slug: string }[];
    };
    handleRouteChange: (
        url: string,
        e: React.MouseEvent<HTMLAnchorElement>
    ) => void;
}

function getFullPath(
    pathname: string,
    searchParams: Record<string, string | string[] | undefined>
): string {
    const params: Record<string, string> = {};

    Object.entries(searchParams).forEach(([key, value]) => {
        if (typeof value === "string") {
            params[key] = encodeURIComponent(value);
        } else if (Array.isArray(value)) {
            params[key] = value.map((v) => encodeURIComponent(v)).join("&");
        }
    });

    const queryString = Object.entries(params)
        .map(([key, value]) => `${encodeURIComponent(key)}=${value}`)
        .join("&");

    return `${encodeURIComponent(pathname)}?${queryString}`;
}

function isActive(platform: string, completeUrl: string): boolean {
    const query = completeUrl
        .split("?")[1]
        ?.split("&")
        .find((q) => q.includes("platform"))
        ?.split("=")[1];
    const platformName = platform
        .toLowerCase()
        .replace(" ", "-")
        .replace("-games", "");
    return query === platformName;
}

export const NavItem = ({ item, handleRouteChange }: NavItemProps) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const completeUrl = decodeURIComponent(
        getFullPath(pathname, Object.fromEntries(searchParams.entries()))
    );

    return item?.link ? (
        <NavbarItem
            className="h-10 mb-2 sm:mb-0 sm:h-full flex items-center"
            style={{
                color: pathname === item.link ? "#f31260" : "#fff",
            }}
        >
            <NextLink
                href={item.link}
                onClick={(e) => handleRouteChange(item.link as string, e)}
            >
                {item.name}
            </NextLink>
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
                        style={{
                            color: isActive(item.name, completeUrl) ? "#f31260" : "#fff",
                        }}
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
                        onClick={(e) => handleRouteChange(category.slug, e as any)}
                        style={{
                            color: category.slug === completeUrl ? "#f31260" : "#fff",
                        }}
                    >
                        {category.name}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};
