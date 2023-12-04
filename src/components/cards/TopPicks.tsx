import { Image } from "@nextui-org/react";
import { Game } from "../../services"
import { Link } from "react-router-dom";

interface Props {
    game?: Game
}

export const TopPicksCard = (props: Props) => {
    const game = props.game

    return (
        <Link
            className="shadow-inset-1 pb-5 sm:w-full md:w-[450px] cursor-pointer overflow-hidden hover:scale-105  transition-400 dark-bg-3 rounded-xl"
            to={`/game/${game?.id}`}
        >
            <Image
                removeWrapper
                alt="content"
                className="object-cover !w-full md:h-[250px]"
                src={game?.thumbnail}
                loading="lazy"
            />
            <h2 className="title-font text-2xl font-medium text-white mt-5 mb-2 px-4 line-clamp-1">
                {game?.title}
            </h2>
            <p className="leading-relaxed text-base px-4 line-clamp-2">
                {game?.short_description}
            </p>
        </Link>
    )
}
