import { Skeleton } from "@nextui-org/react";

export const GamesCardSkeleton = () => {
    return (
        <div className="md:w-1/3 sm:w-1/2 p-4">
            <div className="dark-bg-1 bg-opacity-40 p-4 rounded-lg">
                <Skeleton className="w-full rounded-xl mb-3">
                    <div className="h-40 w-full rounded-xl bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg mb-2">
                    <div className="h-4 w-full rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-3/5 rounded-lg mb-2">
                    <div className="h-5 w-full rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-full rounded-lg mb-1">
                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg mb-1">
                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
                <Skeleton className="w-3/5 rounded-lg mb-1">
                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
            </div>
        </div>
    )
}