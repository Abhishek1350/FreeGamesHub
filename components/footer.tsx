import { Image } from "@nextui-org/image";
import { getSocialLinks } from "@/lib/action";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import NextLink from "next/link";
import { ISocialLink } from "@/lib/types";

const getSocialMediaIcon = (title: string) => {
    switch (title) {
        case "github":
            return <FaGithub size={30} />;
        case "instagram":
            return <FaInstagram size={30} />;
        case "twitter":
            return <FaTwitter size={30} />;
        case "linkedin":
            return <FaLinkedinIn size={30} />;
        default:
            return null;
    }
};

const getClassNames = (title: string) => {
    switch (title) {
        case "github":
            return "text-gray-400 hover:text-gray-500";
        case "instagram":
            return "text-pink-500 hover:text-pink-600";
        case "twitter":
            return "text-blue-400 hover:text-blue-500";
        case "linkedin":
            return "text-blue-600 hover:text-blue-700";
        default:
            return "text-gray-400 hover:text-gray-500";
    }
};

export const Footer = async () => {
    const socialMediaLinks: ISocialLink[] = await getSocialLinks();

    return (
        <footer className="text-gray-400 py-4 bg-background border-divider border-t">
            <div className="container mx-auto flex items-center flex-col">
                <div className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    <Image
                        src="/logo-sm.png"
                        width={40}
                        alt="Free Games Hub"
                        radius="sm"
                    />
                    <span className="ml-3 bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent font-bold">
                        © {new Date().getFullYear()}{" "}
                        <NextLink href="/">FreeGamesHub</NextLink>
                    </span>
                </div>
                <div className="flex mt-6 gap-10">
                    {socialMediaLinks.map((link) => (
                        <NextLink
                            key={link.id}
                            href={link.url}
                            target="_black"
                            rel="noopener noreferrer"
                            className={getClassNames(link.title.toLocaleLowerCase())}
                        >
                            {getSocialMediaIcon(link.title.toLocaleLowerCase())}
                        </NextLink>
                    ))}
                </div>
                <p className="mt-5 text-center">
                    Thanks to{" "}
                    <NextLink
                        href="https://www.mmobomb.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 underline"
                    >
                        {" "}
                        MMOBomb.com
                    </NextLink>{" "}
                    for providing awesome API.
                </p>
            </div>
        </footer>
    );
};
