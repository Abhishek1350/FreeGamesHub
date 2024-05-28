"use client";

import { motion } from "framer-motion";

interface StaggerItemProps {
    once?: boolean;
    index: number;
    children: React.ReactNode;
}

const stagger = 0.25;
const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};

export function StaggerItem({
    once = false,
    index,
    children,
}: StaggerItemProps) {
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{
                delay: index * stagger,
                ease: "easeIn",
                duration: 0.3,
            }}
            viewport={{ once: once }}
        >
            {children}
        </motion.div>
    );
}
