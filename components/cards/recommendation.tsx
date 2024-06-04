import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import NextLink from "next/link";
import { IGame } from "@/lib/types";

interface Props {
    game: IGame;
}

export function RecommendationCard({ game }: Props) {
    return (
        <Card
            isPressable
            className="bg-transparent rounded cursor-pointer hover:scale-105 transition-400 shadow-none min-h-[265px]"
            as={NextLink}
            href={`/games/${game?.id}`}
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
                <p className="leading-relaxed text-tiny">{game?.genre}</p>
                <h5 className="text-lg font-bold title-font mb-1 line-clamp-1">
                    {game?.title}
                </h5>
                <p className="leading-relaxed text-tiny line-clamp-2">
                    {game?.short_description}
                </p>
            </CardBody>
        </Card>
    );
};
