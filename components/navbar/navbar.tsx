import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Input } from "@nextui-org/input";
import NextLink from "next/link";
import { SearchIcon, Logo } from "@/components/icons";
import { getGames } from "@/lib/action";
import { IGame, PLATFORMS } from "@/lib/types";
import { NavItem } from "./nav-item";

export const Navbar = async () => {
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);

	const games: IGame[] = await getGames();

	const browserCategories = Array.from(
		new Set(
			games
				?.filter((game: IGame) => game?.platform === PLATFORMS.BROWSER)
				?.map((game: IGame) => game?.genre)
		)
	);

	const pcCategories = Array.from(
		new Set(
			games
				?.filter((game: IGame) => game?.platform === PLATFORMS.PC)
				?.map((game: IGame) => game?.genre)
		)
	);

	const menuItems = [
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

	return (
		<NextUINavbar maxWidth="xl" shouldHideOnScroll>
			<NavbarContent justify="center">
				<NavbarBrand>
					<NextLink href="/">
						<Logo />
					</NextLink>
				</NavbarBrand>
				<ul className="hidden md:flex gap-5 justify-start items-center">
					{menuItems.map((item) => (
						<NavItem key={item.name} item={item} />
					))}
				</ul>
			</NavbarContent>

			<NavbarContent className="hidden md:flex" justify="end">
				<NavbarItem className="hidden md:flex">{searchInput}</NavbarItem>
			</NavbarContent>

			<NavbarContent className="md:hidden basis-1 pl-4" justify="end">
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				{searchInput}
				<div className="mx-4 mt-5 flex flex-col gap-2">
					{menuItems.map((item) => (
						<NavItem key={item.name} item={item} />
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
