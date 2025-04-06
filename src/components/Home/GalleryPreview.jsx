import React from "react";

export default function GalleryPreview({ images }) {

    return (
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
    );
    }