"use client";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
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
import CategoryAsideBar from "@/components/CategoryAsideBar";
import { ChevronDown, Star } from "lucide-react";

interface recommendcardata {
  _id: number ;
  fuelCapacity: number;
  seatingCapacity: number;
  pricePerDay: number;
  id: number;
  name: string;
  image: string;
  petrol: number;
  people: number;
  price: number;
  type: string;
  transmission: string;
  originalPrice: number;
}

async function fetchCarsForRecommended() {
  const query = `*[_type == "car" && "recommended" in tags]{
    id,
    name,
    type,
    "image": image.asset->url,
    fuelCapacity,
    seatingCapacity,
    pricePerDay,
    originalPrice
  }`;

  try {
    const cars = await client.fetch(query);

    return cars.map((car: recommendcardata) => ({
      id: car.id,
      name: car.name,
      type: car.type,
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
  const query = `*[_type == "car" ]{
    _id,
    name,
    type,
    "image": image.asset->url,
    fuelCapacity,
    seatingCapacity,
    pricePerDay,
    originalPrice,
    transmission
  }`;

  try {
    const cars = await client.fetch(query);

    return cars.map((car: recommendcardata) => ({
      _id: car.id,
      name: car.name,
      type: car.type,
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

function Page() {
  const { _id } = useParams();
  console.log(_id);
  const carId = _id ? parseInt(_id as string) : undefined;

  const [priceRange, setPriceRange] = useState<[number, number]>([90, 210]);
  const [AllCarData, SetAllCarData] = useState<recommendcardata[]>([]);
  const [isPortal, SetIsPortal] = useState(false);
  const [RecommendedcarData, SetRecommendedcarData] = useState<
    recommendcardata[]
  >([]);

  const handleSliderChange = (value: [number, number]) => {
    setPriceRange(value);
  };

  const toggleModal = () => {
    SetIsPortal(!isPortal);
  };

  const searchedCar = AllCarData.find((car) => car._id === carId);
  useEffect(() => {
    async function fetchDynamicData() {
      const fetchedDynamicCars = await fetchAllCars();

      SetAllCarData(fetchedDynamicCars);
    }
    fetchDynamicData();
  }, []);

  useEffect(() => {
    async function fetchRecommendData() {
      const fetchedCars = await fetchCarsForRecommended();
      SetRecommendedcarData(fetchedCars);
    }
    fetchRecommendData();
  }, []);
  console.log(AllCarData);

  return (
    <section className="bg-[#f6f7f9] flex ">
      <CategoryAsideBar
        maxPrice={priceRange}
        handleSliderChange={handleSliderChange}
      />

      {/* RIGHT SIDE */}
      <main className=" w-full lg:w-[90%] xl:w-[85%] px-6 py-7 space-y-7">
        {!searchedCar ? (
          <DetailPageSkeleton />
        ) : (
          <div className="flex flex-col xl:flex-row gap-10">
            {/* LEFT */}
            <div className=" flex flex-col gap-5 rounded-md w-full">
              <div className="bg-[#3563E9] h-[232px] sm:h-[360px] relative flex flex-col items-center justify-end py-10 ">
                <Image
                  src={searchedCar.image}
                  alt="Image"
                  width={300}
                  height={150}
                  className="sm:w-[300px] w-[190px] "
                />
                <div className="text-white flex flex-col gap-4 p-5 absolute top-0">
                  <h1 className="font-semibold text-base sm:text-[32px] leading-6 sm:leading-8">
                    Sports car with the best design and acceleration
                  </h1>
                  <p className="font-medium text-xs sm:text-base leading-[15px] sm:leading-6 ">
                    Safety and comfort while driving a{" "}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 justify-between">
                <Image
                  src={"/images/view-1.png"}
                  alt="Image"
                  width={150}
                  height={150}
                  className="sm:w-[150px] w-[80px]"
                />
                <Image
                  src={"/images/view-2.png"}
                  alt="Image"
                  width={150}
                  height={150}
                  className="sm:w-[150px] w-[80px]"
                />
                <Image
                  src={"/images/view-3.png"}
                  alt="Image"
                  width={150}
                  height={150}
                  className="sm:w-[150px] w-[80px]"
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="p-5 bg-white shadow rounded-md space-y-10 ">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h1 className="font-bold text-3xl">{searchedCar.name}</h1>
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
                  <div className="flex items-center text-yellow-400">
                    <Star size={20} className="fill-yellow-400" />
                    <Star size={20} className="fill-yellow-400" />
                    <Star size={20} className="fill-yellow-400" />
                    <Star size={20} className="fill-yellow-400" />
                    <Star size={20} className="fill-yellow-400" />
                  </div>
                  <h1 className="font-medium text-sm text-[#596780]">
                    440+ Reviewer
                  </h1>
                </div>
              </div>
              <div>
                <p className="font-normal text-[#596780] leading-10">
                  NISMO has become the embodiment of Nissan&apos;s outstanding
                  performance, inspired by the most unforgiving proving ground,
                  the &quot;race track&quot;.
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between gap-4 sm:gap-10">
                    <h1 className="text-xs sm:text-xl text-[#90A3BF] ">
                      Type Car
                    </h1>
                    <h1 className="text-xs sm:text-xl text-[#596780] font-semibold">
                      {searchedCar?.type}
                    </h1>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:gap-10">
                    <h1 className="text-xs sm:text-xl text-[#90A3BF] ">
                      Steering
                    </h1>
                    <h1 className="text-xs sm:text-xl text-[#596780] font-semibold">
                      {searchedCar?.transmission}
                    </h1>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center justify-between gap-4 sm:gap-10">
                    <h1 className="text-xs sm:text-xl text-[#90A3BF] ">
                      Capacity
                    </h1>
                    <h1 className="text-xs sm:text-xl text-[#596780] font-semibold">
                      {searchedCar?.people}
                    </h1>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:gap-10    ">
                    <h1 className="text-xs sm:text-xl text-[#90A3BF] ">
                      Gasoline
                    </h1>
                    <h1 className="text-xs sm:text-xl text-[#596780] font-semibold">
                      {searchedCar?.petrol}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <h1 className="text-xl font-bold">
                    {searchedCar?.price} / day
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
          {/* FIRST CLIENT */}
          <div className="flex items-center justify-center gap-2 sm:gap-5 space-y-5">
            <div className="py-5">
              <Image
                src="/images/Profil.png"
                alt="profile image"
                width={100}
                height={100}
                className=" w-[50px]"
              />
            </div>
            <div className="flex flex-col items-center justify-around w-full gap-5">
              <div className="flex items-center justify-between w-full">
                <div>
                  <h1 className="font-bold text-base sm:text-xl">
                    Alex Stanton
                  </h1>
                  <h1 className="text-xs sm:text-sm font-medium text-[#90A3BF]">
                    CEO at Bukalapak
                  </h1>
                </div>
                <div className="justify-items-center">
                  <h1 className="text-xs sm:text-sm font-medium text-[#90A3BF]">
                    21 July 2022
                  </h1>
                  <div className="flex items-center text-yellow-400">
                    <Star className="fill-yellow-400" size={20} />
                    <Star className="fill-yellow-400" size={20} />
                    <Star className="fill-yellow-400" size={20} />
                    <Star className="fill-yellow-400" size={20} />
                    <Star className="fill-yellow-400" size={20} />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm text-[#596780] font-normal ">
                  We are very happy with the service from the MORENT App. Morent
                  has a low price and also a large variety of cars with good and
                  comfortable facilities. In addition, the service provided by
                  the officers is also very friendly and very polite.
                </p>
              </div>
            </div>
          </div>

          {/* SECOND CLIENT */}
          <div className="flex items-center justify-center gap-2 sm:gap-5 space-y-5">
            <div className="py-5">
              <Image
                src="/images/ProfilL (1).png"
                alt="profile image"
                width={100}
                height={100}
                className=" w-[50px]"
              />
            </div>
            <div className="flex flex-col items-center justify-around w-full gap-5">
              <div className="flex items-center justify-between w-full">
                <div>
                  <h1 className="font-bold text-base sm:text-xl">
                    Alex Stanton
                  </h1>
                  <h1 className="text-xs sm:text-sm font-medium text-[#90A3BF]">
                    CEO at Bukalapak
                  </h1>
                </div>
                <div className="justify-items-center">
                  <h1 className="text-xs sm:text-sm font-medium text-[#90A3BF]">
                    21 July 2022
                  </h1>
                  <div className="flex items-center text-yellow-400">
                    <Star className="fill-yellow-400" size={20} />
                    <Star className="fill-yellow-400" size={20} />
                    <Star className="fill-yellow-400" size={20} />
                    <Star className="fill-yellow-400" size={20} />
                    <Star className="fill-yellow-400" size={20} />
                  </div>
                </div>
              </div>
              <div>
                <p className="text-sm text-[#596780] font-normal ">
                  We are very happy with the service from the MORENT App. Morent
                  has a low price and also a large variety of cars with good and
                  comfortable facilities. In addition, the service provided by
                  the officers is also very friendly and very polite.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-[#90A3BF] flex items-center justify-center gap-2">
          <button>Show All</button>
          <ChevronDown />
        </div>

        <div className=" bg-[#f6f7f9] py-8 space-y-8">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h1 className="text-[#90A3BF] text-base font-semibold ">
                Recomendation Car
              </h1>
              <h1 className="text-[#3563E9] text-base font-semibold ">
                View All
              </h1>
            </div>
            <Carousel className="w-full max-w-full">
              <CarouselContent>
                {RecommendedcarData.length === 0 ? (
                  <CarouselSkeleton />
                ) : (
                  RecommendedcarData.map(
                    (val: recommendcardata, index: number) => (
                      <CarouselItem
                        key={index}
                        className="md:basis-1/2 lg:basis-1/3 xl:basis-1/3 border-none"
                      >
                        <Card className="border-none h-96">
                          <CardContent className="flex border-none aspect-square items-center justify-center p-5">
                            <Mycard
                              id={val.id}
                              name={val.name}
                              type={val.type}
                              image={val.image}
                              petrol={val.petrol}
                              people={val.people}
                              price={val.price}
                              originalPrice={val.originalPrice}
                            />
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    )
                  )
                )}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Page;
