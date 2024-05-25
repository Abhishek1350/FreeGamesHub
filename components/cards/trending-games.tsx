import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { FaWindows, FaFirefoxBrowser } from "react-icons/fa";
import { IGame } from "@/lib/types";
import NextLink from "next/link";

interface Props {
    game: IGame;
}

export const TrendingGamesCard = ({ game }: Props) => {
    return (
        <Card
            isPressable
            className="py-4 shadow-inset-1 cursor-pointer hover:scale-105 transition-400 w-full dark-bg-1"
            as={NextLink}
            href={`/games/${game?.id}`}
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
                <small className="text-color-3 mb-1">{game?.genre}</small>
                <h4 className="font-bold text-large text-color-2 text-left line-clamp-1">
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
