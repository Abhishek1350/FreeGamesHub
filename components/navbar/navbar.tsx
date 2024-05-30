"use client";

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
import { IGame, PLATFORMS } from "@/lib/types";
import { NavItem } from "./nav-item";
import { Search } from "./search";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";

interface NavbarProps {
	games: IGame[];
}

export function Navbar({ games }: NavbarProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const router = useRouter();

	function handleRouteChange(
		url: string,
		e?: React.MouseEvent<HTMLAnchorElement>
	) {
		if (e) e.preventDefault();
		if (isMenuOpen) {
			setIsMenuOpen(false);
		}
		router.push(url);
	}

	const browserCategories = useMemo(
		() =>
			Array.from(
				new Set(
					games
						?.filter((game: IGame) => game?.platform === PLATFORMS.BROWSER)
						?.map((game: IGame) => game?.genre)
				)
			).sort((a, b) => a.localeCompare(b)),
		[games]
	);

	const pcCategories = useMemo(
		() =>
			Array.from(
				new Set(
					games
						?.filter((game: IGame) => game?.platform === PLATFORMS.PC)
						?.map((game: IGame) => game?.genre)
				)
			).sort((a, b) => a.localeCompare(b)),
		[games]
	);

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
			// classNames={{ base: "h-[3.5rem]" }}
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
		>
			<NavbarContent className="gap-0">
				<NavbarBrand>
					<NextLink href="/" onClick={(e) => handleRouteChange("/", e)}>
						<Logo />
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-5 justify-start items-center">
					{menuItems.map((item) => (
						<NavItem
							key={item.name}
							item={item}
							handleRouteChange={handleRouteChange}
						/>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent className="hidden lg:flex" justify="end">
				<NavbarItem className="hidden lg:flex">
					<Search games={games} handleRouteChange={handleRouteChange} />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
				<NavbarMenuToggle />
			</NavbarContent>

			{/* <NavbarMenu className="![--navbar-height:3.5rem]"> */}
			<NavbarMenu className="![--navbar-height:3.5rem]">
				<div className="mx-4 flex flex-col gap-2">
					{menuItems.map((item) => (
						<NavItem
							key={item.name}
							item={item}
							handleRouteChange={handleRouteChange}
						/>
					))}
				</div>
				<Search games={games} handleRouteChange={handleRouteChange} />
			</NavbarMenu>
		</NextUINavbar>
	);
}
