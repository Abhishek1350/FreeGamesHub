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
import { IGame } from "@/lib/types";
import { NavItem } from "./nav-item";
import { Search } from "./search";
import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "@/components/icons";
import { useDisclosure } from "@nextui-org/modal";

interface NavbarProps {
	games: IGame[];
	pcCategories: string[];
	browserCategories: string[];
}

export function Navbar({
	games,
	pcCategories,
	browserCategories,
}: NavbarProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const router = useRouter();
	const { isOpen, onOpen, onClose } = useDisclosure();

	function handleRouteChange(
		url: string,
		e?: React.MouseEvent<HTMLAnchorElement>
	) {
		if (e) e.preventDefault();
		if (isMenuOpen) setIsMenuOpen(false);
		if (isOpen) onClose();
		router.push(url);
	}

	function handleOpenSearch() {
		if (isMenuOpen) setIsMenuOpen(false);
		onOpen();
	}

	const menuItems = useMemo(() => {
		return [
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
	}, [pcCategories, browserCategories]);

	return (
		<NextUINavbar
			maxWidth="xl"
			isBordered
			classNames={{ base: "h-[3rem]" }}
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
					<Input
						aria-label="Search"
						classNames={{
							inputWrapper: "bg-default-100 hover:bg-default-150",
							input: "w-full cursor-pointer",
						}}
						placeholder="Search"
						startContent={
							<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
						}
						type="search"
						readOnly
						onClick={handleOpenSearch}
					/>
					<Search
						games={games}
						handleRouteChange={handleRouteChange}
						isOpen={isOpen}
						onClose={onClose}
					/>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu className="![--navbar-height:3rem]">
				<div className="mx-4 flex flex-col gap-2">
					{menuItems.map((item) => (
						<NavItem
							key={item.name}
							item={item}
							handleRouteChange={handleRouteChange}
						/>
					))}
				</div>
				<Input
					aria-label="Search"
					classNames={{
						inputWrapper: "bg-default-100 hover:bg-default-150",
						input: "w-full cursor-pointer",
					}}
					placeholder="Search"
					startContent={
						<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
					}
					type="search"
					readOnly
					onClick={handleOpenSearch}
				/>
				<Search
					games={games}
					handleRouteChange={handleRouteChange}
					isOpen={isOpen}
					onClose={onClose}
				/>
			</NavbarMenu>
		</NextUINavbar>
	);
}
