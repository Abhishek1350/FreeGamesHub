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
import { useMemo, useState } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { useGetAllGamesQuery } from "../../services"

export const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const completeUrl = location.pathname + location.search;
    const { data: allGames } = useGetAllGamesQuery();

    const handleNavigate = (link: string) => {
        navigate(link);
        setIsMenuOpen(false);
    };

    const categories = useMemo(() => {
        return Array.from(new Set(allGames?.map((game) => game?.genre)))
    }, [allGames]);

    const menuItems = useMemo(() => {
        return [
            {
                name: "Home",
                link: "/",
                categories: []
            },
            {
                name: "PC Games",
                categories: categories.map((category) => ({
                    name: category,
                    slug: `/games?platform=pc&category=${category}`,
                }))

            },
            {
                name: "Browser Games",
                categories: categories.map((category) => ({
                    name: category,
                    slug: `/games?platform=browser&category=${category}`,
                }))
            }]
    }, [categories]);


    return (
        <NextUINavbar
            onMenuOpenChange={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            shouldHideOnScroll isBordered
            className="dark-bg-2"
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
                                color={completeUrl === item.link ? 'primary' : 'foreground'}
                                style={{ fontWeight: completeUrl === item.link ? 'bold' : 'normal' }}
                            >
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ) : (
                        <Dropdown className="dark-bg-1 shadow-inset-1" key={item.name}>
                            <NavbarItem >
                                <DropdownTrigger>
                                    <Button
                                        disableRipple
                                        className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                        endContent={<FaChevronDown />}
                                        radius="sm"
                                        variant="light"
                                        style={{
                                            color: item?.categories?.some((category) => category.slug === decodeURIComponent(completeUrl)) ? '#0070f0' : 'white',
                                            fontWeight: item?.categories?.some((category) => category.slug === decodeURIComponent(completeUrl)) ? 'bold' : 'normal',
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
                                {
                                    item?.categories?.map((category) => (
                                        <DropdownItem
                                            key={category.name}
                                            as={Link}
                                            onClick={() => handleNavigate(category.slug)}
                                            style={{
                                                color: category.slug === decodeURIComponent(completeUrl) ? '#0070f0' : 'white',
                                            }}
                                            className="nav-link"
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
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-dark-1",
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
                            isActive={completeUrl === item.link ? true : false}
                            onClick={() => handleNavigate(item.link)}
                            as={Link}
                            style={{
                                color: decodeURIComponent(completeUrl) === item.link ? '#0070f0' : 'white',
                                fontSize: "18px",
                                fontWeight: decodeURIComponent(completeUrl) === item.link ? 'bold' : 'normal'
                            }}
                        >
                            {item.name}
                        </NavbarMenuItem>
                    ) : (
                        <Dropdown className="dark-bg-1" key={item.name}>
                            <NavbarItem>
                                <DropdownTrigger>
                                    <Button
                                        disableRipple
                                        className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                        endContent={<FaChevronDown />}
                                        radius="sm"
                                        variant="light"
                                        style={{
                                            fontSize: "18px",
                                            color: item?.categories?.some((category) => category.slug === decodeURIComponent(completeUrl)) ? '#0070f0' : 'white',
                                            fontWeight: item?.categories?.some((category) => category.slug === decodeURIComponent(completeUrl)) ? 'bold' : 'normal',
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
                                                color: category.slug === decodeURIComponent(completeUrl) ? '#0070f0' : 'white',
                                                fontWeight: category.slug === decodeURIComponent(completeUrl) ? 'bold' : 'normal',
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
