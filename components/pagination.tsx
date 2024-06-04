"use client";

import { Pagination as NextUIPagination } from "@nextui-org/pagination";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Button } from "@nextui-org/button";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

interface PaginationProps {
    total: number;
    initialPage: number;
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

export function Pagination(props: PaginationProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);

            return params.toString();
        },
        [searchParams]
    );

    const handleRedirect = useCallback(
        (page: number) => {
            const search = createQueryString("page", page.toString());
            router.push(pathname + "?" + search);
        },
        [createQueryString, pathname, router]
    );

    function MobPagination() {
        return (
            <div className="flex gap-2 justify-center items-center sm:hidden">
                <Button
                    color="default"
                    isIconOnly
                    isDisabled={props.initialPage === 1}
                    onClick={() => handleRedirect(props.initialPage - 1)}
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
                    onClick={() => handleRedirect(props.initialPage + 1)}
                    className="font-bold text-xl"
                >
                    <FaArrowCircleRight />
                </Button>
            </div>
        );
    }

    return (
        <>
            <NextUIPagination
                {...props}
                onChange={(page: number) => handleRedirect(page)}
                classNames={{
                    wrapper: "m-auto hidden sm:flex",
                }}
            />
            <MobPagination />
        </>
    );
}
