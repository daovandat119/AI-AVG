import React from "react";
import { useState, useEffect } from "react";
import Prompt from "@/components/Home/Prompt";
import { useSelector, useDispatch } from "react-redux";
import AspectRatioIconProps from "@/components/Home/AspectRatioIconProps";
import {
  setIdRations,
  setNumberImages,
  setArtisticLevel,
  generateImageFromPrompt,
} from "@/store/imagePromptSlice";
import {
  Lock,
  Image,
  ChevronDown,
  SlidersHorizontal,
  Palette,
} from "lucide-react";
import { setPromptTexts } from "../../store/imagePromptSlice";

export default function ImageGenerationPanel({ idPresets, promptPresets }) {
  const [visibility, setVisibility] = useState("public");
  const [isPrompt, setIsPrompt] = useState(false);
  const [isSlidersHorizontal, setIsSlidersHorizontal] = useState(false);

  const dispatch = useDispatch();

  const aspectRatios = useSelector((state) => state.imagePrompt.aspectRatios);
  const idRations = useSelector((state) => state.imagePrompt.idRations);
  const numberImages = useSelector((state) => state.imagePrompt.numberImages);
  const artisticLevel = useSelector((state) => state.imagePrompt.artisticLevel);
  const promptTexts = useSelector((state) => state.imagePrompt.promptTexts);

  const matchedPreset = promptPresets
    .flatMap((p) => p.presets)
    .find((preset) => preset.id === idPresets);

  const ratios = aspectRatios.find((ratio) => ratio.id === Number(idRations));
  const [isWith, setIsWith] = useState(ratios.width);
  const [isHeight, setIsHeight] = useState(ratios.height);

  useEffect(() => {
    setIsWith(ratios.width);
    setIsHeight(ratios.height);
  }, [ratios.width, ratios.height]);

  const closestRatio = aspectRatios.reduce((closest, ratio) => {
    const currentDiff = Math.hypot(
      ratio.width - isWith,
      ratio.height - isHeight
    );
    const closestDiff = Math.hypot(
      closest.width - isWith,
      closest.height - isHeight
    );

    return currentDiff < closestDiff ? ratio : closest;
  });

  useEffect(() => {
    dispatch(setIdRations(closestRatio.id));
  }, [closestRatio]);

  return (
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
            value={isWith || null}
            className="w-8 rounded focus:outline-none text-black"
            onChange={(e) => setIsWith(e.target.value)}
          />
        </div>
        <div
          className="inline-flex gap-2 items-center border border-white text-gray-500 bg-gray-50 rounded-sm px-1
  transition-all duration-300 ease-out hover:border-gray-300  hover:opacity-80"
        >
          H
          <input
            type="text"
            value={isHeight || null}
            className="w-8 rounded focus:outline-none text-black"
            onChange={(e) => setIsHeight(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div
          onClick={() => setIsPrompt(!isPrompt)}
          className="flex items-center gap-3 border border-gray-200 p-1 rounded-md bg-gray-50 text-xs font-semibold text-black cursor-pointer"
        >
          <img
            src={matchedPreset?.image}
            className="w-10 h-10 rounded"
            alt={matchedPreset?.name}
          />
          <span className="w-14">{matchedPreset?.name}</span>
          <span className="w-4">
            <ChevronDown
              onClick={() => setIsPrompt(!isPrompt)}
              size={18}
              className="-rotate-90"
            />
          </span>
        </div>
        {isPrompt && (
          <Prompt
            setIsPrompt={setIsPrompt}
            idPresets={idPresets}
            promptPresets={promptPresets}
          />
        )}
        <div className="relative flex items-center gap-2">
          <button
            onClick={() => setIsSlidersHorizontal(!isSlidersHorizontal)}
            className=" p-3 border border-gray-200 rounded-md bg-gray-50"
          >
            <SlidersHorizontal size={25} className="text-gray-700 -rotate-90" />
          </button>
          <button className="p-3 border border-gray-200 rounded-md bg-gray-50">
            <Palette size={25} className="text-gray-700" />
          </button>
          {isSlidersHorizontal && (
            <div>
              <div className="absolute top-0 left-30 w-50 bg-white text-black rounded-md px-5 py-2">
                <h1>Text</h1>
                <p>Avoid Text in Image</p>
              </div>
              <svg
                viewBox="0 0 200 100"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-5 h-10 top-2 -right-2"
              >
                <path
                  d="M0,0 
       Q100,30 200,0 
       V100 
       Q100,70 0,100 
       Z"
                  fill="#f3f4f6"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
      <textarea
        placeholder="cute red panda"
        value={promptTexts}
        className="w-full h-40 px-3 text-base font-semibold placeholder-gray-400 resize-none text-white focus:outline-none"
        onChange={(e) => dispatch(setPromptTexts(e.target.value))}
      ></textarea>
      <div className="flex items-center">
        <div className="w-1/2 flex items-center gap-2">
          <div className="flex items-center border border-gray-300 rounded text-black">
            <AspectRatioIconProps id={ratios.id} />
          </div>
          <span className="text-white">{ratios.label}</span>
        </div>
        <input
          type="range"
          min="1"
          max={aspectRatios.length}
          value={ratios.id || 0}
          onChange={(e) => dispatch(setIdRations(e.target.value))}
          className="w-1/2 h-[1px] bg-gray-200 rounded-lg appearance-none cursor-pointer custom-range"
        />
      </div>
      <div className="flex items-center">
        <div className="w-1/2 flex items-center gap-2">
          <div className="flex items-center border border-gray-300 rounded">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
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
          value={artisticLevel || 0}
          onChange={(e) => dispatch(setArtisticLevel(e.target.value))}
          className="w-1/2 h-[1px] bg-gray-200 rounded-lg appearance-none cursor-pointer custom-range"
        />
      </div>
      <div className="flex items-center">
        <div className="w-1/2 flex items-center gap-2">
          <div className="flex items-center rounded w-10">
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
          <span>{numberImages} images</span>
        </div>
        <input
          type="range"
          min="1"
          max="6"
          value={numberImages || 0}
          onChange={(e) => dispatch(setNumberImages(e.target.value))}
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
              visibility === "private" ? "bg-white text-black" : "text-gray-500"
            }`}
          >
            Not saved
          </button>
        </div>
      </div>
      <button
        onClick={() => dispatch(generateImageFromPrompt({}))}
        className="w-full py-2 rounded-md bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold text-[18px] text-center shadow-md hover:scale-[1.02] transition-all duration-200"
      >
        ✨ Recraft
      </button>
    </div>
  );
}
