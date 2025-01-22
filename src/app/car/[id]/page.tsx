"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Mycard from "@/components/Mycard";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { client } from "@/sanity/lib/client";
import CarouselSkeleton from "@/components/CarouselSkeleton";
import DetailPageSkeleton from "@/components/DetailPageSkeleton";
import RentNowModel from "@/components/RentNowModel";
import CategoryAsideBar from "@/components/Category AsideBar";

type RecomCarData = {
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

async function fetchCarsForRecommended() {
  const query = `*[_type == "car" && "recommended" in tags]{
    id,
    name,
    category,
    "image": image.asset->url,
    fuelCapacity,
    seatingCapacity,
    pricePerDay,
    originalPrice
  }`;

  try {
    const cars = await client.fetch(query);
    return cars.map((car: any) => ({
      id: car.id,
      name: car.name,
      category: car.category,
      image: car.image || "",
      petrol: car.fuelCapacity || 0,
      people: car.seatingCapacity || 0,
      price: car.pricePerDay || 0,
      originalPrice: car.originalPrice || undefined,
    }));
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return [];
  }
}

async function fetchAllCars() {
  const query = `*[_type == "car"]{
    id,
    name,
    type,
    category,
    "image": image.asset->url,
    fuelCapacity,
    seatingCapacity,
    pricePerDay,
    originalPrice,
    transmission
  }`;

  try {
    const cars = await client.fetch(query);
    return cars.map((car: any) => ({
      id: car.id,
      name: car.name,
      type: car.type,
      category: car.category,
      image: car.image || "",
      petrol: car.fuelCapacity || 0,
      people: car.seatingCapacity || 0,
      price: car.pricePerDay || 0,
      transmission: car.transmission,
      originalPrice: car.originalPrice || undefined,
    }));
  } catch (error) {
    console.error("Error fetching data from Sanity:", error);
    return [];
  }
}

function Page({ params }: { params: { id: string } }) {
  const [priceRange, setPriceRange] = useState<[number, number]>([90, 210]);
  const [allCarData, setAllCarData] = useState<RecomCarData[]>([]);
  const [isPortal, setIsPortal] = useState(false);
  const [recommendedCarData, setRecommendedCarData] = useState<RecomCarData[]>([]);

  const handleSliderChange = (value: [number, number]) => {
    setPriceRange(value);
  };

  const toggleModal = () => {
    setIsPortal(!isPortal);
  };

  const searchedCar = allCarData.find((car) => car.id === parseInt(params.id));

  useEffect(() => {
    async function fetchDynamicData() {
      const fetchedDynamicCars = await fetchAllCars();
      setAllCarData(fetchedDynamicCars);
    }
    fetchDynamicData();
  }, []);

  useEffect(() => {
    async function fetchRecommendData() {
      const fetchedCars = await fetchCarsForRecommended();
      setRecommendedCarData(fetchedCars);
    }
    fetchRecommendData();
  }, []);

  return (
    <section className="bg-[#f6f7f9] flex">
      <CategoryAsideBar maxPrice={priceRange} handleSliderChange={handleSliderChange} />

      <main className="w-full lg:w-[90%] xl:w-[85%] px-6 py-7 space-y-7">
        {!searchedCar ? (
          <DetailPageSkeleton />
        ) : (
          <div className="flex flex-col xl:flex-row gap-10">
            <div className="flex flex-col gap-5 rounded-md w-full">
              <div className="bg-[#3563E9] h-[232px] sm:h-[360px] relative flex flex-col items-center justify-end py-10">
                <Image
                  src={searchedCar?.image || ""}
                  alt="Image"
                  width={300}
                  height={150}
                  className="sm:w-[300px] w-[190px]"
                />
                <div className="text-white flex flex-col gap-4 p-5 absolute top-0">
                  <h1 className="font-semibold text-base sm:text-[32px] leading-6 sm:leading-8">
                    Sports car with the best design and acceleration
                  </h1>
                  <p className="font-medium text-xs sm:text-base leading-[15px] sm:leading-6">
                    Safety and comfort while driving a{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 justify-evenly">
                <Image
                  src="/images/view-1.png"
                  alt="Image"
                  width={150}
                  height={150}
                  className="sm:w-[150px] w-[80px]"
                />
                <Image
                  src="/images/view-2.png"
                  alt="Image"
                  width={150}
                  height={150}
                  className="sm:w-[150px] w-[80px]"
                />
                <Image
                  src="/images/view-3.png"
                  alt="Image"
                  width={150}
                  height={150}
                  className="sm:w-[150px] w-[80px]"
                />
              </div>
            </div>

            <div className="p-5 bg-white shadow rounded-md space-y-10">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h1 className="font-bold text-3xl">{searchedCar?.name}</h1>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.44 3.09998C14.63 3.09998 13.01 3.97998 12 5.32998C10.99 3.97998 9.37 3.09998 7.56 3.09998C4.49 3.09998 2 5.59998 2 8.68998C2 9.87998 2.19 10.98 2.52 12C4.1 17 8.97 19.99 11.38 20.81C11.72 20.93 12.28 20.93 12.62 20.81C15.03 19.99 19.9 17 21.48 12C21.81 10.98 22 9.87998 22 8.68998C22 5.59998 19.51 3.09998 16.44 3.09998Z"
                      fill="#ED3F3F"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/Review Star.png"
                    alt="Star Image"
                    width={100}
                    height={100}
                  />
                  <h1 className="font-medium text-sm text-[#596780]">
                    440+ Reviewer
                  </h1>
                </div>
              </div>
              <p className="font-normal text-[#596780] leading-10">
                NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between gap-4 sm:gap-10">
                    <h1 className="text-xs sm:text-xl text-[#90A3BF]">Type Car</h1>
                    <h1 className="text-xs sm:text-xl text-[#596780] font-semibold">
                      {searchedCar?.type}
                    </h1>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:gap-10">
                    <h1 className="text-xs sm:text-xl text-[#90A3BF]">Steering</h1>
                    <h1 className="text-xs sm:text-xl text-[#596780] font-semibold">
                      {searchedCar?.transmission}
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between gap-4 sm:gap-10">
                    <h1 className="text-xs sm:text-xl text-[#90A3BF]">Capacity</h1>
                    <h1 className="text-xs sm:text-xl text-[#596780] font-semibold">
                      {searchedCar?.people}
                    </h1>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:gap-10">
                    <h1 className="text-xs sm:text-xl text-[#90A3BF]">Gasoline</h1>
                    <h1 className="text-xs sm:text-xl text-[#596780] font-semibold">
                      {searchedCar?.petrol}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold">
                    {searchedCar?.price.toString().includes("/day")
                      ? searchedCar?.price
                      : `${searchedCar?.price}/day`}
                  </h1>
                  {searchedCar?.originalPrice && (
                    <h1 className="text-[#90A3BF] font-bold text-sm">
                      <s>{searchedCar.originalPrice}</s>
                    </h1>
                  )}
                </div>
                <Button
                  onClick={toggleModal}
                  variant={"outline"}
                  className="bg-[#3563E9] px-5 text-white"
                >
                  Rent Now
                </Button>
                <RentNowModel
                  isPortal={isPortal}
                  searchedCar={searchedCar}
                  toggleModal={toggleModal}
                />
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-md p-5">
          <div className="flex items-center gap-5">
            <h1 className="font-semibold text-xl text-[#1A202C]">Reviews</h1>
            <div className="bg-[#3563E9] px-2 py-1 rounded-md flex items-center justify-center text-white">
              13
            </div>
          </div>
          {/* Client Reviews */}
          {/* Repeat review structure for each client */}
        </div>

        <div className="text-[#90A3BF] flex items-center justify-center gap-4">
          <button>Show All</button>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00026 11.1996C7.53359 11.1996 7.06692 11.0196 6.71359 10.6663L2.36692 6.31964C1.97926 5.93197 1.97926 5.2683 2.36692 4.88063C2.75459 4.49296 3.41826 4.49296 3.80592 4.88063L7.00026 8.07496L7.00026 4.79996C7.00026 4.35129 7.35159 3.99996 7.80026 3.99996C8.24992 3.99996 8.60026 4.35129 8.60026 4.79996L8.60026 8.07496L11.7946 4.88063C12.1823 4.49296 12.846 4.49296 13.2336 4.88063C13.6213 5.2683 13.6213 5.93197 13.2336 6.31964L8.88692 10.6663C8.53359 11.0196 8.00026 11.1996 8.00026 11.1996Z"
              fill="white"
            />
          </svg>
        </div>

        <div>
          <Carousel>
            <CarouselContent>
              {recommendedCarData.length > 0 ? (
                recommendedCarData.map((car, index) => (
                  <CarouselItem key={index}>
                    <Mycard
                      id={car.id}
                      name={car.name}
                      category={car.category}
                      pricePerDay={car.price}
                      image={car.image} petrol={0} people={0}                    />
                  </CarouselItem>
                ))
              ) : (
                <CarouselSkeleton />
              )}
            </CarouselContent>
          </Carousel>
        </div>
      </main>
    </section>
  );
}

export default Page;
