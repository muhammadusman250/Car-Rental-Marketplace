import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <section>
      <section className="bg-[#f8f9fc] p-6 lg:p-10 flex flex-col-reverse lg:flex-row gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-3/4  space-y-8">
          {/* Billing Info */}
          <div className="space-y-8 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h2 className="text-base sm:text-lg font-semibold text-[#1e2d40]">
                  Billing Info
                </h2>
                <p className="text-xs sm:text-sm text-[#90A3BF]">
                  Please select your billing number
                </p>
              </div>
              <div>
                <p className="text-sm text-[#90A3BF]">Step 1 of 4</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  className=" rounded-lg px-5 py-3 bg-[#F6F7F9] text-sm w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="font-semibold">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="phone"
                  className="rounded-lg px-5 py-3 bg-[#F6F7F9] text-sm w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="address" className="font-semibold">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  className="rounded-lg px-5 py-3 bg-[#F6F7F9] text-sm w-full"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="Town/City" className="font-semibold">
                  Town/CIty
                </label>
                <input
                  type="text"
                  placeholder="Town/City"
                  name="Town/City"
                  className="rounded-lg px-5 py-3 bg-[#F6F7F9] text-sm w-full"
                />
              </div>
            </div>
          </div>

          {/* Rental Info */}
          <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm ">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h2 className="text-base sm:text-lg font-semibold text-[#1e2d40]">
                  Rental Info
                </h2>
                <p className="text-xs sm:text-sm text-[#90A3BF]">
                  Please select your rental date
                </p>
              </div>
              <div>
                <p className="text-sm text-[#90A3BF]">Step 2 of 4</p>
              </div>
            </div>
            <div className="space-y-6">
              {/* Pick-Up */}
              <div>
                <label
                  htmlFor="rental-type"
                  className="flex items-center gap-2 text-sm font-medium text-[#1e2d40]"
                >
                  <input type="radio" name="rental-type" defaultChecked />
                  Pick-Up
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 font-semibold text-[#1e2d40]">
                      Location
                    </label>
                    <select className=" bg-[#F6F7F9] text-[#90A3BF] h-12 rounded-lg px-6 text-sm w-full">
                      <option>Select your city</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 font-semibold text-[#1e2d40]">
                      Date
                    </label>
                    <select className=" bg-[#F6F7F9] text-[#90A3BF] h-12 rounded-lg px-6 text-sm w-full">
                      <option>Select your date</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 font-semibold text-[#1e2d40]">
                      Time
                    </label>
                    <select className=" bg-[#F6F7F9] text-[#90A3BF] h-12 rounded-lg px-6 text-sm w-full">
                      <option>Select your time</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Drop-Off */}
              <div>
                <label
                  htmlFor="rental-type"
                  className="flex items-center gap-2 text-sm font-medium text-[#1e2d40]"
                >
                  <input type="radio" name="drop-type" defaultChecked />
                  Drop-Off
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 font-semibold text-[#1e2d40]">
                      Location
                    </label>
                    <select className=" bg-[#F6F7F9] text-[#90A3BF] h-12 rounded-lg px-6 text-sm w-full">
                      <option>Select your city</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 font-semibold text-[#1e2d40]">
                      Date
                    </label>
                    <select className=" bg-[#F6F7F9] text-[#90A3BF] h-12 rounded-lg px-6 text-sm w-full">
                      <option>Select your date</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    <label className="flex items-center gap-2 font-semibold text-[#1e2d40]">
                      Time
                    </label>
                    <select className=" bg-[#F6F7F9] text-[#90A3BF] h-12 rounded-lg px-6 text-sm w-full">
                      <option>Select your time</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PAYMENT METHOD */}
          <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm ">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h2 className="text-base sm:text-lg font-semibold text-[#1e2d40]">
                  Payment Method
                </h2>
                <p className="text-xs sm:text-sm text-[#90A3BF]">
                  Please enter your method
                </p>
              </div>
              <div>
                <p className="text-sm text-[#90A3BF]">Step 3 of 4</p>
              </div>
            </div>
            <form>
              <div className="mb-6 bg-[#F6F7F9] p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment-method"
                      className="mr-2"
                    />
                    <label
                      htmlFor="credit-card"
                      className="text-base font-semibold text-[#1A202C]"
                    >
                      Credit Card
                    </label>
                  </div>
                  <Image
                    src={"/images/Visa.png"}
                    alt="Visa Image"
                    width={100}
                    height={100}
                    className="w-[95px] sm:w-[100px]"
                  />
                </div>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="card-number"
                      className="text-sm sm:text-base font-semibold text-[#1A202C]"
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="Card number"
                      className="mt-1 p-3 border rounded-lg "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="expiration-date"
                      className="text-sm sm:text-base font-semibold text-[#1A202C]"
                    >
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      placeholder="DD / MM / YY"
                      className="mt-1 p-3 border rounded-lg "
                    />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="card-holder"
                      className="text-sm sm:text-base font-semibold text-[#1A202C]"
                    >
                      Card Holder
                    </label>
                    <input
                      type="text"
                      placeholder="Card holder"
                      className="mt-1 p-3 border rounded-lg "
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="cvc"
                      className="text-sm sm:text-base font-semibold text-[#1A202C]"
                    >
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="CVC"
                      className="mt-1 p-3 border rounded-lg "
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment-method"
                      className="mr-2"
                    />
                    <label
                      htmlFor="paypal"
                      className="flex text-sm sm:text-base items-center"
                    >
                      PayPal
                    </label>
                  </div>
                  <Image
                    src="/images/PayPal.png"
                    alt="PayPal"
                    width={100}
                    height={100}
                    className="w-[95px] sm:w-[100px]"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment-method"
                      className="mr-2 "
                    />
                    <label
                      htmlFor="paypal"
                      className="flex text-sm sm:text-base items-center"
                    >
                      Bitcoin
                    </label>
                  </div>
                  <Image
                    src="/images/Bitcoin.png"
                    alt="Bitcoin"
                    width={100}
                    height={100}
                    className="w-[95px] sm:w-[100px]"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* CONFIRMATION */}
          <div className=" p-6 bg-white rounded-lg shadow-sm space-y-8">
            <div className="flex items-center justify-between">
              <div className="flex flex-col">
                <h2 className="text-base sm:text-lg font-semibold text-[#1e2d40]">
                  Confirmation
                </h2>
                <p className="text-xs sm:text-sm text-[#90A3BF]">
                  We are getting to the end. Just few clicks and your rental is
                  ready!
                </p>
              </div>
              <div>
                <p className="text-sm text-[#90A3BF]">Step 4 of 4</p>
              </div>
            </div>

            <form>
              <div className="space-y-4">
                <div className="flex items-start p-4 border rounded-lg bg-[#F6F7F9]">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <label
                    htmlFor="marketing-agreement"
                    className="text-gray-700 text-xs sm:text-sm"
                  >
                    I agree with sending marketing and newsletter emails. No
                    spam, promised!
                  </label>
                </div>
                <div className="flex items-start p-4 border rounded-lg bg-[#F6F7F9]">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <label
                    htmlFor="terms-agreement"
                    className="text-gray-700 text-xs sm:text-sm"
                  >
                    I agree with our terms and conditions and privacy policy.
                  </label>
                </div>
              </div>

              <button className="mt-6 px-6 bg-[#3563E9] text-white py-3 rounded-lg">
                Rent Now
              </button>
            </form>

            <div className="mt-6 flex flex-col  space-y-5">
              <div className="">
                <svg
                  width="30"
                  height="32"
                  viewBox="0 0 30 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.0532 5.96007C23.1587 6.01119 22.2615 5.93941 21.3865 5.74674C20.3311 5.38534 19.344 4.84897 18.4665 4.16007C17.7159 3.62793 17.003 3.0443 16.3332 2.41341C16.0492 2.14815 15.6751 2.00061 15.2865 2.00061C14.8979 2.00061 14.5238 2.14815 14.2399 2.41341C13.5878 3.02435 12.9023 3.59857 12.1865 4.13341C11.3036 4.83136 10.3128 5.38079 9.2532 5.76007C8.25659 5.98526 7.23279 6.06608 6.2132 6.00007C5.37834 5.9655 4.54599 5.88538 3.71986 5.76007C3.51799 5.73015 3.31216 5.74118 3.11464 5.79251C2.91712 5.84384 2.73197 5.93442 2.57021 6.05885C2.40845 6.18328 2.2734 6.33901 2.17313 6.51675C2.07285 6.6945 2.00939 6.89061 1.98653 7.09341C1.91986 7.73341 1.74653 9.40007 1.66653 11.2534C1.55442 13.1051 1.67085 14.9635 2.0132 16.7867C2.97859 19.8074 4.75413 22.5053 7.14653 24.5867C9.04811 26.3804 11.1101 27.9961 13.3065 29.4134C13.8952 29.8176 14.5925 30.0339 15.3065 30.0339C16.0206 30.0339 16.7179 29.8176 17.3065 29.4134C19.3865 27.9591 21.3321 26.3215 23.1199 24.5201C25.3722 22.4234 27.0402 19.7766 27.9599 16.8401"
                    stroke="#1A202C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.6667 14.6667L17.4801 18.48C17.5038 18.5059 17.5327 18.5265 17.5648 18.5406C17.5969 18.5548 17.6316 18.5621 17.6667 18.5621C17.7019 18.5621 17.7366 18.5548 17.7687 18.5406C17.8008 18.5265 17.8297 18.5059 17.8534 18.48L28.3334 8"
                    stroke="#3563E9"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-gray-700 font-medium sm:non-italic italic">
                  All your data are safe
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">
                  We are using the most advanced security to provide you the
                  best experience ever.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[25%] h-fit bg-white p-6 rounded-lg ">
          <h2 className="text-lg font-semibold text-[#1e2d40]">
            Rental Summary
          </h2>
          <p className="text-sm text-[#90A3BF] mb-4">
            Prices may change depending on the length of the rental and the
            price of your rental car.
          </p>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-24 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
              <Image
                src="/images/view-1.png"
                alt="Nissan GT"
                width={150}
                height={150}
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[#1e2d40]">
                Nissan GT – R
              </h3>
              <div className="flex items-center gap-1 text-amber-400">
              <Star/>
              <Star/>
              <Star/>
              <Star/>
              <Star/>
              </div>
              <p className="text-xs text-[#90A3BF]">440+ Reviewer</p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-[#90A3BF]">Subtotal</span>
              <span className="font-semibold text-[#1e2d40]">$80.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[#90A3BF]">Tax</span>
              <span className="font-semibold text-[#1e2d40]">$0</span>
            </div>
          </div>

          <div className="flex items-center bg-[#F6F7F9] border border-[#e5e7eb] px-1 rounded-md">
            <input
              type="text"
              placeholder="Apply promo code"
              className="rounded-lg p-3 text-sm flex-grow bg-transparent w-full"
            />
            <button className="bg-transparent text-black font-bold text-sm p-3 border-l-2 ">
              Apply
            </button>
          </div>

          <div className="border-t mt-6 pt-4">
            <h3 className="flex justify-between font-semibold text-lg">
              Total Rental Price <span>$80.00</span>
            </h3>
            <p className="text-xs text-[#90A3BF]">
              Overall price and includes rental discount
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default page;