export function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto max-w-7xl p-6">{children}</div>
    );
}
