import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useWish } from "@/Context/wishlistContext";
import { FaGasPump, FaUsers } from "react-icons/fa";
import { GiSteeringWheel } from "react-icons/gi";
import { Heart } from "lucide-react";

type data = {
  id: number;
  name: string;
  category: string;
  image: string;
  petrol: number;
  people: number;
  price: number;
  originalPrice?: number;
};

function Card({
  id,
  name,
  category,
  image,
  petrol,
  people,
  price,
  originalPrice,
}: data) {
  const { addToWish } = useWish();

  return (
    <div className="p-5 space-y-10 bg-white rounded-md">
      <div className="flex flex-col" key={id}>
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-xl ">{name}</h1>
          <Link href={"/wishlist"}>
            <Heart
              className="hover:scale-90"
              onClick={() =>
                addToWish({
                  id,
                  name,
                  category,
                  image,
                  petrol,
                  people,
                  price,
                  originalPrice,
                })
              }
            />
          </Link>
        </div>
        <div className="text-[#90A3BF] font-bold text-sm ">{category}</div>
      </div>
      <div className="flex justify-center">
        <Image src={image} alt="Image" width={200} height={150} />
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-[6px]">
          <FaGasPump />
          {petrol}
        </div>
        <div className="flex items-center gap-[6px]">
          <GiSteeringWheel />
          Manual
        </div>
        <div className="flex items-center gap-[6px]">
          <FaUsers />
          {people}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">
            {price}/day
          </h1>
          {originalPrice && (
            <h1 className="text-[#90A3BF] font-bold text-sm">
              <s>{originalPrice}</s>
            </h1>
          )}
        </div>
        <Link href={`/car/${id}`}>
          <Button variant={"outline"} className="bg-[#3563E9] px-5 text-white">
            Rent Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
