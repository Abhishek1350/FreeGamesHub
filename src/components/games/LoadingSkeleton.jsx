import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton = () => {
    return (
        <div className="card-loading-skeleton my-2 mx-4">
            <SkeletonTheme baseColor="#212529" highlightColor="white">
                <div className="loading-img mb-2">
                    <Skeleton height={260} width={300} />
                </div>
                <div className="mb-2">
                    <Skeleton height={20} width={300} />
                </div>
                <div className="mb-2">
                    <Skeleton height={50} width={300} />
                </div>
                <div className="pb-2">
                    <Skeleton inline height={30} width={50} />
                    <Skeleton inline height={30} width={50} />
                    <Skeleton inline height={30} width={50} />
                </div>
            </SkeletonTheme>
        </div>
    );
};

export default LoadingSkeleton;
