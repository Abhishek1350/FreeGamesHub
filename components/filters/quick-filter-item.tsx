"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { IFilter } from "@/lib/types";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export interface Filters {
    filter: IFilter;
    selectedKey: string;
    className?: string;
}

export function QuickFilterItem({ filter, selectedKey, className }: Filters) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleRedirect = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            if (value) {
                params.set(name, value);
            } else {
                params.delete(name);
            }
            params.delete("page");
            router.push(pathname + "?" + params.toString());
        },
        [searchParams]
    );

    return (
        <Select
            size="sm"
            label={filter.label === "Year" ? "Release Year" : filter.label}
            className={className}
            onChange={(e) => {
                handleRedirect(
                    filter.label.toLocaleLowerCase().replace(" ", ""),
                    e.target.value
                );
            }}
            selectedKeys={[selectedKey]}
            color="warning"
            variant="flat"
        >
            {filter.values.map((value) => (
                <SelectItem key={value.value}>{value.label}</SelectItem>
            ))}
        </Select>
    );
}
