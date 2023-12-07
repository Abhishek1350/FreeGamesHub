import { Pagination as NextUIPagination } from "@nextui-org/react";

interface PaginationProps {
    total: number;
    initialPage: number;
    onChange: (page: number) => void;
    showControls?: boolean;
    isCompact?: boolean;
    color?:
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "default";
    variant?: "flat" | "bordered" | "light" | "faded";
}

export const Pagination = (props: PaginationProps) => {
    return (
        <NextUIPagination
            {...props}
            classNames={{
                wrapper: "m-auto",
            }}
        />
    );
};
