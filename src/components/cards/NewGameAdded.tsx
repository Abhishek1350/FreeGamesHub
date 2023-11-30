import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { FaWindows, FaFirefoxBrowser } from "react-icons/fa";

// interface Game {
//     id: number
//     title?: string;
//     description?: string;
//     image?: string;
//     placeformat?: string;
//     genre?: string;
// }

export const NewGamesAddedCard = () => {
    const navigate = useNavigate();

    return (
        <Card
            isPressable
            onClick={() => console.log("Card clicked")}
            className="py-4 cursor-pointer hover:scale-105 transition-400 w-full"
        >

            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny font-bold flex items-center">
                    Windows <FaWindows className="inline ml-1" />
                </p>
                <small className="text-default-500 mb-1">
                    Category
                </small>
                <h4 className="font-bold text-large">
                    Game Title should here!
                </h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Image
                    removeWrapper
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src="https://www.freetogame.com/g/568/thumbnail.jpg"
                />
            </CardBody>
        </Card>

    );
}
