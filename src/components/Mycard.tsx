import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useWish } from "../Context/wishlistContext";

type Data = {
  id: number;
  name: string;
  category: string;
  image: string;
  petrol: number;
  people: number;
  pricePerDay: number;
  originalPrice?: number;
};

const Card: React.FC<Data> = ({
  id,
  name,
  category,
  image,
  petrol,
  people,
  pricePerDay,
  originalPrice,
}) => {
  const { addToWish } = useWish();

  return (
    <div className="p-5 space-y-10 lg:w-full bg-white rounded-md shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">{name}</h1>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() =>
            addToWish({
              id,
              name,
              category,
              image,
              petrol,
              people,
              originalPrice,
              price: pricePerDay,
            })
          }
          className="hover:scale-90 cursor-pointer"
          aria-label="Add to Wishlist"
        >
          <path
            d="M12.62 20.8096C12.28 20.9296 11.72 20.9296 11.38 20.8096C8.48 19.8196 2 15.6896 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.38 3.09961 10.99 3.97961 12 5.33961C13.01 3.97961 14.63 3.09961 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961C22 15.6896 15.52 19.8196 12.62 20.8096Z"
            stroke="#90A3BF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="text-[#90A3BF] font-bold text-sm">{category}</div>

      {/* Image */}
      <div className="flex justify-center">
        <Image
          src={image}
          alt={name}
          width={200}
          height={150}
          className="rounded-md"
        />
      </div>

      {/* Details */}
      <div className="flex items-center gap-4">
        <div>{petrol}L</div>
        <div>Manual</div>
        <div>{people} People</div>
      </div>

      {/* Price and CTA */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">${pricePerDay}</h1>
          {originalPrice && (
            <h1 className="text-[#90A3BF] font-bold text-sm">
              <s>${originalPrice}</s>
            </h1>
          )}
        </div>
        <Link href={`/car/${id}`}>
          <Button variant="outline" className="bg-[#3563E9] px-5 text-white">
            Rent Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
