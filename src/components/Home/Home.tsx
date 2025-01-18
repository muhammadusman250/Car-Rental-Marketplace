import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
import Link from "next/link";

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

export default async function Home() {
  const Cars: CarsData[] = await client.fetch(`*[_type == "car"]{
        _id,
        name,
        type,
        fuelCapacity,
        transmission,
        pricePerDay,
        originalPrice,
        tags,
        "image": image.asset->url,     
 }`);
  console.log(Cars);
  return (
    <>
      <div className="px-[7%] max-2xl:px-[5%] max-xl:px-[3%]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-5">
          {Cars.map((item) => {
            return (
              <div className="p-4 shadow-lg hover:shadow-2xl hover:scale-105 duration-300 ">
                <div className="flex justify-between items-start mb-2">
                  {/* Headings in card */}
                  <div>
                    <h3 className="font-semibold mb-1">{item.name}</h3>
                    <p className="text-[14px] text-[#90A3BF]">{item.type}</p>
                  </div>
                  {/* Button for Heart */}
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Heart />
                  </Button>
                </div>
                {/* Image of car */}
                <Image
                width={250}
                height={250}
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-contain my-4"
                />
                <div className="flex justify-evenly items-center mb-4 text-sm text-gray-600 font-bold">
                  {/* Details of car */}
                  <div className="items-center">
                    <div>{item.fuelCapacity}</div>
                  </div>
                  <div className="items-center">
                    <div>{item.transmission}</div>
                  </div>
                  <div className="items-center">
                    <div>{item.seatingCapacity}</div>
                  </div>
                </div>
                {/* Price Tag */}
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <div>
                      <span className="text-[16px] font-semibold text-[#1A202C]">{item.pricePerDay}</span>
                      <span className="text-[14px] text-[#90A3BF]">/day</span>
                    </div>
                    <div>
                      <span className="text-[14px] text-[#90A3BF] line-through">{item.originalPrice}</span>
                    </div>
                  </div>
                  {/* Rent Button  */}
                  <Link href={`/car/${item._id}`}>
                  <Button className="bg-blue-600 px-5 mx-3">
                    Rent Now
                  </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
