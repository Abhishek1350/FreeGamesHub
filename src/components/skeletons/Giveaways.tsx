import { Card, CardBody, CardHeader, Skeleton } from "@nextui-org/react";

export const GiveawayCardSkeleton = () => {
    return (
        <Card className="py-2 pb-3 shadow-inset-1 cursor-pointer hover:scale-105 transition-400 w-full dark-bg-1">
            <CardHeader className="pb-0 pt-2 px-3">
                <Skeleton className="w-full rounded-xl">
                    <div className="h-40 rounded-xl bg-default-200"></div>
                </Skeleton>
            </CardHeader>
            <CardBody className="px-3">
                <Skeleton className="w-1/5 rounded-lg mb-2">
                    <div className="h-5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg mb-1">
                    <div className="h-5 rounded-lg bg-default-200"></div>
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
            </CardBody>
        </Card>
    );
};
