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
                Buy YouTube Videos
            </h2>
            <p className="leading-relaxed text-base">
                Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.
            </p>
        </div>
    )
}
