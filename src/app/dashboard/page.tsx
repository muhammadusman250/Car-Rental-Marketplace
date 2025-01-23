"use client";
import DashboardAsideBar from "@/components/DashboardAsideBar";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type AllCar = {
  price: number;
  id: number;
  name: string;
  category: string;
  image: string;
  pricePerDay: number;
  seatingCapacity: number;
  fuelCapacity: number;
  type?: string;
  transmission?: string;
  originalPrice?: number;
};

async function fetchAllCars() {
  const query = `*[_type == "car" ][0...5]{
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

    return cars.map((car: AllCar) => ({
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
  } catch {
    console.error("Error fetching data from Sanity:");
    return [];
  }
}

function Page() {
  const [AllCarData, SetAllCarData] = useState<AllCar[]>([]);

  useEffect(() => {
    async function fetchDynamicData() {
      const fetchedDynamicCars = await fetchAllCars();

      SetAllCarData(fetchedDynamicCars);
    }
    fetchDynamicData();
  }, []);

  return (
    <section className="bg-[#F6F7F9] flex">
      <DashboardAsideBar />
      {/* RIGHT SIDE */}
      <main className=" w-full lg:w-[90%] xl:w-[85%] flex flex-col xl:flex-row px-6 py-6 gap-6">
        {/* LEFT */}
        <div className="bg-white p-6 flex flex-col rounded-md xl:w-[50%] space-y-5">
          <h1 className=" font-bold text-base sm:text-xl">Details Rental</h1>
          <Image
            src={"/images/Maps.png"}
            alt="Map Image"
            width={500}
            height={150}
            className="w-full"
          />
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src={"/images/View-1.png"}
                alt="Car Image"
                width={130}
                height={130}
              />
              <div>
                <h1>Nissan GT - R</h1>
                <p>Sport Car</p>
              </div>
            </div>
            <div>#9761</div>
          </div>
          {/* Pick-Up and Drop-Off Section */}
          <div className="flex flex-col gap-2 py-3 border-b items-center ">
            {/* Pick-Up Section */}
            <div className="flex flex-col gap-4 px-6 py-6 rounded-[10px] bg-white flex-1">
              <div className="flex items-center gap-2">
                <input type="radio" />

                <h1 className="font-semibold">Pick-Up</h1>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap gap-6">
                {/* Locations */}
                <div className="flex flex-col sm:border-r sm:pr-3 gap-2 flex-1">
                  <h1 className="font-bold">Locations</h1>
                  <select className="text-gray-500 outline-none bg-transparent">
                    <option value="" hidden>
                      Select your city
                    </option>
                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                  </select>
                </div>
                {/* Date */}
                <div className="flex flex-col sm:border-r sm:px-3 gap-2 flex-1">
                  <h1 className="font-bold">Date</h1>
                  <select className="text-gray-500 outline-none bg-transparent">
                    <option value="" hidden>
                      Select your date
                    </option>
                    <option value="15 to 27 Jan">15 to 27 Jan</option>
                    <option value="1 to 10 Feb">1 to 10 Feb</option>
                    <option value="8 to 16 March">8 to 16 March</option>
                    <option value="1 to 20 April">1 to 20 April</option>
                  </select>
                </div>
                {/* Time */}
                <div className="flex flex-col sm:pl-3 gap-2 flex-1">
                  <h1 className="font-bold">Time</h1>
                  <select className="text-gray-500 outline-none bg-transparent">
                    <option value="" hidden>
                      Select your time
                    </option>
                    <option value="8 am">12 pm</option>
                    <option value="1 pm">1 pm</option>
                    <option value="2 pm">2 pm</option>
                    <option value="3 pm">3 pm</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Drop-Off Section */}
            <div className="flex flex-col gap-4 px-6 py-6 rounded-[10px] bg-white flex-1">
              <div className="flex items-center gap-2">
                <input type="radio" />

                <h1 className="font-semibold">Drop-Off</h1>
              </div>
              <div className="flex flex-wrap sm:flex-nowrap gap-6">
                {/* Locations */}
                <div className="flex flex-col sm:border-r sm:pr-3 gap-2 flex-1">
                  <h1 className="font-bold">Locations</h1>
                  <select className="text-gray-500 outline-none bg-transparent">
                    <option value="" hidden>
                      Select your city
                    </option>
                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                  </select>
                </div>
                {/* Date */}
                <div className="flex flex-col sm:border-r sm:px-3 gap-2 flex-1">
                  <h1 className="font-bold">Date</h1>
                  <select className="text-gray-500 outline-none bg-transparent">
                    <option value="" hidden>
                      Select your date
                    </option>
                    <option value="15 to 27 Jan">15 to 27 Jan</option>
                    <option value="1 to 10 Feb">1 to 10 Feb</option>
                    <option value="8 to 16 March">8 to 16 March</option>
                    <option value="1 to 20 April">1 to 20 April</option>
                  </select>
                </div>
                {/* Time */}
                <div className="flex flex-col sm:pl-3 gap-2 flex-1">
                  <h1 className="font-bold">Time</h1>
                  <select className="text-gray-500 outline-none bg-transparent">
                    <option value="" hidden>
                      Select your time
                    </option>
                    <option value="8 am">12 pm</option>
                    <option value="1 pm">1 pm</option>
                    <option value="2 pm">2 pm</option>
                    <option value="3 pm">3 pm</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* TOTAL PRICE */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className=" text-sm sm:text-xl font-bold">
                Total Rental Price
              </h1>
              <h1>Overall price and includes rental discount</h1>
            </div>
            <div className=" text-base font-semibold sm:text-xl">$80.00</div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white p-6 flex flex-col rounded-md xl:w-[50%] space-y-10">
          <div className="space-y-5">
            <h1 className=" font-bold text-base sm:text-xl">
              Top 5 Car Rental
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="relative flex items-center justify-center">
                <Image
                  src="/images/Chart.png"
                  alt="Chart Image"
                  width={220}
                  height={150}
                />
                <div className="absolute top-10 text-center space-y-5">
                  <h1 className="font-bold">72,030</h1>
                  <p>Rental Car</p>
                </div>
              </div>
              <div className="flex flex-col space-y-5  w-full">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="12" height="12" rx="6" fill="#0D3559" />
                    </svg>
                    <h1>Sport Car</h1>
                  </div>
                  <div>17,439</div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="12" height="12" rx="6" fill="#0D3559" />
                    </svg>
                    <h1>SUV</h1>
                  </div>
                  <div>9,478</div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="12" height="12" rx="6" fill="#0D3559" />
                    </svg>
                    <h1>Coupe</h1>
                  </div>
                  <div>18,197</div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="12" height="12" rx="6" fill="#0D3559" />
                    </svg>
                    <h1>Hatchback</h1>
                  </div>
                  <div>12,150</div>
                </div>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="12" height="12" rx="6" fill="#0D3559" />
                    </svg>
                    <h1>MPV</h1>
                  </div>
                  <div>14,406</div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <h1>Recent Transaction</h1>
              <h1>View All</h1>
            </div>

            {/* FEW CARS */}
            {AllCarData.map((car, index) => (
              <div key={index} className="space-y-6">
                <div className="flex flex-row items-center justify-between gap-2">
                  <div className="justify-items-center ">
                    <Image src={car.image} alt="" width={150} height={150} />
                    <h1 className="font-semibold py-3 sm:hidden">{car.name}</h1>
                  </div>
                  <div className="flex flex-col items-center gap-2 max-sm:hidden">
                    <h1 className="font-semibold">{car.name}</h1>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-sm text-[#90A3BF]">20 July</h1>
                    <p>{car.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}

export default Page;
