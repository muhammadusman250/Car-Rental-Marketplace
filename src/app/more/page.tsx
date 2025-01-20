"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client"; // Sanity client for fetching data

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heart } from "lucide-react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

// Type definitions for the cars
type CarType = "Sport" | "SUV" | "Sedan" | "Hatchback";
type TransmissionType = "Automatic" | "Manual";

interface CarsData {
  _id: string;
  name: string;
  type: CarType;
  fuelCapacity: number;
  transmission: TransmissionType;
  seatingCapacity: number;
  pricePerDay: number;
  originalPrice: number;
  tags: string[];
  image: string;
}

const CarFilter = () => {
  // State to store cars and filter values
  const [cars, setCars] = useState<CarsData[]>([]);
  const [typeFilter, setTypeFilters] = useState<CarType[]>([]);
  const [seatFilter, setSeatFilters] = useState<number[]>([]);
  const [maxRange, setMaxRange] = useState<number>(100);

  // Fetch cars data from Sanity
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const Cars: CarsData[] = await client.fetch(
          `*[_type == "car"]{
            _id,
            name,
            type,
            fuelCapacity,
            transmission,
            seatingCapacity,
            pricePerDay,
            originalPrice,
            tags,
            "image": image.asset->url
          }`
        );
        console.log("Fetched Cars:", Cars); // Log the fetched data
        setCars(Cars); // Set the fetched data to the state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCars();
  }, []); // Run once when the component is mounted

  // Filtering function for cars
  const Filtering = (cars: CarsData[]) => {
    return cars.filter((car) => {
      // Check if the car matches the type filter
      const matchesType = typeFilter.length === 0 || typeFilter.includes(car.type);

      // Check if the car matches the seat filter
      const matchesSeat = seatFilter.length === 0 || seatFilter.includes(car.seatingCapacity);

      // Check if the car matches the price range filter
      const matchesRange = car.pricePerDay <= maxRange;

      // Return true if all conditions match
      return matchesType && matchesSeat && matchesRange;
    });
  };

  // Filtered cars based on the selected filters
  const filteredCars = Filtering(cars);

  return (
    <div>
      {/* Header Component */}
      <Header />
      
      <div className="flex gap-6 px-[5%] max-md:px-[2%] p-6">
        {/* Sidebar Filter Section */}
        <Card className="w-64 h-fit p-4 sticky max-sm:hidden">
          <div className="space-y-6">
            {/* Type Filter */}
            <div>
              <h3 className="text-sm font-semibold mb-3">TYPE</h3>
              <div className="space-y-2">
                {["Sport", "SUV", "Sedan", "Hatchback"].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={type}
                      checked={typeFilter.includes(type as CarType)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setTypeFilters([...typeFilter, type as CarType]);
                        } else {
                          setTypeFilters(typeFilter.filter((t) => t !== type));
                        }
                      }}
                    />
                    <Label htmlFor={type}>{type}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Seat Capacity Filter */}
            <div>
              <h3 className="text-sm font-semibold mb-3">CAPACITY</h3>
              <div className="space-y-2">
                {[2, 4, 6, 8].map((capacity) => (
                  <div key={capacity} className="flex items-center space-x-2">
                    <Checkbox
                      id={`capacity-${capacity}`}
                      checked={seatFilter.includes(capacity)}
                      onCheckedChange={(checked) => {
                        if (checked) {
                          setSeatFilters([...seatFilter, capacity]);
                        } else {
                          setSeatFilters(seatFilter.filter((c) => c !== capacity));
                        }
                      }}
                    />
                    <Label htmlFor={`capacity-${capacity}`}>{capacity} Person</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div>
              <h3 className="text-sm font-semibold mb-3">PRICE</h3>
              <input
                type="range"
                min="0"
                max="150"
                step="1"
                value={maxRange}
                onChange={(e) => setMaxRange(Number(e.target.value))}
                className="w-full"
              />
              <div className="mt-2 text-sm">Max. ${maxRange.toFixed(2)}</div>
            </div>
          </div>
        </Card>

        {/* Car Listing */}
        <div className="flex-1">
          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3 px-10">
            {filteredCars.length === 0 ? (
              <p>No cars available</p>
            ) : (
              filteredCars.map((car) => (
                <Card
                  key={car._id}
                  className="p-4 shadow-lg hover:shadow-2xl hover:scale-105 duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-semibold mb-1">{car.name}</h4>
                      <h4 className="text-sm text-gray-500">{car.type}</h4>
                    </div>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Heart />
                    </Button>
                  </div>
                  <img
                    src={car.image}
                    alt={car.name}
                    width={40}
                    height={40}
                    className="w-full h-40 object-contain my-4"
                  />
                  <div className="flex justify-evenly items-center mb-4 text-sm text-gray-600 font-bold">
                    <div className="items-center">{car.seatingCapacity} Seats</div>
                    <div className="items-center">${car.pricePerDay}/day</div>
                    <Button className="bg-blue-600 px-5 mx-3">
                      <Link href="/">Rent Now</Link>
                    </Button>
                  </div>
                </Card>
              ))
            )}
          </div>

          {/* Show More Button */}
          <div className="text-center py-7">
            <Button className="bg-blue-600 px-5 mx-3">
              <Link href="/">Show more cars</Link>
            </Button>
            <div className="text-right text-gray-500 px-10">120 Cars</div>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default CarFilter;
