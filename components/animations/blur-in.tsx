"use client";
import { motion } from "framer-motion";

interface BlurIntProps {
    children: React.ReactNode;
    className?: string;
    variant?: {
        hidden: { filter: string; opacity: number };
        visible: { filter: string; opacity: number };
    };
    duration?: number;
    once?: boolean;
}
export const BlurIn = ({
    children,
    className,
    variant,
    duration = 0.6,
    once = false,
}: BlurIntProps) => {
    const defaultVariants = {
        hidden: { filter: "blur(10px)", opacity: 0 },
        visible: { filter: "blur(0px)", opacity: 1 },
    };
    const combinedVariants = variant || defaultVariants;

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration }}
            variants={combinedVariants}
            className={className}
            viewport={{ once: once }}
        >
            {children}
        </motion.div>
    );
};
