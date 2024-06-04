"use client";

import { Select, SelectItem } from "@nextui-org/select";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { FaFirefoxBrowser, FaWindows } from "react-icons/fa";

interface Options {
    value: string;
    label: string;
}

interface AdvancedFilterItemProps {
    type: "platform" | "sort" | "categories" | "years";
    multiple?: boolean;
    options: Options[] | string[];
    label: string;
    selected: string | string[];
    onChange: (selected: string | string[]) => void;
}

export function AdvancedFilterItem({
    type,
    multiple = false,
    options,
    label,
    selected,
    onChange,
}: AdvancedFilterItemProps) {
    switch (type) {
        case "platform":
            return (
                <CheckboxGroup
                    orientation="horizontal"
                    value={selected as string[]}
                    onValueChange={(value) => {
                        onChange(value);
                    }}
                >
                    {(options as Options[]).map((option) => (
                        <Checkbox
                            key={option.value}
                            value={option.value}
                            icon={
                                option.value === "pc" ? <FaWindows /> : <FaFirefoxBrowser />
                            }
                        >
                            {option.label}
                        </Checkbox>
                    ))}
                </CheckboxGroup>
            );

        case "categories":
            return (
                <CheckboxGroup
                    orientation="horizontal"
                    value={selected as string[]}
                    onValueChange={(value) => {
                        onChange(value);
                    }}
                >
                    {(options as string[]).map((option) => (
                        <Checkbox key={option} value={option}>
                            {option}
                        </Checkbox>
                    ))}
                </CheckboxGroup>
            );

        case "sort":
            return (
                <Select
                    size="sm"
                    label={label}
                    className="w-full"
                    onChange={(e) => {
                        onChange(e.target.value);
                    }}
                    selectedKeys={[selected as string]}
                    color="default"
                    variant="underlined"
                    multiple={multiple}
                    data-focus={false}
                >
                    {(options as Options[]).map((option) => (
                        <SelectItem key={option.value}>{option.label}</SelectItem>
                    ))}
                </Select>
            );

        case "years":
            return (
                <CheckboxGroup
                    orientation="horizontal"
                    value={selected as string[]}
                    onValueChange={(value) => {
                        onChange(value);
                    }}
                >
                    {(options as string[]).map((option) => (
                        <Checkbox key={option} value={option}>
                            {option}
                        </Checkbox>
                    ))}
                </CheckboxGroup>
            );

        default:
            return null;
    }
}
