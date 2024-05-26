import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import { Logo } from "@/components/icons";
import { getGames } from "@/lib/action";
import { IGame, PLATFORMS } from "@/lib/types";
import { NavItem } from "./nav-item";
import { Search } from "./search";

export const Navbar = async () => {
	const games: IGame[] = await getGames();

	const browserCategories = Array.from(
		new Set(
			games
				?.filter((game: IGame) => game?.platform === PLATFORMS.BROWSER)
				?.map((game: IGame) => game?.genre)
		)
	).sort((a, b) => a.localeCompare(b));

	const pcCategories = Array.from(
		new Set(
			games
				?.filter((game: IGame) => game?.platform === PLATFORMS.PC)
				?.map((game: IGame) => game?.genre)
		)
	).sort((a, b) => a.localeCompare(b));

	const menuItems = [
		{
			name: "Home",
			link: "/",
			categories: [],
		},
		{
			name: "PC Games",
			categories: pcCategories
				.map((category) => ({
					name: category,
					slug: `/games?platform=pc&category=${category}`,
				}))
				.concat({
					name: "All PC Games",
					slug: "/games?platform=pc",
				}),
		},
		{
			name: "Browser Games",
			categories: browserCategories
				.map((category) => ({
					name: category,
					slug: `/games?platform=browser&category=${category}`,
				}))
				.concat({
					name: "All Browser Games",
					slug: "/games?platform=browser",
				}),
		},
		{
			name: "Latest News",
			link: "/news",
			categories: [],
		},
		{
			name: "Giveaways",
			link: "/giveaways",
			categories: [],
		},
	];

	return (
		<NextUINavbar
			maxWidth="xl"
			shouldHideOnScroll
			isBordered
			classNames={{ base: "h-[3.5rem]" }}
		>
			<NavbarContent className="gap-0">
				<NavbarBrand>
					<NextLink href="/">
						<Logo />
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-5 justify-start items-center">
					{menuItems.map((item) => (
						<NavItem key={item.name} item={item} />
					))}
				</ul>
			</NavbarContent>

			<NavbarContent className="hidden lg:flex" justify="end">
				<NavbarItem className="hidden lg:flex">
					<Search games={games} />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu className="![--navbar-height:3.5rem]">
				<Search games={games} />
				<div className="mx-4 mt-5 flex flex-col gap-2">
					{menuItems.map((item) => (
						<NavItem key={item.name} item={item} />
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
