import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Nav from "@/components/header/Nav";
import { useDispatch } from 'react-redux';
import { fetchPromptPresets } from '@/store/imagePromptSlice.jsx';
import GalleryPreview from "@/components/Home/GalleryPreview";
import ImageGenerationPanel from "@/components/Home/ImageGenerationPanel";


export default function Home() {
  const idPresets = useSelector((state) => state.imagePrompt.idPresets);
  const promptPresets = useSelector((state) => state.imagePrompt.promptPresets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPromptPresets());
  }, [dispatch]);

  const images = [
    "cats.png",
  ];

  return (
    <div className="w-full max-w-[1500px] mx-auto flex justify-between items-start p-4 text-white gap-5">
      <Nav />
      <div className="flex w-[80%] h-[600px] p-5 bg-[#1e243a] rounded-md gap-5">
        <ImageGenerationPanel idPresets={idPresets} promptPresets={promptPresets} />
        <GalleryPreview images={images} />
      </div>
    </div>
  );
}
