import { Image } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { FaWindows, FaFirefoxBrowser } from "react-icons/fa";

export const TopPicksCard = () => {
    return (
        <div className="mb-10 sm:w-full md:w-[450px]">
            <Image
                removeWrapper
                alt="content"
                className="object-cover !w-full md:h-[250px]"
                src="https://www.freetogame.com/g/568/thumbnail.jpg"
            />
            <h2 className="title-font text-2xl font-medium text-white mt-6 mb-3">
                Game Title should here
            </h2>
            <p className="leading-relaxed text-base">
                A free to play medieval strategy browser game. Build you own castle and create a powerful army! (100 chars )
            </p>
        </div>
    )
}
