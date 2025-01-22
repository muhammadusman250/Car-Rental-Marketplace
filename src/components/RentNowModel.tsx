import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

type searchCar = {
  id: number;
  name: string;
  category: string;
  image: string;
  petrol: number;
  people: number;
  price: number;
  type?: string;
  transmission?: string;
  originalPrice?: number;
};
function RentNowModel({
  isPortal,
  searchedCar,
  toggleModal,
}: {
  isPortal: boolean;
  searchedCar: searchCar;
  toggleModal: () => void;
}) {
  return (
    <>
      {isPortal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-[90%] sm:w-full">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-800">
                Rent {searchedCar.name}
              </h2>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-800 transition duration-200"
              >
                &#10005;
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-10">
              <div className="flex justify-between gap-4">
                <Image
                  src={searchedCar.image || ""}
                  alt={searchedCar.name}
                  width={240}
                  height={150}
                  className=" h-10 sm:h-20 object-cover rounded-md"
                />
                <div>
                  <p className="text-sm sm:text-base text-gray-600">
                    Type: {searchedCar.type}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    Capacity: {searchedCar.people}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    Price:{" "}
                    {searchedCar.price.toString().includes("/day")
                      ? searchedCar.price
                      : `${searchedCar.price}/day`}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm sm:text-[18px]" >
                You are about to rent{" "}
                <span className="font-bold">{searchedCar.name}</span>. Please
                confirm your action to proceed to payment details.
              </p>
            </div>

            <div className="flex justify-center sm:justify-end items-center gap-2 sm:gap-4 px-3 sm:px-6 py-4 border-t border-gray-200">
              <Button
                onClick={toggleModal}
                className="px-2 sm:px-4 py-2 text-sm sm:text-[15px] rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200 transition duration-200"
              >
                Cancel
              </Button>
              <Link
                href={"/payment"}
                className="px-4 py-2 text-sm sm:text-[15px] rounded-md bg-[#3563E9] text-white font-semibold hover:bg-[#2849b8] transition duration-300"
              >
                Proceed to Payment
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default RentNowModel;