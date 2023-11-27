import {
    Navbar as NextUINavbar,
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
    NavbarItem,
    Button,
    Input
} from "@nextui-org/react";
import { Link as ReactRouterLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";

export const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigate = (link: string) => {
        navigate(link);
        setIsMenuOpen(false);
    };

    const menuItems = [
        {
            name: "Home",
            link: "/",
            categories: []
        },
        {
            name: "PC Games",
            categories: [
                {
                    name: "All",
                    slug: "/pc-games/all",

                },
                {
                    name: "MMORPG",
                    slug: "/pc-games/MMORPG",
                },
                {
                    name: "Racing",
                    slug: "/pc-games/Racing",
                },
                {
                    name: "Shooter",
                    slug: "/pc-games/Shooter",
                },

                {
                    name: "Strategy",
                    slug: "/pc-games/Strategy",
                },
                {
                    name: "Fantasy",
                    slug: "/pc-games/Fantasy",
                },
                {
                    name: "Sports",
                    slug: "/pc-games/Sports",
                },
                {
                    name: "Social",
                    slug: "/pc-games/Social",
                },
            ]

        },
        {
            name: "Browser Games",
            categories: [
                {
                    name: "All",
                    slug: "/browser-games/all",

                },
                {
                    name: "MMORPG",
                    slug: "/browser-games/MMORPG",
                },
                {
                    name: "Racing",
                    slug: "/browser-games/Racing",
                },
                {
                    name: "Shooter",
                    slug: "/browser-games/Shooter",
                },

                {
                    name: "Strategy",
                    slug: "/browser-games/Strategy",
                },
                {
                    name: "Fantasy",
                    slug: "/browser-games/Fantasy",
                },
                {
                    name: "Sports",
                    slug: "/browser-games/Sports",
                },
                {
                    name: "Social",
                    slug: "/browser-games/Social",
                },
            ]

        }
    ]

    return (
        <NextUINavbar
            onMenuOpenChange={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            shouldHideOnScroll isBordered
            className="bg-gray-900"
        >
            <Link to="/" as={ReactRouterLink} onClick={() => handleNavigate("/")} className="font-bold">
                <Avatar size="sm" src="/logo.png" />
            </Link>

            <NavbarContent className="hidden sm:flex gap-5 ml-0 md:ml-5">
                {menuItems.map((item) => (
                    item?.link ? (
                        <NavbarItem key={item.name}>
                            <Link
                                to={item?.link}
                                as={ReactRouterLink}
                                color={location.pathname === item.link ? 'danger' : 'foreground'}
                                style={{ fontWeight: location.pathname === item.link ? 'bold' : 'normal' }}
                            >
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ) : (
                        <Dropdown className="dark bg-gray-900" key={item.name}>
                            <NavbarItem className="">
                                <DropdownTrigger>
                                    <Button
                                        disableRipple
                                        className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                        endContent={<FaChevronDown />}
                                        radius="sm"
                                        variant="light"
                                        style={{
                                            color: item?.categories?.some((category) => category.slug === location.pathname) ? '#f31260' : 'white',
                                            fontWeight: item?.categories?.some((category) => category.slug === location.pathname) ? 'bold' : 'normal',
                                        }}
                                    >
                                        {item.name}
                                    </Button>
                                </DropdownTrigger>
                            </NavbarItem>
                            <DropdownMenu
                                itemClasses={{
                                    base: "gap-4",
                                }}
                            >
                                {
                                    item?.categories?.map((category) => (
                                        <DropdownItem
                                            key={category.name}
                                            as={Link}
                                            onClick={() => handleNavigate(category.slug)}
                                            style={{
                                                color: category.slug === location.pathname ? '#f31260' : 'white',
                                            }}
                                            className="dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:hover:text-white"
                                        >
                                            {category.name}
                                        </DropdownItem>
                                    ))
                                }
                            </DropdownMenu>
                        </Dropdown>
                    )
                ))}
            </NavbarContent>

            <NavbarContent className="sm:flex gap-5">
                <Input
                    classNames={{
                        base: "max-w-full h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<FaSearch />}
                    type="search"
                />
            </NavbarContent>


            <NavbarMenu className="bg-default-500/20">
                {menuItems.map((item) => (
                    item?.link ? (
                        <NavbarMenuItem
                            key={item.name}
                            isActive={location.pathname === item.link ? true : false}
                            onClick={() => handleNavigate(item.link)}
                            as={Link}
                            style={{
                                color: location.pathname === item.link ? '#f31260' : 'white',
                                fontSize: "18px",
                                fontWeight: location.pathname === item.link ? 'bold' : 'normal'
                            }}
                        >
                            {item.name}
                        </NavbarMenuItem>
                    ) : (
                        <Dropdown className="dark" key={item.name}>
                            <NavbarItem className="dark">
                                <DropdownTrigger>
                                    <Button
                                        disableRipple
                                        className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                        endContent={<FaChevronDown />}
                                        radius="sm"
                                        variant="light"
                                        style={{
                                            fontSize: "18px",
                                            color: item?.categories?.some((category) => category.slug === location.pathname) ? '#f31260' : 'white',
                                            fontWeight: item?.categories?.some((category) => category.slug === location.pathname) ? 'bold' : 'normal',
                                        }}
                                    >
                                        {item.name}
                                    </Button>
                                </DropdownTrigger>
                            </NavbarItem>
                            <DropdownMenu
                                itemClasses={{
                                    base: "gap-4",
                                }}
                            >
                                {
                                    item?.categories?.map((category) => (
                                        <DropdownItem
                                            key={category.name}
                                            as={Link}
                                            onClick={() => handleNavigate(category.slug)}
                                            style={{
                                                color: category.slug === location.pathname ? '#f31260' : 'white',
                                                fontWeight: category.slug === location.pathname ? 'bold' : 'normal',
                                            }}
                                        >
                                            {category.name}
                                        </DropdownItem>
                                    ))
                                }
                            </DropdownMenu>
                        </Dropdown>
                    )
                ))}
            </NavbarMenu>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />

        </NextUINavbar>
    );
}
