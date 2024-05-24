import { Button } from "@nextui-org/button";
import NextLink from "next/link";
import { FaFirefoxBrowser, FaWindows } from "react-icons/fa";

export default function Home() {
	return (
		<>
			<section
				className="bg-center bg-cover bg-no-repeat py-4 sm:py-14"
				style={{
					backgroundImage:
						"linear-gradient(rgba(0, 0, 0, 0.70), rgba(0, 0, 0, 0.60)), url(/bg-2.webp)",
				}}
			>
				<div className="container mx-auto flex px-6 items-center justify-center flex-col">
					<div className="text-center max-w-[700px]">
						<h1 className="sm:text-4xl text-3xl mb-3 sm:mb-5 font-semibold text-white">
							Hunt Down the Ultimate{" "}
							<span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent font-bold">
								Free-to-Play
							</span>{" "}
							Gaming Experiences!
						</h1>
						<p className="mb-5 sm:text-[16px] text-[15px]">
							Embark on a quest for the best free-to-play thrills! Discover
							diverse digital realms, each offering exciting adventures. Unleash
							the{" "}
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
					</div>
				</div>
			</section>
		</>
	);
}
