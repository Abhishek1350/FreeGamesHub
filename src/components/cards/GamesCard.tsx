import { Game } from "../../services"
import { Link } from "react-router-dom"
import { Image } from "@nextui-org/react"

interface Props {
    game: Game
}


export const GamesCard = (props: Props) => {
    const game = props.game

    return (
        <Link className="dark-bg-1 shadow-inset-1 p-4 rounded-lg block min-h-[320px] hover:scale-105 transition-400" to={`/game/${game?.id}`}>
            <Image
                className=" rounded w-full object-cover object-center mb-6"
                src={game?.thumbnail}
                alt="content"
            />
            <h3
                className="tracking-widest text-indigo-400 text-xs font-medium title-font"
            >
                {game?.genre}
            </h3>
            <h2
                className="text-lg text-white font-medium title-font mb-2"
            >
                {game?.title}
            </h2>
            <p className="leading-relaxed text-tiny">
                {game?.short_description?.slice(0, 100)}
            </p>
        </Link>
    )
}