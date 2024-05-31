"use client";

import { Button } from "@nextui-org/button";
import { FaFilter } from "react-icons/fa";

export function AdvancedFilters() {
    return (
        <Button
            size="lg"
            radius="sm"
            color="warning"
            variant="flat"
            endContent={<FaFilter />}
        >
            Advanced Filters
        </Button>
    );
}
