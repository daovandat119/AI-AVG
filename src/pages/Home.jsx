import React from "react";
import Nav from "@/components/header/Nav.jsx";
import { useState } from "react";
import {
  Lock,
  Image,
  ChevronDown,
  SlidersHorizontal,
  Palette,
} from "lucide-react";

export default function Home() {
  const [visibility, setVisibility] = useState("public");
  const [value, setValue] = useState(6);
  const [isNumberOfImages, setIsNumberOfImages] = useState(2);
  const [isRatios, setIsRatios] = useState(1);
  const [isPrompt, setIsPrompt] = useState(true);

  const aspectRatios = [
    {
      label: "2:1",
      value: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white"></rect>
          <rect
            x="0.35"
            y="0.35"
            width="9.3"
            height="19.3"
            rx="1.65"
            transform="matrix(4.37114e-08 1 1 -4.37114e-08 2 7)"
            fill="white"
            stroke="currentColor"
            stroke-width="0.7"
          ></rect>
          <path
            d="M16 10L18 10C18.5523 10 19 10.4477 19 11L19 13"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
          <path
            d="M8 14L6 14C5.44772 14 5 13.5523 5 13L5 11"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
        </svg>
      ),
      width: 2048, // 2 / 1 * 1024 = 2048
      height: 1024,
    },
    {
      label: "16:9",
      value: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white"></rect>
          <rect
            x="2.35"
            y="6.85"
            width="19.3"
            height="10.3"
            rx="1.65"
            fill="white"
            stroke="currentColor"
            stroke-width="0.7"
          ></rect>
          <path
            d="M5 11.5L5 13.5C5 14.0523 5.44772 14.5 6 14.5L8 14.5"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
          <path
            d="M19 12.5L19 10.5C19 9.94772 18.5523 9.5 18 9.5L16 9.5"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
        </svg>
      ),
      width: 1820, // 16 / 9 * 1024 ≈ 1820.44, làm tròn thành 1820
      height: 1024,
    },
    {
      label: "3:2",
      value: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white"></rect>
          <rect
            x="0.35"
            y="0.35"
            width="11.3"
            height="17.3"
            rx="1.65"
            transform="matrix(4.37114e-08 1 1 -4.37114e-08 3 6)"
            fill="white"
            stroke="currentColor"
            stroke-width="0.7"
          ></rect>
          <path
            d="M15 9L17 9C17.5523 9 18 9.44772 18 10L18 12"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
          <path
            d="M9 15L7 15C6.44772 15 6 14.5523 6 14L6 12"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
        </svg>
      ),
      width: 1536, // 3 / 2 * 1024 = 1536
      height: 1024,
    },
    {
      label: "14:10",
      value: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white"></rect>
          <rect
            x="3.35"
            y="5.85"
            width="17.3"
            height="12.3"
            rx="1.65"
            fill="white"
            stroke="currentColor"
            stroke-width="0.7"
          ></rect>
          <path
            d="M6 12.5L6 14.5C6 15.0523 6.44772 15.5 7 15.5L9 15.5"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
          <path
            d="M18 11.5L18 9.5C18 8.94772 17.5523 8.5 17 8.5L15 8.5"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
        </svg>
      ),
      width: 1434, // 14 / 10 * 1024 = 1433.6, làm tròn thành 1434
      height: 1024,
    },
    {
      label: "4:3",
      value: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white"></rect>
          <rect
            x="0.35"
            y="0.35"
            width="12.3"
            height="17.3"
            rx="1.65"
            transform="matrix(4.37114e-08 1 1 -4.37114e-08 3 5.5)"
            fill="white"
            stroke="currentColor"
            stroke-width="0.7"
          ></rect>
          <path
            d="M15 8.5L17 8.5C17.5523 8.5 18 8.94772 18 9.5L18 11.5"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
          <path
            d="M9 15.5L7 15.5C6.44772 15.5 6 15.0523 6 14.5L6 12.5"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
        </svg>
      ),
      width: 1365, // 4 / 3 * 1024 ≈ 1365.33, làm tròn thành 1365
      height: 1024,
    },
    {
      label: "5:4",
      value: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white"></rect>
          <rect
            x="0.35"
            y="0.35"
            width="13.3"
            height="17.3"
            rx="1.65"
            transform="matrix(4.37114e-08 1 1 -4.37114e-08 3 5)"
            fill="white"
            stroke="currentColor"
            stroke-width="0.7"
          ></rect>
          <path
            d="M15 8L17 8C17.5523 8 18 8.44772 18 9L18 11"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
          <path
            d="M9 16L7 16C6.44772 16 6 15.5523 6 15L6 13"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
        </svg>
      ),
      width: 1280, // 5 / 4 * 1024 = 1280
      height: 1024,
    },
    {
      label: "1:1",
      value: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white"></rect>
          <rect
            x="3.35"
            y="3.35"
            width="17.3"
            height="17.3"
            rx="1.65"
            fill="white"
            stroke="currentColor"
            stroke-width="0.7"
          ></rect>
          <path
            d="M6 15V17C6 17.5523 6.44772 18 7 18H9"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
          <path
            d="M18 9V7C18 6.44772 17.5523 6 17 6H15"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
        </svg>
      ),
      width: 1024, // 1 / 1 * 1024 = 1024
      height: 1024,
    },
    {
      label: "4:5",
      value: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white"></rect>
          <rect
            x="5.35"
            y="3.35"
            width="13.3"
            height="17.3"
            rx="1.65"
            fill="white"
            stroke="currentColor"
            stroke-width="0.7"
          ></rect>
          <path
            d="M8 15V17C8 17.5523 8.44772 18 9 18H11"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
          <path
            d="M16 9V7C16 6.44772 15.5523 6 15 6H13"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
        </svg>
      ),
      width: 819, // 4 / 5 * 1024 ≈ 819.2, làm tròn thành 819
      height: 1024,
    },
    {
      label: "3:4",
      value: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white"></rect>
          <rect
            x="5.85"
            y="3.35"
            width="12.3"
            height="17.3"
            rx="1.65"
            fill="white"
            stroke="currentColor"
            stroke-width="0.7"
          ></rect>
          <path
            d="M8.5 15V17C8.5 17.5523 8.94772 18 9.5 18H11.5"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
          <path
            d="M15.5 9V7C15.5 6.44772 15.0523 6 14.5 6H12.5"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
        </svg>
      ),
      width: 768, // 3 / 4 * 1024 = 768
      height: 1024,
    },
    {
      label: "10:14",
      value: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white"></rect>
          <rect
            x="0.35"
            y="0.35"
            width="17.3"
            height="12.3"
            rx="1.65"
            transform="matrix(4.37114e-08 1 1 -4.37114e-08 5.5 3)"
            fill="white"
            stroke="currentColor"
            stroke-width="0.7"
          ></rect>
          <path
            d="M12.5 6L14.5 6C15.0523 6 15.5 6.44772 15.5 7L15.5 9"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
          <path
            d="M11.5 18L9.5 18C8.94772 18 8.5 17.5523 8.5 17L8.5 15"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
        </svg>
      ),
      width: 731, // 10 / 14 * 1024 ≈ 731.43, làm tròn thành 731
      height: 1024,
    },
    {
      label: "2:3",
      value: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white"></rect>
          <rect
            x="6.35"
            y="3.35"
            width="11.3"
            height="17.3"
            rx="1.65"
            fill="white"
            stroke="currentColor"
            stroke-width="0.7"
          ></rect>
          <path
            d="M9 15V17C9 17.5523 9.44772 18 10 18H12"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
          <path
            d="M15 9V7C15 6.44772 14.5523 6 14 6H12"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
        </svg>
      ),
      width: 683, // 2 / 3 * 1024 ≈ 682.67, làm tròn thành 683
      height: 1024,
    },
    {
      label: "6:10",
      value: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="24"
            height="24"
            transform="matrix(0 -1 1 0 0 24)"
            fill="white"
          ></rect>
          <rect
            x="0.35"
            y="-0.35"
            width="11.3"
            height="19.3"
            rx="1.65"
            transform="matrix(1 -4.37114e-08 -4.37114e-08 -1 6 21.3)"
            fill="white"
            stroke="currentColor"
            stroke-width="0.7"
          ></rect>
          <path
            d="M15 8L15 6C15 5.44772 14.5523 5 14 5L12 5"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
          <path
            d="M9 16L9 18C9 18.5523 9.44772 19 10 19L12 19"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
        </svg>
      ),
      width: 614, // 6 / 10 * 1024 = 614.4, làm tròn thành 614
      height: 1024,
    },
    {
      label: "9:16",
      value: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white"></rect>
          <rect
            x="0.35"
            y="0.35"
            width="19.3"
            height="10.3"
            rx="1.65"
            transform="matrix(4.37114e-08 1 1 -4.37114e-08 6.5 2)"
            fill="white"
            stroke="currentColor"
            stroke-width="0.7"
          ></rect>
          <path
            d="M12.5 19L10.5 19C9.94772 19 9.5 18.5523 9.5 18L9.5 16"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
          <path
            d="M11.5 5L13.5 5C14.0523 5 14.5 5.44772 14.5 6L14.5 8"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
        </svg>
      ),
      width: 576, // 9 / 16 * 1024 = 576
      height: 1024,
    },
    {
      label: "1:2",
      value: (
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="white"></rect>
          <rect
            x="7.35"
            y="2.35"
            width="9.3"
            height="19.3"
            rx="1.65"
            fill="white"
            stroke="currentColor"
            stroke-width="0.7"
          ></rect>
          <path
            d="M10 16V18C10 18.5523 10.4477 19 11 19H13"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
          <path
            d="M14 8V6C14 5.44772 13.5523 5 13 5H11"
            stroke="currentColor"
            stroke-width="0.7"
            stroke-linecap="round"
          ></path>
        </svg>
      ),
      width: 512, // 1 / 2 * 1024 = 512
      height: 1024,
    },
  ];

  const images = [
    "/public/cats.png",
    "https://assets.grok.com/users/c68520d9-65a8-4770-90ab-456bd3c79d8a/generated/F4CJVJ3SgTA3OlhD/image.jpg",
  ];

  return (
    <div className="w-full max-w-[1500px] mx-auto flex justify-between items-start p-4 text-white gap-5">
      <Nav />
      <div className="flex w-[80%] h-[600px] p-5 bg-[#1e243a] rounded-md gap-5">
        <div className="w-1/3 bg-[#1e243a] text-xs font-sans p-3 rounded-md flex flex-col gap-5">
          <div className="flex gap-2 items-center px-1">
            <div className="inline-flex gap-2 items-center">
              <Image className="w-5 h-5 text-teal-500" size={16} />
              <span className="text-teal-500  font-semibold tracking-[2px]">
                IMAGE
              </span>
            </div>
            <div
              className="inline-flex gap-2 items-center border border-white text-gray-500 bg-gray-50 rounded-sm px-1
  transition-all duration-300 ease-out hover:border-gray-300  hover:opacity-80"
            >
              W
              <input
                type="text"
                value={aspectRatios[isRatios].width || 0}
                className="w-8 rounded focus:outline-none text-black"
              />
            </div>
            <div
              className="inline-flex gap-2 items-center border border-white text-gray-500 bg-gray-50 rounded-sm px-1
  transition-all duration-300 ease-out hover:border-gray-300  hover:opacity-80"
            >
              H
              <input
                type="text"
                value={aspectRatios[isRatios].height || 0}
                className="w-8 rounded focus:outline-none text-black"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div
              onClick={() => setIsPrompt(!isPrompt)}
              className="flex items-center gap-3 border border-gray-200 p-1 rounded-md bg-gray-50 text-xs font-semibold text-black cursor-pointer"
            >
              <img
                src="https://assets.grok.com/users/c68520d9-65a8-4770-90ab-456bd3c79d8a/generated/F4CJVJ3SgTA3OlhD/image.jpg"
                alt="Red Panda"
                className="w-10 h-10 rounded"
              />
              <span className="w-14">Recraft V3 Raw</span>
              <span className="w-4">
                <ChevronDown size={18} className="-rotate-90" />
              </span>
              {isPrompt && (
                <>
                  <div className="fixed inset-0 bg-black opacity-80 z-10" />
                  <div className="fixed top-3 left-10 z-20">
                    <div className=" bg-[#1e243a] rounded-md text-white text-2xl cursor-pointer px-8 pt-3 pb-4">
                      esc
                    </div>
                  </div>
                  <div className="fixed top-20 left-10 right-10 bottom-5 z-20 flex gap-5">
                    <div className="w-[20%] bg-[#1e243a] rounded-md p-4 text-white">
                      Left side
                    </div>
                    <div className="w-[80%] flex flex-col gap-5 text-white overflow-auto scrollbar-hide">
                      <div className="flex items-center gap-3 p-4 bg-[#1e243a] rounded-md ">
                        {/* Dropdown 1 */}
                        <div className="w-2/10 bg-[#2f364d] rounded-md cursor-pointer">
                          <p className="relative flex justify-between items-center gap-2 text-black text-lg">
                            <input
                              type="text"
                              placeholder="Prompt All"
                              className="focus:outline-none placeholder:text-white  px-4 py-3"
                              disabled
                            />
                            <ChevronDown className="absolute right-3 text-white" />
                          </p>
                        </div>

                        {/* Search input */}
                        <div className="w-8/10 bg-[#2f364d] rounded-md">
                          <p className="relative flex justify-between items-center gap-2 text-black text-lg">
                            <input
                              type="text"
                              placeholder="Search styles, e.g. sketch, pop, color..."
                              className="w-full focus:outline-none placeholder:text-black  px-4 py-3"
                            />
                          </p>
                        </div>  
                      </div>
                      <div className="bg-[#1e243a] px-5 rounded-md pb-5">
                        <div>
                          <h1 className="text-lg font-semibold mt-4 mb-2">
                            Photorealism
                          </h1>
                          <div className="grid grid-cols-6 mt-4 gap-2">
                            <div className="p-3 rounded-md bg-[#2f364d]">
                              <img
                                src="https://img.recraft.ai/aOruMO9LZscq8HvJUYt-ataB0-9Uh_Lam0chUZv_Ups/rs:fit:512:512:0/q:95/g:no/plain/abs://prod/images/35b63e93-494f-4a92-b1ed-18f958d85cc2@jpg"
                                alt=""
                                className="rounded-md"
                              />
                              <p className="px-3 py-1">Recraft V3 Raw</p>
                            </div>
                            <div className="p-3 rounded-md bg-[#2f364d]">
                              <img
                                src="https://img.recraft.ai/aOruMO9LZscq8HvJUYt-ataB0-9Uh_Lam0chUZv_Ups/rs:fit:512:512:0/q:95/g:no/plain/abs://prod/images/35b63e93-494f-4a92-b1ed-18f958d85cc2@jpg"
                                alt=""
                                className="rounded-md"
                              />
                              <p className="px-3 py-1">Recraft V3 Raw</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <button className="p-3 border border-gray-200 rounded-md bg-gray-50">
              <SlidersHorizontal
                size={25}
                className="text-gray-700 -rotate-90"
              />
            </button>
            <button className="p-3 border border-gray-200 rounded-md bg-gray-50">
              <Palette size={25} className="text-gray-700" />
            </button>
          </div>
          <textarea
            placeholder="cute red panda"
            class="w-full h-40 px-3 text-base font-semibold placeholder-gray-400 resize-none text-white focus:outline-none"
          ></textarea>
          <div className="flex items-center">
            <div className="w-1/2 flex items-center gap-2">
              <div className="flex items-center border border-gray-300 rounded text-black">
                {aspectRatios[isRatios].value}
              </div>
              <span className="text-white">{aspectRatios[isRatios].label}</span>
            </div>
            <input
              type="range"
              min="0"
              max={aspectRatios.length - 1}
              value={isRatios || 0}
              onChange={(e) => setIsRatios(parseInt(e.target.value, 10))}
              className="w-1/2 h-[1px] bg-gray-200 rounded-lg appearance-none cursor-pointer custom-range"
            />
          </div>
          <div class="flex items-center">
            <div className="w-1/2 flex items-center gap-2">
              <div class="flex items-center border border-gray-300 rounded">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="#FFFFFF"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.0127 7.57856L13.177 3.93744C12.8901 2.68752 11.1099 2.68752 10.823 3.93744L9.9873 7.57856C9.7123 8.77671 8.77671 9.7123 7.57856 9.9873L3.93744 10.823C2.68752 11.1099 2.68752 12.8901 3.93744 13.177L7.57856 14.0127C8.77671 14.2877 9.7123 15.2233 9.9873 16.4214L10.823 20.0626C11.1099 21.3125 12.8901 21.3125 13.177 20.0626L14.0127 16.4214C14.2877 15.2233 15.2233 14.2877 16.4214 14.0127L20.0626 13.177C21.3125 12.8901 21.3125 11.1099 20.0626 10.823L16.4214 9.9873C15.2233 9.7123 14.2877 8.77671 14.0127 7.57856ZM14.1516 3.71374C13.6272 1.42876 10.3728 1.42875 9.84836 3.71373L9.01264 7.35486C8.82338 8.17947 8.17947 8.82338 7.35486 9.01264L3.71374 9.84836C1.42876 10.3728 1.42875 13.6272 3.71373 14.1516L7.35486 14.9874C8.17947 15.1766 8.82338 15.8205 9.01264 16.6451L9.84836 20.2863C10.3728 22.5712 13.6272 22.5712 14.1516 20.2863L14.9874 16.6451C15.1766 15.8205 15.8205 15.1766 16.6451 14.9874L20.2863 14.1516C22.5712 13.6272 22.5712 10.3728 20.2863 9.84836L16.6451 9.01264C15.8205 8.82338 15.1766 8.17947 14.9874 7.35486L14.1516 3.71374Z"
                    fill="#FFFFFF"
                  ></path>
                </svg>
              </div>
              <span className="w-20">Specify Artistic level</span>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              value={value || 0}
              onChange={(e) => setValue(e.target.value)}
              className="w-1/2 h-[1px] bg-gray-200 rounded-lg appearance-none cursor-pointer custom-range"
            />
          </div>
          <div class="flex items-center">
            <div className="w-1/2 flex items-center gap-2">
              <div class="flex items-center rounded w-10">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="16"
                    height="16"
                    rx="5.5"
                    fill="#E8E8E8"
                    stroke="#E8E8E8"
                  ></rect>
                  <rect
                    x="0.5"
                    y="18.5"
                    width="16"
                    height="16"
                    rx="5.5"
                    fill="#FAFAFA"
                    stroke="#E8E8E8"
                  ></rect>
                  <rect
                    x="18.5"
                    y="0.5"
                    width="16"
                    height="16"
                    rx="5.5"
                    fill="#E8E8E8"
                    stroke="#E8E8E8"
                  ></rect>
                  <rect
                    x="18.5"
                    y="18.5"
                    width="16"
                    height="16"
                    rx="5.5"
                    fill="#FAFAFA"
                    stroke="#E8E8E8"
                  ></rect>
                </svg>
              </div>
              <span>{isNumberOfImages} images</span>
            </div>
            <input
              type="range"
              min="1"
              max="6"
              value={isNumberOfImages || 0}
              onChange={(e) => setIsNumberOfImages(e.target.value)}
              className="w-1/2 h-[1px] bg-gray-200 rounded-lg appearance-none cursor-pointer custom-range"
            />
          </div>
          <div className="w-full flex justify-between items-center gap-7">
            <span className="flex items-center gap-2 w-25">
              Save to Personal Vault
              <Lock size={18} />
            </span>
            <div className="flex p-1 bg-gray-200 rounded-sm text-black font-semibold gap-1">
              <button
                onClick={() => setVisibility("public")}
                className={`px-5 py-1 rounded  ${
                  visibility === "public"
                    ? "bg-white text-black"
                    : "text-gray-500 hover:bg-white hover:text-black"
                }`}
              >
                Saved
              </button>
              <button
                onClick={() => setVisibility("private")}
                className={`px-5 py-1 rounded  ${
                  visibility === "private"
                    ? "bg-white text-black"
                    : "text-gray-500"
                }`}
              >
                Not saved
              </button>
            </div>
          </div>
          <button className="w-full py-2 rounded-md bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold text-[18px] text-center shadow-md hover:scale-[1.02] transition-all duration-200">
            ✨ Recraft
          </button>
        </div>
        <div className="bg-[#2f364d] w-2/3 rounded-md p-4 flex flex-col gap-5">
          <div className="h-8/10 flex justify-center mb-4">
            <img
              src="/public/cats.png"
              alt="Red Panda"
              className="rounded-md object-cover"
            />
          </div>
          <div className="flex gap-4 w-full h-2/10">
            <div className="flex gap-4 w-full">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex-1">
                    <div className="w-full aspect-square  rounded-md flex items-center justify-center overflow-hidden">
                      {images[i] ? (
                        <img
                          src={images[i]}
                          alt={`Image ${i}`}
                          className=" object-contain rounded-md"
                        />
                      ) : (
                        <span className="text-gray-500 text-xs">Empty</span>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
