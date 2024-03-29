import { Skeleton } from "@nextui-org/react";

export const GamesCardSkeleton = () => {
    return (
        <div className="dark-bg-1 shadow-inset-1 p-4 rounded-lg  min-h-[341px] hover:scale-105 transition-400">
            <div className="dark-bg-1 bg-opacity-40 p-4 rounded-lg">
                <Skeleton className="w-full rounded-xl mb-3">
                    <div className="h-40 rounded-xl bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg mb-2">
                    <div className="h-4  rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-3/5 rounded-lg mb-2">
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
            </div>
        </div>
    );
};
