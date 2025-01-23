import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row items-start bg-gray-100 p-6">
      {/* Left */}
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow p-4">
        <Image
          src="/images/Profil.png"
          alt="Profile"
          width={30}
          height={30}
          className="rounded-full w-32 sm:w-52 h-32 sm:h-52 mx-auto"
        />
        <h2 className="text-xl font-bold text-center mt-4">TomKing</h2>
        <p className="text-center text-gray-500">TomKing12@gmail.com</p>
        <p className="text-center text-gray-500">+123 456 7890</p>
        <div className="grid grid-cols-2 gap-2 sm:gap-10">
          <Link href={""}>
            <Button
              variant={"outline"}
              className="bg-[#3563E9] text-white text-[12px] sm:text-[15px] rounded mt-4 px-2 sm:px-4 py-2 w-full"
            >
              Edit Profile
            </Button>
          </Link>
          <Link href={"/payment"}>
            <Button
              variant={"outline"}
              className="bg-[#3563E9] text-white text-[12px] sm:text-[15px] rounded mt-4 px2 sm:px-4 py-2 w-full"
            >
              Add Payment Method
            </Button>
          </Link>
        </div>
      </div>

      {/* Right*/}
      <div className="w-full md:w-2/3 mt-6 md:mt-0 md:ml-6">
        <div className="bg-white rounded-lg shadow p-4">
          {/* Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-400">Details</h3>
            <div className="mt-2">
              <div className="p-4">
                <h4>
                  <span className="font-semibold">Name:</span> TomKing
                </h4>
                <h4>
                  <span className="font-semibold">Email:</span>{" "}
                  TomKing12@gmail.com
                </h4>
                <h4>
                  <span className="font-semibold">Address:</span> 123 Main
                  Street, New York, NY, USA
                </h4>
              </div>
            </div>
          </div>
          {/* Booking History */}
          <div>
            <h3 className="text-lg font-semibold text-gray-400">
              Booking History
            </h3>
            <div className="mt-2">
              <div className=" p-4">
                <h4>
                  <span className="font-semibold">Car:</span> Tesla Model X
                </h4>
                <div className="pl-4 pt-2">
                  <p>
                    <span className="font-semibold">Rental Duration:</span>{" "}
                    2025-01-01 to 2025-01-05
                  </p>
                  <p>
                    <span className="font-semibold">Total Cost:</span> $500
                  </p>
                  <p>
                    <span className="font-semibold">Status:</span> Completed
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className=" p-4">
                <h4>
                  <span className="font-semibold">Car:</span> Rolls-Royce
                </h4>
                <div className="pl-4 pt-2">
                  <p>
                    <span className="font-semibold">Rental Duration:</span>{" "}
                    2024-04-01 to 2024-04-03
                  </p>
                  <p>
                    <span className="font-semibold">Total Cost:</span> $700
                  </p>
                  <p>
                    <span className="font-semibold">Status:</span> Completed
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className=" p-4">
                <h4>
                  <span className="font-semibold">Car:</span> BMW X5
                </h4>
                <div className="pl-4 pt-2">
                  <p>
                    <span className="font-semibold">Rental Duration:</span>{" "}
                    2023-01-01 to 2023-01-05
                  </p>
                  <p>
                    <span className="font-semibold">Total Cost:</span> $650
                  </p>
                  <p>
                    <span className="font-semibold">Status:</span> Completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;