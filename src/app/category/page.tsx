"use client";
import React, { useEffect, useState } from "react";
import Mycard from "@/components/Mycard";
import { client } from "@/sanity/lib/client";
import GridSkeleton from "@/components/GridSkeleton";

type AllCar = {
  id: number;
  name: string;
  image: string;
  type:string;
  pricePerDay: number;
  seatingCapacity: number;
  fuelCapacity: number;
  petrol: number;
  people: number;
  price: number;
  originalPrice?: number;
};

async function fetchAllCarsFromSanity() {
  const query = `*[_type == "car"]{
    id,
    type,
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

    return cars.map((car:AllCar) => ({
      id: car.id,
      name: car.name,
      type:car.type,
      image: car.image || "",
      petrol: car.fuelCapacity || 0,
      people: car.seatingCapacity || 0,
      price: car.pricePerDay || 0,
      originalPrice: car.originalPrice || 0,
    }));
  } catch {
    console.error("Error fetching data from Sanity");
    return [];
  }
}

function Page() {
  const [carData, setCarData] = useState<AllCar[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    async function fetchData() {
      const fetchedCars = await fetchAllCarsFromSanity();
      setCarData(fetchedCars);
    }
    fetchData();
  }, []);

  return (
    <section className="px-6 sm:px-10 bg-[#f6f7f9] py-8 space-y-8">
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row items-center justify-between sm:space-y-0 space-y-5">
          <h1 className="text-[#90A3BF] text-base font-semibold ">All Cars</h1>
          <div className="flex items-center flex-col sm:flex-row  xl:w-[40%] sm:gap-x-5 sm:space-y-0 space-y-5">
            {/* Search */}
            <div className="flex items-center justify-between w-full sm:w-[95%] h-[44px] rounded-[70px] px-4 border border-gray-400">
              <div className="flex items-center gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    stroke="#596780"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 22L20 20"
                    stroke="#596780"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search cars by name"
                  className="w-full outline-none bg-transparent"
                  onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
                />
              </div>
            </div>

            {/* FILTER */}
            <select
              onChange={(e) => setFilterType(e.target.value)}
              className="outline-none overflow-hidden w-full sm:w-[95%] h-12 rounded-[70px] px-4 border border-gray-400 bg-transparent"
            >
              <option value="" hidden>
                Filter by Type
              </option>
              <option value="">All</option>
              <option value="Sport">Sport</option>
              <option value="Sedan">Sedan</option>
              <option value="Electric">Electric</option>
              <option value="Gasoline">Gasoline</option>
              <option value="Diesel">Diesel</option>
              <option value="Hybrid">Hybrid</option>
              <option value="SUV">SUV</option>
              <option value="Hatchback">Hatchback</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {carData.filter((searchproduct) =>
            searchproduct.name.toLowerCase().includes(searchValue)
          ).length > 0 ? (
            carData
              .filter((searchproduct) =>
                searchproduct.name
                  .toLowerCase()
                  .includes(searchValue.toLowerCase())
              )
              .filter((filttype) =>
                filttype.type.includes(filterType)
              )
              .map((val: AllCar) => (
                <Mycard
                  key={val.id}
                  id={val.id}
                  name={val.name}
                  type={val.type}
                  image={val.image}
                  petrol={val.petrol}
                  people={val.people}
                  price={val.price}
                  originalPrice={val.originalPrice}
                />
              ))
          ) : (
            <GridSkeleton />
          )}
        </div>
      </div>
    </section>
  );
}

export default Page;
