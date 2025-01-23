"use client";
import Image from "next/image";
import React from "react";
import { useWish } from "@/Context/wishlistContext";   
import { Trash } from "lucide-react";

type AllCar = {
  id: number;
  name: string;
  category: string;
  image: string;
  petrol: number;
  people: number;
  price: number;
  type?: string;
  originalPrice?: number;
};

function Page() {
  const { wishItems, removeFromWish } = useWish();

  const removeWishHandler = (productId: number) => {
    removeFromWish(productId);
  };

  return (
    <section className="space-y-12 py-10">
      <div className="flex flex-col justify-center items-center">
        <svg
          className="h-10 w-8"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />{" "}
          <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" />
        </svg>
        <h1 className="text-3xl font-bold">My Wishlist</h1>
      </div>
      <div className="flex justify-center items-center px-3">
        {wishItems.length === 0 ? (
          <div>No Item In Wishlist</div>
        ) : (
          <table className="border-2 border-gray-200 overflow-x-auto ">
            <thead>
              <tr className="bg-[#E5E7EB] h-10 text-center">
                <th>Product</th>
                <th>Name</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {wishItems.map((item: AllCar) => (
                <tr key={item.id}>
                  <td className="w-[25vw] sm:w-[30vw] md:py-4 border flex justify-center justify-items-center py-[5%]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="max-md:w-[17vw] md:w-[20vw] max-md:h-[7vw] md:h-[10vw]"
                      width={300}
                      height={200}
                    />
                  </td>
                  <td className="md:w-52 max-md:w-40 max-md:text-sm border text-center py-[2%]">{item.name}</td>
                  <td className="md:w-52 max-md:w-40 max-md:text-sm border text-center py-[2%]">{item.price}</td>
                  <td className="md:w-52 max-md:w-40 max-md:text-sm border py-[2%]">
                    <div className="flex justify-center items-center text-red-500 max-md:text-[10px]">
                      <button onClick={() => removeWishHandler(item.id)}>
                       <Trash/>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}

export default Page;