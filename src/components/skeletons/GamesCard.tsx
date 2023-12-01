import { Skeleton } from "@nextui-org/react";

export const GamesCardSkeleton = () => {
    return (
        <div className="md:w-1/3 sm:w-1/2 p-4">
            <div className="dark-bg-3 bg-opacity-40 p-6 rounded-lg">
                <Skeleton className="w-full rounded-xl">
                    <div className="h-40 w-full rounded-xl bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg mb-2">
                    <div className="h-5 w-full rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg mb-1">
                    <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
            </div>
        </div>
    )
}