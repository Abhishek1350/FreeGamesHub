import { Card, CardHeader, CardBody, Skeleton } from "@nextui-org/react";

export const NewGameAddedSkeleton = () => {
    return (
        <Card className="py-4 cursor-pointer hover:scale-105 transition-400 w-full">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <Skeleton className="w-2/5 rounded-lg mb-1">
                    <div className="h-3 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-1/5 rounded-lg mb-2">
                    <div className="h-3 rounded-lg bg-default-300"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                    <div className="h-5 rounded-lg bg-default-200"></div>
                </Skeleton>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <Skeleton className="w-full rounded-xl">
                    <div className="h-40 rounded-xl bg-default-200"></div>
                </Skeleton>
            </CardBody>
        </Card>
    );
};
