import React from "react";

function GridSkeleton() {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className="p-5 space-y-10 lg:w-fit bg-white rounded-md animate-pulse">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <div className="h-6 bg-gray-300 rounded w-1/3"></div>
              <div className="h-6 w-6 bg-gray-300 rounded-full"></div>
            </div>
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          </div>

          <div className="flex justify-center">
            <div className="w-52 h-36 bg-gray-300 rounded"></div>
          </div>

          <div className="flex items-center gap-4">
            {/* Petrol Placeholder */}
            <div className="flex items-center gap-[6px]">
              <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
              <div className="h-4 w-12 bg-gray-300 rounded"></div>
            </div>
            {/* Transmission Placeholder */}
            <div className="flex items-center gap-[6px]">
              <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
              <div className="h-4 w-16 bg-gray-300 rounded"></div>
            </div>
            {/* People Placeholder */}
            <div className="flex items-center gap-[6px]">
              <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
              <div className="h-4 w-12 bg-gray-300 rounded"></div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              {/* Price Placeholder */}
              <div className="h-6 w-20 bg-gray-300 rounded "></div>
            </div>
            {/* Button Placeholder */}
            <div className="h-8 w-20 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </>
  );
}

export default GridSkeleton;