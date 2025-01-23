import React from "react";

function DetailPageSkeleton() {
  return (
    <div className="flex flex-col xl:flex-row gap-10">
      {/* LEFT */}
      <div className="flex flex-col gap-5 rounded-md w-full">
        <div className="bg-gray-300 h-[232px] sm:h-[360px] relative flex flex-col items-center justify-end py-10 animate-pulse">
          <div className="bg-gray-400 sm:w-[300px] w-[190px] h-[50%] sm:h-[150px] rounded"></div>
          <div className="absolute top-0 p-5 flex flex-col gap-4">
            <div className="bg-gray-400 h-6 sm:h-8 w-[70%] rounded"></div>
            <div className="bg-gray-400 h-4 sm:h-6 w-[50%] rounded"></div>
          </div>
        </div>
        <div className="flex items-center gap-5 justify-around">
          <div className="bg-gray-300 sm:w-[150px] w-[80px] h-[60px] sm:h-[100px] rounded"></div>
          <div className="bg-gray-300 sm:w-[150px] w-[80px] h-[60px] sm:h-[100px] rounded"></div>
          <div className="bg-gray-300 sm:w-[150px] w-[80px] h-[60px] sm:h-[100px] rounded"></div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="p-5 bg-gray-100 shadow rounded-md space-y-10 animate-pulse">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="bg-gray-300 h-8 w-[50%] rounded"></div>
            <div className="bg-gray-300 h-6 w-6 rounded-full"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-gray-300 h-6 w-[100px] rounded"></div>
            <div className="bg-gray-300 h-4 w-[70px] rounded"></div>
          </div>
        </div>
        <div>
          <div className="bg-gray-300 h-4 w-full rounded"></div>
          <div className="bg-gray-300 h-4 w-[90%] rounded mt-2"></div>
          <div className="bg-gray-300 h-4 w-[80%] rounded mt-2"></div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-4 sm:gap-10">
              <div className="bg-gray-300 h-4 sm:h-6 w-[60px] rounded"></div>
              <div className="bg-gray-300 h-4 sm:h-6 w-[100px] rounded"></div>
            </div>
            <div className="flex items-center justify-between gap-4 sm:gap-10">
              <div className="bg-gray-300 h-4 sm:h-6 w-[60px] rounded"></div>
              <div className="bg-gray-300 h-4 sm:h-6 w-[100px] rounded"></div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between gap-4 sm:gap-10">
              <div className="bg-gray-300 h-4 sm:h-6 sm:w-[60px] rounded"></div>
              <div className="bg-gray-300 h-4 sm:h-6 sm:w-[100px] rounded"></div>
            </div>
            <div className="flex items-center justify-between gap-4 sm:gap-10">
              <div className="bg-gray-300 h-4 sm:h-6 sm:w-[60px] rounded"></div>
              <div className="bg-gray-300 h-4 sm:h-6 sm:w-[100px] rounded"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="bg-gray-300 h-6 w-[80px] rounded"></div>
            <div className="bg-gray-300 h-4 w-[60px] rounded mt-2"></div>
          </div>
          <div className="bg-gray-300 px-5 py-2 rounded sm:w-[100px] h-[40px]"></div>
        </div>
      </div>
    </div>
  );
}

export default DetailPageSkeleton;