// Home Component
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowDownUpIcon, CircleStop, Heart } from "lucide-react";
import Link from "next/link";
import { FaGasPump, FaUsers } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";

// Define the CarsData interface to structure the car data from Sanity
interface CarsData {
  _id: string;
  name: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  originalPrice: string;
  tags: string[];
  image: string;
}

// Main Home Component
export default async function Home() {
  // Fetch popular car data from Sanity CMS, limiting to 4 cars for display
  const popularCars: CarsData[] =
    await client.fetch(`*[_type == "car" && "popular" in tags][0...4]{
        _id,
        name,
        type,
        fuelCapacity,
        transmission,
        seatingCapacity,
        pricePerDay,
        originalPrice,
        tags,
        "image": image.asset->url,     
 }`);

  // Fetch recommended car data from Sanity CMS, limiting to 4 cars for display
  const recommendedCars: CarsData[] =
    await client.fetch(`*[_type == "car" && "recommended" in tags][0...4]{
        _id,
        name,
        type,
        fuelCapacity,
        transmission,
        seatingCapacity,
        pricePerDay,
        originalPrice,
        tags,
        "image": image.asset->url,     
 }`);
  return (
    <section>
      {/* Advertisement Section */}
      <div className="relative flex max-md:flex-col gap-28 max-xl:gap-12 max-lg:gap-2 justify-center items-center py-10 max-xl:py-5 max-md:py-3 px-[10%] max-xl:px-[5%] max-lg:px-[3%] max-md:px-[10%]">
        {/* Ad 1 */}
        <div className="relative w-full max-md:h-20vh">
          {/* Image */}
          <div>
            <Image
              alt="Ad"
              src="/Image01.jpg"
              width={550}
              height={550}
              className="brightness-50 rounded-xl max-md:h-[300]"
            />
          </div>
          {/* Text Overlay */}
          <div className="absolute top-0 text-white font-semibold font-sans p-8 max-lg:p-5 max-md:p-8 text-3xl max-xl:text-xl max-md:text-2xl">
            The Best Platform <br /> for Car Rental
          </div>
          <div className="absolute top-20 text-white py-10 px-8 max-xl:top-16 max-lg:px-5 max-md:px-8 max-lg:top-12 max-md:top-16">
            Providing cheap car rental services
            <br /> and safe and comfortable facilities.
          </div>
          {/* Button */}
          <div className="absolute top-36 text-white py-14 px-10 max-xl:top-28 max-lg:top-24 max-md:top-40">
            <Button className="bg-blue-600 px-5 mx-3">
              <Link href="/new">Rental Car</Link>
            </Button>
          </div>
        </div>
        {/* Ad 2 */}
        <div className="relative w-full">
          {/* Image */}
          <Image
            alt="Ad"
            src="/Image02.jpg"
            width={550}
            height={550}
            className="brightness-75 rounded-xl max-md:h-[300]"
          />
          {/* Text Overlay */}
          <div className="absolute top-0 text-white font-semibold font-sans p-8 max-lg:p-5 max-md:p-8 text-3xl max-xl:text-xl max-md:text-2xl">
            Easy way to rent a <br /> car at a low price
          </div>
          <div className="absolute top-20 text-white py-10 px-8 max-xl:top-16 max-lg:top-12 max-md:top-16">
            Ease of doing a car rental safely and
            <br /> reliably. Of course at a low price.
          </div>
          {/* Button */}
          <div className="absolute top-36 text-white py-14 px-10 max-xl:top-28 max-lg:top-24 max-md:top-32">
            <Button className="bg-blue-600 px-5 mx-3">
              <Link href="/">Rental Car</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Pickup and Drop-off Section */}
      <div className="relative flex flex-col md:flex-row justify-center items-center gap-6 p-6">
        {/* Pickup Section */}
        <div className="flex flex-col w-full max-w-md md:max-w-[582px] bg-white rounded-lg p-4 shadow-md">
          {/* Heading */}
          <div className="flex items-center gap-2 mb-4">
            <input type="radio" />
            <label htmlFor="pickup" className="text-lg font-semibold">
              {" "}
              Pick-Up{" "}
            </label>
          </div>
          {/* Location, Date, and Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="location"
                className="text-sm font-medium text-gray-700 block mb-1"
              >
                Location
              </label>
              <select className="w-full text-sm p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Select Your City</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="Date"
                className="text-sm font-medium text-gray-700 block mb-1"
              >
                Date
              </label>
              <select className="w-full text-sm p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Select Your Date</option>
              </select>
            </div>
            <div>
              <label htmlFor="Time">Time</label>
              <select className="w-full text-sm p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Select Your Time</option>
              </select>
            </div>
          </div>
        </div>
        {/* Arrows Icon */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 lg:w-12 lg:h-12 bg-blue-500 text-white rounded-lg shadow-blue-200 shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center z-10">
          <ArrowDownUpIcon />
        </div>
        {/* DropOff Section */}
        <div className="flex flex-col w-full max-w-md md:max-w-[582px] bg-white rounded-lg p-4 shadow-md">
          {/* Heading */}
          <div className="flex items-center gap-2 mb-4">
            <input type="radio" />
            <label htmlFor="dropoff" className="text-lg font-semibold">
              {" "}
              Drop-Off{" "}
            </label>
          </div>
          {/* Location, Date, and Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="location"
                className="text-sm font-medium text-gray-700 block mb-1"
              >
                Location
              </label>
              <select className="w-full text-sm p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Select Your City</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="Date"
                className="text-sm font-medium text-gray-700 block mb-1"
              >
                Date
              </label>
              <select className="w-full text-sm p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Select Your Date</option>
              </select>
            </div>
            <div>
              <label htmlFor="Time">Time</label>
              <select className="w-full text-sm p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
                <option>Select Your Time</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* Popular Cars Section */}
      <div>
        <div className="text-gray-500 px-[10%] pt-10">Popular Cars</div>
        <div className="text-right px-[10%] text-blue-900 underline">
          <Link href="/more">View All </Link>
        </div>
      </div>
      {/* Cars Section */}
      <div className="px-[7%] max-2xl:px-[5%] max-xl:px-[3%]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5">
          {popularCars.map((item) => {
            return (
              <div
                key={item._id}
                className="p-4 shadow-lg hover:shadow-2xl hover:scale-105 duration-300"
              >
                {/* Car Name and Type */}
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold mb-1">{item.name}</h3>
                    <p className="text-[14px] text-[#90A3BF]">{item.type}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Heart />
                  </Button>
                </div>
                {/* Car Image */}
                <Image
                  width={250}
                  height={250}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-contain my-4"
                />
                {/* Car Features */}
                <div className="flex justify-evenly items-center mb-4 text-sm text-gray-600 font-bold">
                  <div className="items-center flex gap-2">
                    <FaGasPump />
                    <div>{item.fuelCapacity}</div>
                  </div>
                  <div className="items-center flex gap-2">
                    <GiSteeringWheel />
                    <div>{item.transmission}</div>
                  </div>
                  <div className="items-center flex gap-2">
                    <FaUsers />
                    <div>{item.seatingCapacity}</div>
                  </div>
                </div>
                {/* Pricing and Rent Button */}
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <div>
                      <span className="text-[16px] font-semibold text-[#1A202C]">
                        {item.pricePerDay}
                      </span>
                      <span className="text-[14px] text-[#90A3BF]">/day</span>
                    </div>
                    <div>
                      <span className="text-[14px] text-[#90A3BF] line-through">
                        {item.originalPrice}
                      </span>
                    </div>
                  </div>
                  <Link href={`/car/${item._id}`}>
                    <Button className="bg-blue-600 px-5 mx-3">Rent Now</Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Recommended Cars Section */}
      <div>
        <div className="text-gray-500 px-[10%] pt-10">Recommended Cars</div>
        <div className="text-right px-[10%] text-blue-900 underline">
          <Link href="/more">View All </Link>
        </div>
      </div>
      {/* Cars Section */}
      <div className="px-[7%] max-2xl:px-[5%] max-xl:px-[3%]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5">
          {recommendedCars.map((item) => {
            return (
              <div
                key={item._id}
                className="p-4 shadow-lg hover:shadow-2xl hover:scale-105 duration-300"
              >
                {/* Car Name and Type */}
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold mb-1">{item.name}</h3>
                    <p className="text-[14px] text-[#90A3BF]">{item.type}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Heart />
                  </Button>
                </div>
                {/* Car Image */}
                <Image
                  width={250}
                  height={250}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-contain my-4"
                />
                {/* Car Features */}
                <div className="flex justify-evenly items-center mb-4 text-sm text-gray-600 font-bold">
                  <div className="items-center flex gap-2">
                    <FaGasPump />
                    <div>{item.fuelCapacity}</div>
                  </div>
                  <div className="items-center flex gap-2">
                    <GiSteeringWheel />
                    <div>{item.transmission}</div>
                  </div>
                  <div className="items-center flex gap-2">
                    <FaUsers />
                    <div>{item.seatingCapacity}</div>
                  </div>
                </div>
                {/* Pricing and Rent Button */}
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <div>
                      <span className="text-[16px] font-semibold text-[#1A202C]">
                        {item.pricePerDay}
                      </span>
                      <span className="text-[14px] text-[#90A3BF]">/day</span>
                    </div>
                    <div>
                      <span className="text-[14px] text-[#90A3BF] line-through">
                        {item.originalPrice}
                      </span>
                    </div>
                  </div>
                  <Link href={`/car/${item._id}`}>
                    <Button className="bg-blue-600 px-5 mx-3">Rent Now</Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Show more Button */}
      <div className="text-center py-5">
        <Button className="bg-blue-600 px-5 mx-3">
          <Link href="/more">Show more cars</Link>
        </Button>
        <div className="text-right text-gray-500 px-10">120 Cars</div>
      </div>
    </section>
  );
}
