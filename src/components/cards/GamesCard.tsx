import { Game } from "../../services"
import { Link } from "react-router-dom"
import { Image } from "@nextui-org/react"

interface Props {
    game: Game
}


export const GamesCard = (props: Props) => {
    const game = props.game

    return (
        <Link className="dark-bg-3 bg-opacity-40 p-6 rounded-lg block min-h-[350px]" to={`/game/${game?.id}`}>
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