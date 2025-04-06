import React, { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import UseClickOutside from "@/hooks/UseClickOutside";
import { useSelector, useDispatch } from "react-redux";
import { setIdPresets, setPrompt } from "@/store/imagePromptSlice";

export default function Prompt({ setIsPrompt, idPresets, promptPresets }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [submittedSearchTerm, setSubmittedSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const dropdownListRef = useRef(null);

  UseClickOutside(dropdownRef, () => setIsPrompt(false));
  UseClickOutside(dropdownListRef, () => setIsDropdownOpen(false));

  const selectedPrompt = useSelector(
    (state) => state.imagePrompt.selectedPrompt
  );

  const dispatch = useDispatch();

  const matchedPresets = promptPresets.flatMap((p) => p.presets);

  const filteredPresets = submittedSearchTerm
    ? matchedPresets.filter((preset) =>
        preset.name.toLowerCase().includes(submittedSearchTerm.toLowerCase())
      )
    : [];

  return (
    <>
      <span className="fixed inset-0 bg-black opacity-80 z-10" />
      <div ref={dropdownRef} className="z-100">
        <div className="fixed top-3 left-10 z-20">
          <div
            onClick={() => setIsPrompt(false)}
            className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-md text-white text-2xl cursor-pointer px-8 pt-3 pb-4"
          >
            esc
          </div>
        </div>

        <div className="fixed top-20 left-10 right-10 bottom-5 z-20 flex gap-5">
          <div className="w-[20%] bg-[#1e243a] rounded-md p-4 text-white">
            <button className="w-full px-5 py-2 text-xl bg-[#2f364d] rounded-md">
              Prompt
            </button>
          </div>
          <div className="w-[80%] flex flex-col gap-5 text-white overflow-auto scrollbar-hide">
            <div className="flex items-center gap-3 p-4 bg-[#1e243a] rounded-md">
              <div
                className="relative w-2/10 bg-[#2f364d] rounded-md cursor-pointer"
                ref={dropdownListRef}
              >
                <div
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex justify-between items-center gap-2 text-white text-lg px-4 py-3"
                >
                  <span>{selectedPrompt}</span>
                  <ChevronDown />
                </div>
                {isDropdownOpen && (
                  <div className="absolute top-full mt-1 bg-[#1e243a] border border-[#2f364d] rounded-md w-full z-30">
                    <ul className="space-y-2 p-2 text-lg text-center">
                      <li
                        onClick={() => {
                          dispatch(setPrompt("Prompt All"));
                          setIsDropdownOpen(false);
                        }}
                        className="px-5 py-3 bg-[#2f364d] rounded-md"
                      >
                        Prompt All
                      </li>
                      {promptPresets.map((promptPreset, index) => (
                        <li
                          key={index}
                          onClick={() => {
                            dispatch(setPrompt(promptPreset.category));
                            setIsDropdownOpen(false);
                          }}
                          className="px-5 py-3 bg-[#2f364d] rounded-md"
                        >
                          {promptPreset.category}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="w-8/10 bg-[#2f364d] rounded-md">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setSubmittedSearchTerm(searchTerm);
                    }
                  }}
                  placeholder="Search styles, e.g. sketch, pop, color..."
                  className="w-full focus:outline-none placeholder:text-gray-300 bg-transparent px-4 py-3 text-lg"
                />
              </div>
            </div>
            <div className="bg-[#1e243a] px-5 rounded-md pb-5">
              {submittedSearchTerm === "" ? (
                (selectedPrompt === "Prompt All"
                  ? promptPresets
                  : promptPresets.filter(
                      (promptPreset) => promptPreset.category === selectedPrompt
                    )
                ).map((promptPreset, index) => (
                  <div key={index}>
                    <h1 className="text-lg font-semibold mt-4 mb-2">
                      {promptPreset.category}
                    </h1>
                    <div className="grid grid-cols-6 mt-4 gap-2">
                      {promptPreset.presets.map((preset) => (
                        <div
                          key={preset.id}
                          onClick={() => dispatch(setIdPresets(preset.id))}
                          className={`p-3 rounded-md bg-[#2f364d] border-3 cursor-pointer ${
                            preset.id === idPresets
                              ? "border-gray-500"
                              : "border-transparent"
                          }`}
                        >
                          <img
                            src={preset.image}
                            alt={preset.name}
                            className="rounded-md"
                          />
                          <p className="px-3 py-1">{preset.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="grid grid-cols-6 mt-4 gap-2">
                  {filteredPresets.length > 0 ? (
                    filteredPresets.map((preset) => (
                      <div
                        key={preset.id}
                        onClick={() => dispatch(setIdPresets(preset.id))}
                        className={`p-3 rounded-md bg-[#2f364d] border-3 cursor-pointer ${
                          preset.id === idPresets
                            ? "border-gray-500"
                            : "border-transparent"
                        }`}
                      >
                        <img
                          src={preset.image}
                          alt={preset.name}
                          className="rounded-md"
                        />
                        <p className="px-3 py-1">{preset.name}</p>
                      </div>
                    ))
                  ) : (
                    <div className="w-200 text-lg inline-flex">
                      No results found for "{submittedSearchTerm}"
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
