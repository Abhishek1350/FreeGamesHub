import { Card, CardBody, CardHeader, Skeleton } from "@nextui-org/react";

export const NewsCardSkeleton = () => {
    return (
        <Card className="bg-transparent rounded">
            <CardHeader className="p-0">
                <Skeleton className="w-full rounded">
                    <div className="h-40 bg-default-200"></div>
                </Skeleton>
            </CardHeader>
            <CardBody className="p-0 mt-3">
                <Skeleton className="rounded-lg mb-1">
                    <div className="h-5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg mb-2">
                    <div className="h-5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-full rounded-lg mb-1">
                    <div className="h-3 rounded-lg bg-default-300"></div>
                </Skeleton>
                <Skeleton className="w-3/5 rounded-lg mb-1">
                    <div className="h-3 rounded-lg bg-default-300"></div>
                </Skeleton>
            </CardBody>
        </Card>
    );
};
