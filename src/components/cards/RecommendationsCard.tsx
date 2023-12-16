import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import { Game } from "../../utils";
import { Link } from "react-router-dom";

interface Props {
    game: Game;
}

export const RecommendationsCard = ({ game }: Props) => {
    return (
        <Card
            isPressable
            className="bg-transparent rounded cursor-pointer hover:scale-105 transition-400 shadow-none min-h-[265px]"
            as={Link}
            to={`/games/${game?.id}`}
        >
            <CardHeader className="p-0 w-full">
                <Image
                    className="rounded w-full object-cover"
                    src={game?.thumbnail}
                    alt={game?.title}
                    classNames={{
                        wrapper: "!max-w-full w-full",
                    }}
                />
            </CardHeader>
            <CardBody className="p-0 mt-2 px-1">
                <p className="leading-relaxed text-tiny text-color-3">
                    {game?.genre}
                </p>
                <h5 className="text-lg text-color-2 font-bold title-font mb-1 line-clamp-1">
                    {game?.title}
                </h5>
                <p className="leading-relaxed text-tiny text-color-3 line-clamp-2">
                    {game?.short_description}
                </p>
            </CardBody>
        </Card>
    );
};
