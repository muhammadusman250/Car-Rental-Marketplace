import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { HeartIcon, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarDetailsProps {
  params: { id: string };
}

export default async function CarDetailsPage({ params }: CarDetailsProps) {
  const { id } = params;

  // Fetch car details from Sanity
  const car = await client.fetch(
    `*[_type == "car" && _id == $id][0]{
    _id,
    name,
    type,
    pricePerDay,
    originalPrice,
    fuelCapacity,
    transmission,
    seatingCapacity,
    description,
    "image": image.asset->url,
    }`,
    { id }
  );

  if (!car) {
    notFound();
  }

  return (
    // <div className="max-w-6xl mx-auto p-6">
    //   {/* Car Title and Image */}
    //   <div className="flex flex-col md:flex-row items-center gap-6">
    //     <div className="w-full md:w-1/2">
    //       <Image
    //         src={car.image}
    //         alt={car.name}
    //         width={600}
    //         height={400}
    //         className="rounded-lg shadow-lg object-cover"
    //       />
    //     </div>
    //     <div className="w-full md:w-1/2 border p-6 rounded-lg shadow-lg ">
    //       <h1 className="text-4xl font-semibold text-gray-800">{car.name}</h1>
    //       <p className="text-xl text-gray-600">{car.type}</p>
    //       <div className="mt-4">
    //         <p className="text-lg font-semibold text-gray-700">Price per Day</p>
    //         <p className="text-xl font-bold text-blue-600">{car.pricePerDay}</p>
    //       </div>
    //       <div className="mt-4">
    //         <p className="text-lg font-semibold text-gray-700">Fuel Capacity</p>
    //         <p className="text-md text-gray-600">{car.fuelCapacity}</p>
    //       </div>
    //       <div className="mt-4">
    //         <p className="text-lg font-semibold text-gray-700">Transmission</p>
    //         <p className="text-md text-gray-600">{car.transmission}</p>
    //       </div>
    //       <div className="mt-4">
    //         <p className="text-lg font-semibold text-gray-700">Seating Capacity</p>
    //         <p className="text-md text-gray-600">{car.seatingCapacity}</p>
    //       </div>
    //       <div className="mt-6">
    //         <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300">
    //           Rent Now
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Car Description */}
    //   <div className="mt-8">
    //     <h2 className="text-2xl font-semibold text-gray-800">Description</h2>
    //     <p className="text-md text-gray-600 mt-4">{car.description}</p>
    //   </div>
    // </div>
    <div className="w-full md:w-3/4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 p-4">
      <div className="w-full flex flex-col items-center">
        <Image alt={car.name} src={car.image} width={250} height={250} />
      </div>
      <div className="w-full h-auto p-5 bg-white rounded-[10px] mt-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl md:text-3xl font-bold">{car.name}</h2>
          <HeartIcon />
        </div>
        <div className="flex items-center gap-2 mt-2">
          <div className="text-yellow-500 flex items-center gap-1 text-sm md:text-base">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <div className="text-[#596780] text-xs md:text-sm">440+ Reviews</div>
        </div>
        <div className="text-[#596780] text-sm md:text-lg mt-4 md:mt-8">
          {car.description}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="flex justify-between text-sm md:text-lg">
            <span className="text-[#90A3BF] font-medium">Car Type:</span>
            <span className="text-[#90A3BF] font-medium">{car.type}</span>
          </div>
          <div className="flex justify-between text-sm md:text-lg">
            <span className="text-[#90A3BF] font-medium">Steering:</span>
            <span className="text-[#90A3BF] font-medium">{car.transmission}</span>
          </div>
          <div className="flex justify-between text-sm md:text-lg">
            <span className="text-[#90A3BF] font-medium">Capacity:</span>
            <span className="text-[#90A3BF] font-medium">{car.seatingCapacity}</span>
          </div>
          <div className="flex justify-between text-sm md:text-lg">
            <span className="text-[#90A3BF] font-medium">Gasoline:</span>
            <span className="text-[#90A3BF] font-medium">{car.fuelCapacity}</span>
          </div>
        </div>
        <div className="flex justify-between items-center mt-10 md:mt-12">
          <div>
          <div className="flex items-center">
            <span className="text-2xl md:text-3xl font-bold text-black">{car.pricePerDay}</span>
            <span className="text-sm md:text-base font-bold text-[#90A3BF] ml-2">/day</span>
          </div>
          <span className="text-[#90A3BF] line-through text-sm md:text-base font-bold">{car.originalPrice}</span>
          </div>
          <a><Button className="bg-blue-600 px-5 mx-3">
              Rental Car
            </Button></a>
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 mt-8 md:mt-16"></div>
    </div>
  );
}
