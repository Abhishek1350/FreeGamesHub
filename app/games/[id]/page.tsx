import { getGames, getGameById } from "@/lib/action";
import { IGame } from "@/lib/types";
import { Container, ModalImageSlider, BlurIn, Slider } from "@/components";
import { notFound } from "next/navigation";
import { getRequirements } from "@/lib/utils";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { IoMdExit } from "react-icons/io";
import { ImSad, ImHappy } from "react-icons/im";
import { VscDiffAdded } from "react-icons/vsc";
import NextLink from "next/link";
import { Metadata } from "next";
import { currentSiteUrl } from "@/lib/env";

export async function generateMetadata({
    params,
}: {
    params: { id: string };
}): Promise<Metadata> {
    const { id } = params;

    const game: IGame = await getGameById(id);

    return {
        title: `${game?.title} | FreeGamesHub`,
        description: game?.short_description,
        openGraph: {
            title: `${game?.title} | FreeGamesHub`,
            description: game?.short_description,
            images: [
                {
                    url: game?.thumbnail,
                    alt: `${game?.title} | FreeGamesHub`,
                },
            ],
        },
        alternates: {
            canonical: new URL(`${currentSiteUrl}/${game?.id}`),
        },
    };
}

export async function generateStaticParams() {
    const games: IGame[] = await getGames();
    return games?.slice(0, 20).map((game) => ({
        id: game.id.toString(),
    }));
}

export default async function Game({ params }: { params: { id: string } }) {
    const [games, game]: [IGame[], IGame] = await Promise.all([
        getGames(),
        getGameById(params.id),
    ]);

    const recommendedGames = () => {
        const totalGames = games?.length;
        const randomIndex = Math.floor(Math.random() * (totalGames - 9));
        return games.slice(randomIndex, randomIndex + 9) || [];
    };

    if (!game?.id) {
        notFound();
    }

    return (
        <section className="text-gray-400 pb-5 shadow-inset-1 min-h-[80dvh]">
            <Container>
                <BlurIn className="flex flex-col md:flex-row" once={true}>
                    <div className="md:w-1/3 text-center md:pr-8 max-h-full md:max-h-[60vh] static md:sticky top-[80px]">
                        <Image
                            src={game?.thumbnail}
                            alt={game?.title}
                            radius="sm"
                            className="w-full sticky top-0"
                            classNames={{
                                wrapper: "!max-w-full",
                            }}
                        />
                        <div className="flex gap-5 items-center mt-5">
                            <Button
                                size="lg"
                                color="default"
                                radius="sm"
                                variant="bordered"
                                as="div"
                                className="w-2/5 cursor-default border-1"
                            >
                                {game?.genre}
                            </Button>
                            <Button
                                size="lg"
                                color={game?.platform === "Windows" ? "primary" : "secondary"}
                                radius="sm"
                                variant="ghost"
                                className="w-4/5 gap-1 text-xl font-bold"
                                endContent={<IoMdExit />}
                                as={NextLink}
                                href={game?.game_url}
                                target="_blank"
                            >
                                Play Now
                            </Button>
                        </div>

                        <div className="flex justify-around  p-4 mt-5 border border-gray-700 rounded-lg border-opacity-75 ">
                            <div className="xl:w-1/3 md:w-1/2">
                                <div className="flex flex-col items-center justify-center ">
                                    <ImHappy className="text-success mb-1" size={30} />
                                    <p className="text-color-3">
                                        {Math.ceil(Math.random() * 5000)}
                                    </p>
                                    <p className="text-color-2">Likes</p>
                                </div>
                            </div>

                            <div className="xl:w-1/3 md:w-1/2 ">
                                <div className="flex flex-col items-center justify-center ">
                                    <ImSad className="text-danger mb-1" size={30} />
                                    <p className="text-color-3">
                                        {Math.ceil(Math.random() * 100)}
                                    </p>
                                    <p className="text-color-2">Dislikes</p>
                                </div>
                            </div>

                            <div className="xl:w-1/3 md:w-1/2 ">
                                <div className="flex flex-col items-center justify-center ">
                                    <VscDiffAdded className="text-warning mb-1" size={30} />
                                    <p className="text-color-3">
                                        {Math.ceil(Math.random() * 200)}
                                    </p>
                                    <p className="text-color-2">Add</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-2/3 md:pl-4 md:py-2 px-2 md:px-0 md:border-l border-gray-800 md:border-t-0 border-t mt-4 pt-6 md:mt-0">
                        <div className="header mb-6">
                            <h1 className="text-2xl md:text-3xl font-bold text-color-2">
                                {game?.title}
                            </h1>
                            <div className="border gap-5 md:gap-10 border-gray-700 border-opacity-75 p-4 my-5 rounded-lg">
                                <p className="leading-relaxed text-base text-color-2">
                                    {game?.short_description}
                                </p>
                            </div>
                        </div>

                        <div className="content">
                            <h4 className="text-2xl font-semibold text-color-3 mb-2">
                                About This Game
                            </h4>
                            {game?.description ? (
                                <div dangerouslySetInnerHTML={{ __html: game.description }} />
                            ) : (
                                <p className="text-color-2 mb-2">
                                    No description available for this game.
                                </p>
                            )}

                            <div className="mt-6">
                                <h4 className="text-2xl font-semibold text-color-3 mb-4">
                                    Screenshots
                                </h4>

                                <div className="flex flex-wrap gap-3">
                                    {!game?.screenshots.length ? (
                                        <p className="text-color-2 mb-2">
                                            No Screenshots available for this game.
                                        </p>
                                    ) : (
                                        <ModalImageSlider
                                            images={game?.screenshots}
                                            gameTitle={game?.title}
                                        />
                                    )}
                                </div>
                            </div>

                            {getRequirements(game?.minimum_system_requirements).length ? (
                                <div className="mt-6">
                                    <h4 className="text-2xl font-semibold mb-4">
                                        System Requirements
                                    </h4>
                                    <div className="flex flex-wrap border gap-5 md:gap-8 border-gray-700 border-opacity-75 p-4 my-5 rounded-lg">
                                        {getRequirements(game?.minimum_system_requirements).map(
                                            (requirement, index) => (
                                                <div
                                                    key={index}
                                                    className="md:w-[46%] flex flex-col justify-center p-3 shadow-inset-1 rounded bg-gray-900"
                                                >
                                                    <p className="leading-relaxed text-base uppercase">
                                                        {requirement?.name}
                                                    </p>
                                                    <h6 className="text-base text-color-2 font-medium title-font">
                                                        {requirement?.value}
                                                    </h6>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="mt-6">
                                    <h4 className="text-2xl font-semibold text-color-3 mb-4">
                                        System Requirements
                                    </h4>
                                    <p className="text-color-2">
                                        No System Requirements available for this game.
                                    </p>
                                </div>
                            )}

                            <div className="mt-6">
                                <h4 className="text-2xl font-semibold text-color-3 mb-4">
                                    More Info
                                </h4>

                                <div className="flex flex-wrap border gap-5 md:gap-10 border-gray-700 border-opacity-75 p-4 my-5 rounded-lg">
                                    <div>
                                        <p className="leading-relaxed text-base text-color-3 ">
                                            Developer
                                        </p>
                                        <h6 className="text-lg text-color-2 font-medium title-font">
                                            {game?.developer}
                                        </h6>
                                    </div>

                                    <div>
                                        <p className="leading-relaxed text-base text-color-3 ">
                                            Publisher
                                        </p>
                                        <h6 className="text-lg text-color-2 font-medium title-font">
                                            {game?.publisher}
                                        </h6>
                                    </div>

                                    <div>
                                        <p className="leading-relaxed text-base text-color-3 ">
                                            Release Date
                                        </p>
                                        <h6 className="text-lg text-color-2 font-medium title-font">
                                            {game?.release_date?.toString()}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </BlurIn>

                <BlurIn className="w-full mt-6 px-2 md:px-0" once={true}>
                    <h4 className="text-2xl font-semibold text-color-3 mb-3">
                        You May Also Like
                    </h4>
                    <Slider
                        type="recommendations"
                        data={recommendedGames()}
                        effect="slide"
                    />
                </BlurIn>
            </Container>
        </section>
    );
}
