import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { FaWindows, FaFirefoxBrowser } from "react-icons/fa";
import { Game } from "../../utils";
import { Link } from "react-router-dom";

interface Props {
    game: Game;
}

export const NewGamesAddedCard = (props: Props) => {
    const game = props.game;

    return (
        <Card
            isPressable
            className="py-4 shadow-inset-1 cursor-pointer hover:scale-105 transition-400 w-full dark-bg-1"
            as={Link}
            to={`/game/${game?.id}`}
        >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                {game.platform === "PC (Windows)" ? (
                    <p className="text-tiny font-bold flex items-center text-primary">
                        Windows <FaWindows className="inline ml-1 " />
                    </p>
                ) : (
                    <p className="text-tiny font-bold flex items-center text-secondary">
                        Browser <FaFirefoxBrowser className="inline ml-1 " />
                    </p>
                )}
                <small className="text-default-500 mb-1">{game?.genre}</small>
                <h4 className="font-bold text-large text-white text-left line-clamp-1">
                    {game?.title}
                </h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt={game?.title}
                    className="object-cover rounded-xl w-full"
                    src={game?.thumbnail}
                    classNames={{
                        wrapper: "!max-w-full",
                    }}
                />
            </CardBody>
        </Card>
    );
};
