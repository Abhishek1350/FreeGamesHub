import { Card, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";
import { FaWindows, FaFirefoxBrowser } from "react-icons/fa";
import { IGame } from "@/lib/types";
import NextLink from "next/link";

interface Props {
    game: IGame;
}

export const PopularGamesCard = ({ game }: Props) => {
    return (
        <Card
            isPressable
            className="relative w-full aspect-[16/9]  overflow-hidden hover:scale-105"
            as={NextLink}
            href={`/games/${game?.id}`}
        >
            <CardHeader className="absolute py-8 px-[14px] flex-col gap-1 z-10 w-full h-full opacity-0 transition-400 hover:opacity-100 bg-black/80">
                <h5 className="font-bold text-large line-clamp-2 text-color-2">
                    {game?.title}
                </h5>
                <p className="text-default-500 text-tiny text-center line-clamp-3 text-color-3">
                    {game?.short_description}
                </p>
                <div className="flex justify-center gap-2 mt-2">
                    <Chip color="default">
                        <span className="font-semibold">{game?.genre}</span>
                    </Chip>
                    {game.platform === "PC (Windows)" ? (
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
                    )}
                </div>
            </CardHeader>
            <Image
                alt={game?.title}
                className="z-0 w-full h-full object-cover"
                src={game?.thumbnail}
                classNames={{
                    wrapper: "!max-w-full",
                }}
            />
        </Card>
    );
};
