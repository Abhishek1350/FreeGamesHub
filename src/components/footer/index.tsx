import { Image } from "@nextui-org/react";
import { socialMediaLinks } from "../../utils";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const getSocialMediaIcon = (url: string) => {
    switch (url) {
        case "github":
            return <FaGithub size={30} />
        case "instagram":
            return <FaInstagram size={30} />
        case "twitter":
            return <FaTwitter size={30} />
        case "linkedin":
            return <FaLinkedinIn size={30} />
        default:
            return <FaGithub size={30} />
    }
}

const getClassNames = (name: string) => {
    switch (name) {
        case "github":
            return "text-gray-400 hover:text-gray-500"
        case "instagram":
            return "text-pink-500 hover:text-pink-600"
        case "twitter":
            return "text-blue-400 hover:text-blue-500"
        case "linkedin":
            return "text-blue-600 hover:text-blue-700"
        default:
            return "text-gray-400 hover:text-gray-500"
    }
}

export const Footer = () => {
    return (
        <footer className="text-gray-400 bg-gray-900 body-font py-4">
            <div className="container mx-auto flex items-center flex-col">
                <div className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <Image
                        src="/logo.png"
                        width={30}
                        height={30}
                        alt="Free Games Hub"
                    />
                    <span className="ml-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        © {new Date().getFullYear()} FreeGamesHub
                    </span>
                </div>
                <div className="flex mt-6 gap-10">
                    {
                        socialMediaLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_black"
                                rel="noopener noreferrer"
                                className={getClassNames(link.name)}
                            >
                                {getSocialMediaIcon(link.name)}
                            </a>
                        ))
                    }
                </div>
                <p className="mt-5 text-center">
                    Thanks to {" "}
                    <a
                        href="https://www.freetogame.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        freetogame.com
                    </a> {" "}
                    & {" "}
                    <a
                        href="https://rapidapi.com/digiwalls/api/free-to-play-games-database"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    > {" "}
                        rapidapi.com
                    </a> {" "}
                    for providing awesome API
                </p>
            </div>

        </footer>
    )
}