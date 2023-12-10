import { Game } from "../../utils";
import { Image } from "@nextui-org/react";
import { FaFirefoxBrowser, FaWindows } from "react-icons/fa";

interface Props {
    game: Game;
    handleNavigate: (path: string) => void;
}

export const GamesCard = (props: Props) => {
    const game = props.game;
    const handleNavigate = props.handleNavigate;

    return (
        <a
            className="dark-bg-1 shadow-inset-1 p-4 rounded-lg block min-h-[341px] hover:scale-105 transition-400"
            onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                e.preventDefault();
                handleNavigate(`/games/${game?.id}`);
            }}
            href="/"
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
                <h3 className="tracking-widest text-secondary text-xs font-medium title-font flex items-center ">
                    <FaFirefoxBrowser className="inline" /> {game?.genre}
                </h3>
            )}

            <h2 className="text-lg text-color-2 font-medium title-font mb-2 line-clamp-1">
                {game?.title}
            </h2>
            <p className="leading-relaxed text-tiny text-color-3 line-clamp-3">
                {game?.short_description}
            </p>
        </a>
    );
};
