import {
    Navbar as NextUINavbar,
    NavbarBrand,
    NavbarContent,
    Link,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Avatar,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    NavbarItem
} from "@nextui-org/react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import { useState } from "react";

const categories = [
    {
        id: 1,
        name: "All",
        slug: "/games/all",
    },
    {
        id: 2,
        name: "MMORPG",
    },
    {
        id: 3,
        name: "Racing",
    },
    {
        id: 4,
        name: "Shooter",
    },

    {
        id: 5,
        name: "Strategy",
    },
    {
        id: 6,
        name: "Fantasy",
    },
    {
        id: 7,
        name: "Sports",
    },
    {
        id: 8,
        name: "Social",
    },
];

export const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "PC Games",
            categories : [
                {
                    id: 1,
                    name: "All",
                    slug: "/pc-games/all",

                },
                {
                    id: 2,
                    name: "MMORPG",
                    slug: "/pc-games/MMORPG",
                },
                {
                    id: 3,
                    name: "Racing",
                    slug: "/pc-games/Racing",
                },
                {
                    id: 4,
                    name: "Shooter",
                    slug: "/pc-games/Shooter",
                },
            
                {
                    id: 5,
                    name: "Strategy",
                    slug: "/pc-games/Strategy",
                },
                {
                    id: 6,
                    name: "Fantasy",
                    slug: "/pc-games/Fantasy",
                },
                {
                    id: 7,
                    name: "Sports",
                    slug: "/pc-games/Sports",
                },
                {
                    id: 8,
                    name: "Social",
                    slug: "/pc-games/Social",
                },
            ]

        },
        {
            name: "Browser Games",
            link: "/browser-games",
            categories : [
                {
                    id: 1,
                    name: "All",
                    slug: "/browser-games/all",

                },
                {
                    id: 2,
                    name: "MMORPG",
                    slug: "/browser-games/MMORPG",
                },
                {
                    id: 3,
                    name: "Racing",
                    slug: "/browser-games/Racing",
                },
                {
                    id: 4,
                    name: "Shooter",
                    slug: "/browser-games/Shooter",
                },
            
                {
                    id: 5,
                    name: "Strategy",
                    slug: "/browser-games/Strategy",
                },
                {
                    id: 6,
                    name: "Fantasy",
                    slug: "/browser-games/Fantasy",
                },
                {
                    id: 7,
                    name: "Sports",
                    slug: "/browser-games/Sports",
                },
                {
                    id: 8,
                    name: "Social",
                    slug: "/browser-games/Social",
                },
            ]

        }
    ]

    return (
        <NextUINavbar className="h-[50px]" onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} shouldHideOnScroll isBordered style={{ height: "50px" }}>
                <NavbarBrand>
                    <Link to="/" as={ReactRouterLink} className="font-bold">
                        <Avatar size="sm" src="/logo.png" />
                    </Link>
                </NavbarBrand>

                

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item) => (
                    <NavbarItem isActive={location.pathname === item.link ? true : false} key={item.link}>
                        <Link to={item?.link} as={ReactRouterLink} color={location.pathname === item.link ? 'danger' : 'foreground'}>
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent as="div" justify="end">
                <NavbarMenu>
                    {menuItems.map((item) => (
                        <NavbarMenuItem
                            key={item?.name}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Link to="/" as={ReactRouterLink} className="font-bold">
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>

        </NextUINavbar>
    );
}
