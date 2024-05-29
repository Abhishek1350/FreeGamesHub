"use client";

import { Pagination as NextUIPagination } from "@nextui-org/pagination";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

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

    return (
        <NextUIPagination
            {...props}
            onChange={(page: number) => handleRedirect(page)}
            classNames={{
                wrapper: "m-auto",
            }}
        />
    );
}
