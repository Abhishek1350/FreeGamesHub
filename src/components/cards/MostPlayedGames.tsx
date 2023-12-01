import { Card, CardHeader, CardFooter, Image, Chip, Skeleton } from "@nextui-org/react";
import { FaWindows, FaFirefoxBrowser } from "react-icons/fa";

// interface Game {
//     id: number
//     title?: string;
//     description?: string;
//     image?: string;
//     placeformat?: string;
//     genre?: string;
// }

export const MostPlayedGamesCard = () => {
    return (
        <Card
            isPressable
            onClick={() => console.log("Card clicked")}
            className="relative w-full aspect-[16/9]  overflow-hidden hover:scale-105"
        >
            <CardHeader
                className="absolute py-8 px-[14px] flex-col z-10 w-full h-full opacity-0 transition-400 hover:opacity-100 bg-black/80">
                <h5 className="font-bold text-large">
                    Game Title should here
                </h5>
                <p className="text-default-500 text-tiny">
                    A free to play medieval strategy browser game. Build you own castle and create a powerful army! (100 chars )
                </p>
            </CardHeader>
            <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src="https://www.freetogame.com/g/569/thumbnail.jpg"
            />
            <CardFooter className="absolute gap-5 bg-black/20 bottom-0 z-1">
                <Chip color="default" >
                    <span className="font-semibold">
                        Category
                    </span>
                </Chip>
                <Chip color="primary">
                    <div className="flex items-center font-semibold">
                        <FaWindows className="mr-1" />
                        Windows
                    </div>
                </Chip>
            </CardFooter>
        </Card>
    );
}
