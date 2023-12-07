import { Button } from "@nextui-org/react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

interface PaginationProps {
    total: number;
    initialPage: number;
    onClick: (page: number) => void;
}

export const MobPagination = (props: PaginationProps) => {
    return (
        <div className="flex gap-2 justify-center mt-5 items-center">
            <Button
                color="default"
                isIconOnly
                isDisabled={props.initialPage === 1}
                onClick={() => props.onClick(props.initialPage - 1)}
                className="font-bold text-xl dark"
            >
                <FaArrowCircleLeft />
            </Button>
            <p className="text-gray-400">
                Page {props.initialPage} of {props.total}
            </p>
            <Button
                color="default"
                isIconOnly
                isDisabled={props.initialPage === props.total}
                onClick={() => props.onClick(props.initialPage + 1)}
                className="font-bold text-xl"
            >
                <FaArrowCircleRight />
            </Button>
        </div>
    );
};
