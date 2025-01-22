"use client";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

interface MyType {
  maxPrice: [number, number];
  handleSliderChange: (value: [number, number]) => void;
}

function CategoryAsideBar({ maxPrice, handleSliderChange }: MyType) {
  return (
    <aside className="lg:w-[20%] xl:w-[20%] hidden lg:block border-r px-5 py-6 bg-white space-y-10">
      {/* TYPE */}
      <div className="space-y-5">
        <h1 className="text-[#90A3BF] font-semibold text-xs">TYPE</h1>
        <div className="flex flex-col gap-3">
          {[
            { label: "Sport", count: 10, checked: true },
            { label: "SUV", count: 12, checked: true },
            { label: "MPV", count: 16 },
            { label: "Sedan", count: 20 },
            { label: "Coupe", count: 14 },
            { label: "Hatchback", count: 14 },
          ].map((type) => (
            <div key={type.label} className="flex items-center gap-2 text-[#596780] font-semibold text-1xl">
              <Checkbox checked={type.checked} />
              {type.label}
              <span className="text-[#90A3BF] font-semibold text-xl">({type.count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORY */}
      <div className="space-y-5">
        <h1 className="text-[#90A3BF] font-semibold text-xs">Category</h1>
        <div className="flex flex-col gap-3">
          {[
            { label: "2 Person", count: 10 },
            { label: "4 Person", count: 14 },
            { label: "6 Person", count: 12 },
            { label: "8 or More", count: 16, checked: true },
          ].map((category) => (
            <div key={category.label} className="flex items-center gap-2 text-[#596780] font-semibold text-1xl">
              <Checkbox checked={category.checked} />
              {category.label}
              <span className="text-[#90A3BF] font-semibold text-xl">({category.count})</span>
            </div>
          ))}
        </div>
      </div>

      {/* PRICE */}
      <div className="flex flex-col gap-5">
        <h1 className="text-[#90A3BF] font-semibold text-xs">Price</h1>
        <div className="flex flex-col gap-3">
          <Slider
            value={maxPrice}
            onValueChange={(value) => handleSliderChange([value[0], value[1]])}
            max={210}
            step={5}
          />
          <h1 className="flex items-center gap-2 text-[#596780] font-semibold">
            Max. ${maxPrice && maxPrice[0]}
          </h1>
        </div>
      </div>
    </aside>
  );
}

export default CategoryAsideBar;
