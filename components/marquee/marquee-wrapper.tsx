export function MarqueeWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative flex flex-col items-center justify-center overflow-hidden gap-10">
            {children}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
    );
}
