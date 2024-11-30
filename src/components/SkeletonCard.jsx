import React from "react";

const SkeletonCard = () => {
  return (
    <div className="w-full flex-shrink-0 lg:w-1/3 p-12">
      <div className="w-full lg:max-w-md rounded-lg overflow-hidden shadow-lg bg-gray-200 animate-pulse">
        <div className="h-96 bg-gray-300 animate-pulse" /> {/* Skeleton for image */}
        <div className="p-4">
          <div className="h-6 bg-gray-300 rounded mb-2 animate-pulse" /> {/* Skeleton for name */}
          <div className="h-4 bg-gray-300 rounded mb-4 animate-pulse" /> {/* Skeleton for role */}
          <div className="flex space-x-2">
            <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse" /> {/* Skeleton for social icons */}
            <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse" />
            <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
