import { Button } from "@nextui-org/button";
import NextLink from "next/link";
import { FaFirefoxBrowser, FaWindows } from "react-icons/fa";
import {
	Container,
	BlurIn,
	MarqueeWrapper,
	MarqueeItem,
	PopularGamesCard,
	Slider,
} from "@/components";
import { getGames, getNews } from "@/lib/action";
import { IGame, PLATFORMS, INews } from "@/lib/types";
import { MdNavigateNext } from "react-icons/md";

export default async function Home() {
	const games: IGame[] = await getGames();
	const news: INews[] = await getNews();

	const pcGames = games
		.filter((game) => game.platform === PLATFORMS.PC)
		.slice(0, 50);
	const browserGames = games
		.filter((game) => game.platform === PLATFORMS.BROWSER)
		.slice(0, 50);

	return (
		<>
			<section
				className="bg-center bg-cover bg-no-repeat py-4 sm:py-14"
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

			<section>
				<BlurIn>
					<Container>
						<div className="flex justify-between items-center mb-5 sm:mb-8">
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
								href="/games"
							>
								View All
							</Button>
						</div>
						<Slider type="games" data={games} effect="coverflow" />
					</Container>
				</BlurIn>
			</section>

			<section className="py-20 md:shadow-xl sm:py-14">
				<BlurIn>
					<MarqueeWrapper>
						<MarqueeItem pauseOnHover className="[--duration:150s] mb-10">
							{pcGames.map((game) => (
								<PopularGamesCard game={game} key={game.id} />
							))}
						</MarqueeItem>
					</MarqueeWrapper>
				</BlurIn>
				<BlurIn>
					<MarqueeWrapper>
						<MarqueeItem reverse pauseOnHover className="[--duration:150s]">
							{browserGames.map((game) => (
								<PopularGamesCard game={game} key={game.id} />
							))}
						</MarqueeItem>
					</MarqueeWrapper>
				</BlurIn>
			</section>

			<section>
				<Container>
					<div className="flex justify-between items-center mb-5 sm:mb-8">
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
		</>
	);
}
