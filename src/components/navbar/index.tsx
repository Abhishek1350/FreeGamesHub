import {
    Navbar as NextUINavbar,
    NavbarContent,
    Link,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Image,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    NavbarItem,
    Button,
    NavbarBrand,
} from "@nextui-org/react";
import {
    Link as ReactRouterLink,
    useLocation,
    useNavigate,
} from "react-router-dom";
import { useMemo, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useGetAllGamesQuery } from "../../services";
import { Game } from "../../utils";

enum PLATFORMS {
    PC = "PC (Windows)",
    BROWSER = "Web Browser",
}

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

    const browserCategories = useMemo(() => {
        return Array.from(
            new Set(
                allGames
                    ?.filter((game: Game) => game?.platform === PLATFORMS.BROWSER)
                    ?.map((game: Game) => game?.genre)
            )
        );
    }, [allGames]);

    const pcCategories = useMemo(() => {
        return Array.from(
            new Set(
                allGames
                    ?.filter((game: Game) => game?.platform === PLATFORMS.PC)
                    ?.map((game: Game) => game?.genre)
            )
        );
    }, [allGames]);

    const menuItems = useMemo(() => {
        return [
            {
                name: "Home",
                link: "/",
                categories: [],
            },
            {
                name: "PC Games",
                categories: pcCategories.map((category) => ({
                    name: category,
                    slug: `/games?platform=pc&category=${category}`,
                })),
            },
            {
                name: "Browser Games",
                categories: browserCategories.map((category) => ({
                    name: category,
                    slug: `/games?platform=browser&category=${category}`,
                })),
            },
        ];
    }, [pcCategories, browserCategories]);

    return (
        <NextUINavbar
            onMenuOpenChange={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
            shouldHideOnScroll
            isBordered
            className="dark text-foreground bg-background dark-bg-2"
        >
            <NavbarBrand>
                <Link
                    to="/"
                    as={ReactRouterLink}
                    onClick={() => handleNavigate("/")}
                    className="font-bold"
                >
                    <Image src="/logo.png" className="max-w-full h-10" radius="none" />
                </Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-5" justify="end">
                {menuItems.map((item) =>
                    item?.link ? (
                        <NavbarItem key={item.name}>
                            <Link
                                to={item?.link}
                                as={ReactRouterLink}
                                color={completeUrl === item.link ? "danger" : "foreground"}
                                style={{
                                    fontWeight: completeUrl === item.link ? "bold" : "normal",
                                }}
                            >
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ) : (
                        <Dropdown className="dark-bg-1 shadow-inset-1" key={item.name}>
                            <NavbarItem>
                                <DropdownTrigger>
                                    <Button
                                        disableRipple
                                        className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                        endContent={<FaChevronDown />}
                                        radius="sm"
                                        variant="light"
                                        style={{
                                            color: item?.categories?.some(
                                                (category) =>
                                                    category.slug === decodeURIComponent(completeUrl)
                                            )
                                                ? "#f31260"
                                                : "white",
                                            fontWeight: item?.categories?.some(
                                                (category) =>
                                                    category.slug === decodeURIComponent(completeUrl)
                                            )
                                                ? "bold"
                                                : "normal",
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
                                {item?.categories?.map((category) => (
                                    <DropdownItem
                                        key={category.name}
                                        as={Link}
                                        onClick={() => handleNavigate(category.slug)}
                                        style={{
                                            color:
                                                category.slug === decodeURIComponent(completeUrl)
                                                    ? "#f31260"
                                                    : "white",
                                        }}
                                        className="nav-link"
                                    >
                                        {category.name}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    )
                )}
            </NavbarContent>

            <NavbarMenu className="bg-default-500/20">
                {menuItems.map((item) =>
                    item?.link ? (
                        <NavbarMenuItem
                            key={item.name}
                            isActive={completeUrl === item.link ? true : false}
                            onClick={() => handleNavigate(item.link)}
                            as={Link}
                            style={{
                                color:
                                    decodeURIComponent(completeUrl) === item.link
                                        ? "#f31260"
                                        : "white",
                                fontSize: "18px",
                                fontWeight:
                                    decodeURIComponent(completeUrl) === item.link
                                        ? "bold"
                                        : "normal",
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
                                            color: item?.categories?.some(
                                                (category) =>
                                                    category.slug === decodeURIComponent(completeUrl)
                                            )
                                                ? "#f31260"
                                                : "white",
                                            fontWeight: item?.categories?.some(
                                                (category) =>
                                                    category.slug === decodeURIComponent(completeUrl)
                                            )
                                                ? "bold"
                                                : "normal",
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
                                {item?.categories?.map((category) => (
                                    <DropdownItem
                                        key={category.name}
                                        as={Link}
                                        onClick={() => handleNavigate(category.slug)}
                                        style={{
                                            color:
                                                category.slug === decodeURIComponent(completeUrl)
                                                    ? "#f31260"
                                                    : "white",
                                            fontWeight:
                                                category.slug === decodeURIComponent(completeUrl)
                                                    ? "bold"
                                                    : "normal",
                                        }}
                                    >
                                        {category.name}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                    )
                )}
            </NavbarMenu>
            <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
            />
        </NextUINavbar>
    );
};
