import { Skeleton } from "@nextui-org/react";

export const SingleGameSkeleton = () => {
    return (
        <div className="flex flex-col sm:flex-row ">
            <div className="sm:w-1/3 text-center sm:pr-4 sm:py-2 px-2 max-h-full sm:max-h-[60vh] static sm:sticky top-[80px]">
                <Skeleton className="w-full rounded-xl mb-2 h-40 ">
                    <div className="bg-default-200"></div>
                </Skeleton>
                <div className="flex gap-5 items-center mt-5">
                    <Skeleton className="w-2/5 rounded-lg mb-2">
                        <div className="h-8 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-4/5 rounded-lg mb-2">
                        <div className="h-8 rounded-lg bg-default-200"></div>
                    </Skeleton>
                </div>

                <div className="flex justify-around  p-4 mt-5 border border-gray-700 rounded-lg border-opacity-75 ">
                    <div className="xl:w-1/3 sm:w-1/2 w-full">
                        <div className="flex flex-col items-center justify-center ">
                            <Skeleton className="w-1/2 rounded-lg mb-2">
                                <div className="h-8 rounded-lg bg-default-200"></div>
                            </Skeleton>
                            <Skeleton className="w-1/2 rounded-lg mb-2">
                                <div className="h-8 rounded-lg bg-default-200"></div>
                            </Skeleton>
                        </div>
                    </div>

                    <div className="xl:w-1/3 sm:w-1/2 w-full">
                        <div className="flex flex-col items-center justify-center ">
                            <Skeleton className="w-1/2 rounded-lg mb-2">
                                <div className="h-8 rounded-lg bg-default-200"></div>
                            </Skeleton>
                            <Skeleton className="w-1/2 rounded-lg mb-2">
                                <div className="h-8 rounded-lg bg-default-200"></div>
                            </Skeleton>
                        </div>
                    </div>

                    <div className="xl:w-1/3 sm:w-1/2 w-full">
                        <div className="flex flex-col items-center justify-center ">
                            <Skeleton className="w-1/2 rounded-lg mb-2">
                                <div className="h-8 rounded-lg bg-default-200"></div>
                            </Skeleton>
                            <Skeleton className="w-1/2 rounded-lg mb-2">
                                <div className="h-8 rounded-lg bg-default-200"></div>
                            </Skeleton>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:w-2/3 sm:pl-4 sm:py-2 px-2 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-6 sm:mt-0">
                <div className="header mb-6">
                    <div className="flex mb-4 gap-2">
                        <Skeleton className="w-[60px]  rounded-lg ">
                            <div className="bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-[60px] rounded-lg ">
                            <div className="bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/5 rounded-lg ">
                            <div className="h-5 w-full rounded-lg bg-default-200"></div>
                        </Skeleton>
                    </div>

                    <Skeleton className="w-3/5 rounded-lg mb-5">
                        <div className="h-8 bg-default-200"></div>
                    </Skeleton>

                    <div className="border gap-5 sm:gap-10 border-gray-700 border-opacity-75 p-4 my-5 rounded-lg">
                        <Skeleton className="rounded-lg mb-2">
                            <div className="h-4 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-2/3 rounded-lg mb-2">
                            <div className="h-4 rounded-lg bg-default-200"></div>
                        </Skeleton>
                    </div>
                </div>

                <div className="content">
                    <Skeleton className="w-2/5 rounded-lg mb-4">
                        <div className="h-8 bg-default-200"></div>
                    </Skeleton>

                    <div className="mb-6">
                        <Skeleton className=" rounded-lg mb-2">
                            <div className="h-4 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className=" rounded-lg mb-2">
                            <div className="h-4 rounded-lg bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className=" rounded-lg mb-2">
                            <div className="h-4 rounded-lg bg-default-200"></div>
                        </Skeleton>

                        <Skeleton className="w-4/5 rounded-lg mb-2">
                            <div className="h-4 rounded-lg bg-default-200"></div>
                        </Skeleton>
                    </div>

                    <Skeleton className="w-2/6 rounded-lg mb-4">
                        <div className="h-8 bg-default-200"></div>
                    </Skeleton>

                    <div className="flex justify-around  p-4 mt-5 border border-gray-700 rounded-lg border-opacity-75 gap-5 mb-6">
                        <div className="xl:w-1/3  w-full">
                            <div className="flex flex-col items-center justify-center ">
                                <Skeleton className="w-full rounded-lg mb-2">
                                    <div className="h-8 rounded-lg bg-default-200"></div>
                                </Skeleton>
                                <Skeleton className="w-full rounded-lg mb-2">
                                    <div className="h-8 rounded-lg bg-default-200"></div>
                                </Skeleton>
                            </div>
                        </div>

                        <div className="xl:w-1/3  w-full">
                            <div className="flex flex-col items-center justify-center ">
                                <Skeleton className="w-full rounded-lg mb-2">
                                    <div className="h-8 rounded-lg bg-default-200"></div>
                                </Skeleton>
                                <Skeleton className="w-full rounded-lg mb-2">
                                    <div className="h-8 rounded-lg bg-default-200"></div>
                                </Skeleton>
                            </div>
                        </div>

                        <div className="xl:w-1/3  w-full">
                            <div className="flex flex-col items-center justify-center ">
                                <Skeleton className="w-full rounded-lg mb-2">
                                    <div className="h-8 rounded-lg bg-default-200"></div>
                                </Skeleton>
                                <Skeleton className="w-full rounded-lg mb-2">
                                    <div className="h-8 rounded-lg bg-default-200"></div>
                                </Skeleton>
                            </div>
                        </div>
                    </div>

                    <Skeleton className="w-2/5 rounded-lg mb-4">
                        <div className="h-8 bg-default-200"></div>
                    </Skeleton>

                    <div className="flex flex-wrap  gap-5">
                        <Skeleton className="w-full rounded-xl mb-2 sm:w-[30%] h-[120px]">
                            <div className="bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-full rounded-xl mb-2 sm:w-[30%] h-[120px]">
                            <div className="bg-default-200"></div>
                        </Skeleton>
                        <Skeleton className="w-full rounded-xl mb-2 sm:w-[30%] h-[120px]">
                            <div className="bg-default-200"></div>
                        </Skeleton>
                    </div>
                </div>
            </div>
        </div>
    );
};
