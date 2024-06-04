import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { IGiveaway } from "@/lib/types";
import NextLink from "next/link";

interface Props {
    giveaway: IGiveaway;
}

const getNumberValue = (value: string = "50%") => {
    return Number(value.replace("%", ""));
};

export const GiveawayCard = ({ giveaway }: Props) => {
    return (
        <Card
            isPressable
            className="py-2 pb-3 shadow-inset-1 cursor-pointer hover:scale-105 transition-400 w-full dark-bg-1"
            as={NextLink}
            href={giveaway?.giveaway_url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <CardHeader className="pb-0 pt-2 px-3">
                <Image
                    alt={giveaway?.title}
                    className="object-cover rounded-xl w-full"
                    src={giveaway?.main_image}
                    classNames={{
                        wrapper: "!max-w-full",
                    }}
                    removeWrapper
                />
            </CardHeader>
            <CardBody className="px-3">
                {getNumberValue(giveaway?.keys_left) > 60 ? (
                    <p className="text-success line-clamp-3 mb-1 font-bold">
                        {giveaway?.keys_left} left
                    </p>
                ) : getNumberValue(giveaway?.keys_left) > 40 ? (
                    <p className="text-warning line-clamp-3 mb-1 font-bold">
                        {giveaway?.keys_left} left
                    </p>
                ) : (
                    <p className="text-danger line-clamp-3 mb-1 font-bold">
                        {giveaway?.keys_left} left
                    </p>
                )}

                <h5 className="text-lg text-color-2 font-bold title-font mb-1 line-clamp-2">
                    {giveaway?.title}
                </h5>

                <p className="leading-relaxed text-tiny text-color-3 line-clamp-3">
                    {giveaway?.short_description}
                </p>
            </CardBody>
        </Card>
    );
};
