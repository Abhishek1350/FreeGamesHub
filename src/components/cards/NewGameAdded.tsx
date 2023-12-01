import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { FaWindows, FaFirefoxBrowser } from "react-icons/fa";
import { Game } from "../../services"

interface Props {
    game: Game
}

export const NewGamesAddedCard = (props: Props) => {
    const game = props.game
    
    return (
        <Card
            isPressable
            onClick={() => console.log("Card clicked")}
            className="py-4 cursor-pointer hover:scale-105 transition-400 w-full"
        >

            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                {
                    game.platform === "PC (Windows)" ? (
                        <p className="text-tiny font-bold flex items-center">
                            Windows <FaWindows className="inline ml-1 text-primary" />
                        </p>
                    ) : (
                        <p className="text-tiny font-bold flex items-center">
                            Browser {game?.platform} <FaFirefoxBrowser className="inline ml-1 text-secondary" />
                        </p>
                    )
                }
                <small className="text-default-500 mb-1">
                    {game?.genre}
                </small>
                <h4 className="font-bold text-large">
                    {game?.title}
                </h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    removeWrapper
                    alt={game?.title}
                    className="object-cover rounded-xl"
                    src={game?.thumbnail}
                />
            </CardBody>
        </Card>

    );
}
