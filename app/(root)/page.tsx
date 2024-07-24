import { Button } from "@nextui-org/button";
import NextLink from "next/link";
import { FaFirefoxBrowser, FaGamepad, FaWindows } from "react-icons/fa";
import {
	Container,
	BlurIn,
	MarqueeWrapper,
	PopularGamesCard,
	Slider,
} from "@/components";
import { getGames, getNews, getGiveaways } from "@/lib/action";
import { IGame, INews } from "@/lib/types";
import { MdNavigateNext } from "react-icons/md";
import { PLATFORMS } from "@/lib/constants";
import { Metadata } from "next";
import { currentSiteUrl } from "@/lib/env";
import Marquee from "react-fast-marquee";

export const metadata: Metadata = {
	title: "FreeGamesHub: Your Gateway to Free PC and Browser Gaming",
	description:
		"Explore a world of free PC games and browser-based fun at FreeGamesHub. Download exciting titles and play online without any cost. Your go-to destination for endless gaming enjoyment!",
	keywords:
		"Free PC games, Downloadable games, Browser gaming, Free-to-play, Online gaming, Indie games, Gaming community, free download pc games, lifetime free pc games",
	openGraph: {
		title: "FreeGamesHub: Your Gateway to Free PC and Browser Gaming",
		description:
			"Explore a world of free PC games and browser-based fun at FreeGamesHub. Download exciting titles and play online without any cost. Your go-to destination for endless gaming enjoyment!",
		images: [
			{
				url: "/og-image.webp",
				alt: "FreeGamesHub: Your Gateway to Free PC and Browser Gaming",
			},
		],
	},
	alternates: {
		canonical: new URL(currentSiteUrl),
	},
};

export default async function Home() {
	const [games, news, giveaways]: [IGame[], INews[], IGame[]] =
		await Promise.all([getGames(), getNews(), getGiveaways()]);

	const pcGames = games
		.filter((game) => game.platform === PLATFORMS.PC)
		.slice(0, 50);
	const browserGames = games
		.filter((game) => game.platform === PLATFORMS.BROWSER)
		.slice(0, 50);

	return (
		<>
			<section
				className="bg-center bg-cover bg-no-repeat py-5 sm:py-14"
				style={{
					backgroundImage:
						"linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.60)), url(/bg-2.webp)",
				}}
			>
				<Container>
					<div className="flex items-center justify-center flex-col">
						<BlurIn className="text-center max-w-[700px]">
							<h1 className="sm:text-4xl text-2xl mb-3 sm:mb-5 font-semibold text-white">
								Hunt Down the Ultimate{" "}
								<span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent font-bold">
									Free-to-Play
								</span>{" "}
								Gaming Experiences!
							</h1>

							<p className="mb-5 sm:text-[16px] text-[15px]">
								Embark on a quest for the best free-to-play thrills! Discover
								diverse digital realms, each offering exciting adventures.
								Unleash the{" "}
								<span className="bg-gradient-to-r from-danger to-warning bg-clip-text text-transparent font-semibold">
									ultimate gaming experiences
								</span>{" "}
								and let the quest begin!
							</p>
							<p className="sm:text-3xl text-2xl mb-6 font-bold">
								<span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
									Choose your platform
								</span>
							</p>
							<div className="flex justify-center gap-6">
								<Button
									color="primary"
									variant="ghost"
									className="font-bold gap-1"
									size="lg"
									startContent={<FaWindows size={18} />}
									as={NextLink}
									href="/games?platform=pc"
									radius="sm"
								>
									Windows
								</Button>
								<Button
									color="secondary"
									variant="ghost"
									className="font-bold gap-1"
									size="lg"
									startContent={<FaFirefoxBrowser size={18} />}
									as={NextLink}
									href="/games?platform=browser"
									radius="sm"
								>
									Browser
								</Button>
							</div>
						</BlurIn>
					</div>
				</Container>
			</section>

			<section className="py-5 sm:py-8">
				<BlurIn>
					<Container>
						<div className="flex justify-between items-center mb-5 sm:mb-6">
							<h4 className="sm:text-3xl text-2xl">
								<span className="bg-gradient-to-r from-danger to-warning bg-clip-text text-transparent font-bold">
									Trending Games
								</span>
							</h4>
							<Button
								endContent={<MdNavigateNext size={22} />}
								color="primary"
								variant="light"
								className="font-semibold px-1 gap-0"
								as={NextLink}
								href="/games?sortby=popularity"
							>
								View All
							</Button>
						</div>
						<Slider type="games" data={games} effect="coverflow" />
					</Container>
				</BlurIn>
			</section>

			<section className="py-5 sm:py-8 flex flex-col gap-10">
				<MarqueeWrapper>
					<BlurIn>
						<Marquee speed={100} className="py-5" pauseOnHover>
							{pcGames.map((game) => (
								<PopularGamesCard game={game} key={game.id} />
							))}
						</Marquee>
					</BlurIn>
				</MarqueeWrapper>
				<MarqueeWrapper>
					<BlurIn>
						<Marquee direction="right" className="py-5" speed={100} pauseOnHover>
							{browserGames.map((game) => (
								<PopularGamesCard game={game} key={game.id} />
							))}
						</Marquee>
					</BlurIn>
				</MarqueeWrapper>
			</section>

			<section className="pt-5 sm:pt-8">
				<Container>
					<div className="flex justify-between items-center mb-5 sm:mb-6">
						<h4 className="sm:text-3xl text-2xl">
							<span className="bg-gradient-to-r from-danger to-warning bg-clip-text text-transparent font-bold">
								Latest News
							</span>
						</h4>
						<Button
							endContent={<MdNavigateNext size={22} />}
							color="primary"
							variant="light"
							className="font-semibold px-1 gap-0"
							as={NextLink}
							href="/news"
						>
							View All
						</Button>
					</div>
					<Slider type="news" data={news} effect="slide" />
				</Container>
			</section>

			<section className="pb-5 sm:pb-8">
				<Container>
					<div className="flex justify-between items-center mb-5 sm:mb-6">
						<h4 className="sm:text-3xl text-2xl">
							<span className="bg-gradient-to-r from-danger to-warning bg-clip-text text-transparent font-bold">
								Giveaways
							</span>
						</h4>
						<Button
							endContent={<MdNavigateNext size={22} />}
							color="primary"
							variant="light"
							className="font-semibold px-1 gap-0"
							as={NextLink}
							href="/giveaways"
						>
							View All
						</Button>
					</div>
					<Slider type="giveaways" data={giveaways} effect="slide" />
				</Container>
			</section>

			<section
				className="bg-top bg-cover bg-no-repeat py-5 sm:py-14"
				style={{
					backgroundImage:
						"linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.85)), url(/bg.webp)",
				}}
			>
				<Container>
					<BlurIn className="py-24 flex flex-col sm:flex-row justify-center items-center mx-auto">
						<h5 className="text-large sm:pr-16 mb-6 sm:mb-0 font-medium title-font text-white text-center sm:text-left">
							Uncertain about your next gaming adventure? Explore our <br />{" "}
							<span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent font-bold">
								exquisite collection of games
							</span>{" "}
							and discover the ideal match for your gaming desires!
						</h5>
						<Button
							endContent={<FaGamepad size={22} />}
							color="success"
							variant="ghost"
							className="font-bold gap-2 animate-bounce"
							as={NextLink}
							href="/games?sortby=newest"
							radius="sm"
							size="lg"
						>
							View All
						</Button>
					</BlurIn>
				</Container>
			</section>
		</>
	);
}
