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
        className="mb-10 pb-5 sm:w-full md:w-[450px] cursor-pointer overflow-hidden hover:scale-105  transition-400 dark-bg-1 rounded-xl"
        to={`/game/${game?.id}`}
        >
            <Image
                removeWrapper
                alt="content"
                className="object-cover !w-full md:h-[250px]"
                src={game?.thumbnail}
            />
            <h2 className="title-font text-2xl font-medium text-white mt-5 mb-2 px-3">
                {game?.title}
            </h2>
            <p className="leading-relaxed text-base px-3">
                {game?.short_description}
            </p>
        </Link>
    )
}
