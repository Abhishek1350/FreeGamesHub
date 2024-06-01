"use client";

import { Button, ButtonGroup } from "@nextui-org/button";
import { FaFilter } from "react-icons/fa";
import { FcClearFilters } from "react-icons/fc";
import { useRouter, usePathname } from "next/navigation";

export function AdvancedFilters() {
    const router = useRouter();
    const pathname = usePathname();

    const hangleClearAll = () => {
        router.push(pathname);
    };

    return (
        <ButtonGroup className="w-full">
            <Button
                size="lg"
                radius="sm"
                color="warning"
                variant="flat"
                endContent={<FaFilter />}
                className="w-full"
            >
                More
            </Button>
            <Button
                size="lg"
                radius="sm"
                color="danger"
                variant="flat"
                endContent={<FcClearFilters color="inherit" />}
                className="w-full"
                onPress={hangleClearAll}
            >
                Clear All
            </Button>
        </ButtonGroup>
    );
}
