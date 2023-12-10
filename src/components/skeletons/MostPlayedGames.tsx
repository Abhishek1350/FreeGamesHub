import { Card, CardHeader, CardFooter, Skeleton } from "@nextui-org/react";

export const MostPlayedGamesSkeleton = () => {
    return (
        <Card className="cursor-pointer relative w-full h-[220px] aspect-[16/9] overflow-hidden hover:scale-105">
            <CardHeader className="absolute py-8 px-[14px] flex-col z-10 w-full h-full opacity-0 transition-400 hover:opacity-100 bg-black/20">
                <Skeleton className="w-4/5 rounded-lg mb-2">
                    <div className="h-5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-full rounded-lg mb-1">
                    <div className="h-3 rounded-lg bg-default-300"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg mb-1">
                    <div className="h-3 rounded-lg bg-default-300"></div>
                </Skeleton>
                <Skeleton className="w-3/5 rounded-lg mb-1">
                    <div className="h-3 rounded-lg bg-default-300"></div>
                </Skeleton>
            </CardHeader>
            <Skeleton className="w-full rounded-xl">
                <div className="h-40 rounded-xl bg-default-200"></div>
            </Skeleton>
            <CardFooter className="absolute gap-5 bg-black/20 bottom-0 z-1">
                <Skeleton className="w-2/5 rounded-lg">
                    <div className="h-8 rounded-lg bg-default-300"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                    <div className="h-8 rounded-lg bg-default-300"></div>
                </Skeleton>
            </CardFooter>
        </Card>
    );
};
