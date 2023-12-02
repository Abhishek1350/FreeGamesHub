import { Card, CardHeader, CardFooter, Image, Chip } from "@nextui-org/react";
import { FaWindows, FaFirefoxBrowser } from "react-icons/fa";
import { Game } from "../../services"
import { Link } from "react-router-dom"

interface Props {
    game: Game
}


export const MostPlayedGamesCard = (props: Props) => {
    const game = props.game

    return (
        <Card
            isPressable
            className="relative w-full aspect-[16/9]  overflow-hidden hover:scale-105"
            as={Link}
            to={`/game/${game?.id}`}
        >
            <CardHeader
                className="absolute py-8 px-[14px] flex-col z-10 w-full h-full opacity-0 transition-400 hover:opacity-100 bg-black/80">
                <h5 className="font-bold text-large line-clamp-2">
                    {game?.title}
                </h5>
                <p className="text-default-500 text-tiny text-center line-clamp-3">
                    {game?.short_description?.slice(0, 100)}
                </p>
            </CardHeader>
            <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src={game?.thumbnail}
            />
            <CardFooter className="absolute gap-5 bg-black/20 bottom-0 z-1">
                <Chip color="default" >
                    <span className="font-semibold">
                        {game?.genre}
                    </span>
                </Chip>
                {
                    game.platform === "PC (Windows)" ? (
                        <Chip color="primary">
                            <div className="flex items-center font-semibold">
                                <FaWindows className="mr-1" /> Windows
                            </div>
                        </Chip>
                    ) : (
                        <Chip color="secondary">
                            <div className="flex items-center font-semibold">
                                <FaFirefoxBrowser className="mr-1" /> Browser
                            </div>
                        </Chip>
                    )
                }

            </CardFooter>
        </Card>
    );
}
