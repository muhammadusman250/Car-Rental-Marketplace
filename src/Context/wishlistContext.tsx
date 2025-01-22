"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

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

interface WishContextType {
  wishItems: AllCar[];
  addToWish: (item: AllCar) => void;
  removeFromWish: (itemId: number) => void;
}

const WishContext = createContext<WishContextType | null>(null);

export function WishProvider({ children }: { children: ReactNode }) {
  const [wishItems, setWishItems] = useState<AllCar[]>([]);

  const removeFromWish = (itemId: number) => {
    setWishItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const addToWish = (item: AllCar) => {
    setWishItems((prevItems) => [...prevItems, item]);
  };

  return (
    <WishContext.Provider value={{ wishItems, addToWish, removeFromWish }}>
      {children}
    </WishContext.Provider>
  );
}
export const useWish = () => {
  const context = useContext(WishContext);
  if (!context) {
    throw new Error("useWish must be used within a WishProvider");
  }
  return context;
};
