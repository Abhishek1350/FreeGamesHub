import { IGame } from "@/lib/types";
import NextLink from "next/link";
import { Image } from "@nextui-org/image";
import { FaFirefoxBrowser, FaWindows } from "react-icons/fa";
import { Card } from "@nextui-org/card";

interface Props {
    game: IGame;
}

export const GamesCard = ({ game }: Props) => {
    return (
        <Card
            isPressable
            className="p-4 shadow-inset-1 cursor-pointer hover:scale-105 transition-400"
            as={NextLink}
            href={`/games/${game?.id}`}
        >
            <Image
                className="rounded w-full object-cover object-center mb-6"
                src={game?.thumbnail}
                alt={game?.title}
                classNames={{
                    wrapper: "!max-w-full",
                }}
            />
            {game.platform === "PC (Windows)" ? (
                <h3 className="tracking-widest text-primary text-xs font-medium title-font flex items-center gap-1">
                    <FaWindows className="inline" /> {game?.genre}
                </h3>
            ) : (
                <h3 className="tracking-widest text-secondary text-xs font-medium title-font flex items-center gap-1">
                    <FaFirefoxBrowser className="inline" /> {game?.genre}
                </h3>
            )}

            <h2 className="text-lg text-color-2 font-medium title-font mb-2 line-clamp-1">
                {game?.title}
            </h2>
            <p className="leading-relaxed text-tiny text-color-3 line-clamp-3">
                {game?.short_description}
            </p>
        </Card>
    );
};
