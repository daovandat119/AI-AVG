import React from "react";
import { Atom } from "lucide-react";
export default function Nav() {
  const modelItems = [
    {
      name: "AI Movies 1",
      icon: <Atom />,
    },
    {
      name: "AI Movies 1",
      icon: <Atom />,
    },
    {
      name: "AI Movies 1",
      icon: <Atom />,
    },
    {
      name: "AI Movies 1",
      icon: <Atom />,
    },
    {
      name: "AI Movies 1",
      icon: <Atom />,
    },
    {
      name: "AI Movies 1",
      icon: <Atom />,
    },
    {
      name: "AI Movies 1",
      icon: <Atom />,
    },
    {
      name: "AI Movies 1",
      icon: <Atom />,
    },
    {
      name: "AI Movies 1",
      icon: <Atom />,
    },
    {
      name: "AI Movies 1",
      icon: <Atom />,
    },
    {
      name: "AI Movies 1",
      icon: <Atom />,
    },
    {
      name: "AI Movies 1",
      icon: <Atom />,
    },
    {
      name: "AI Movies 1",
      icon: <Atom />,
    },
    {
      name: "AI Movies 1",
      icon: <Atom />,
    },
    {
      name: "AI Movies 1",
      icon: <Atom />,
    },
    {
      name: "AI Movies 1",
      icon: <Atom />,
    },
    {
      name: "AI Movies 1",
      icon: <Atom />,
    },
    {
      name: "AI Movies 1",
      icon: <Atom />,
    },
  ];

  return (
    <div className="w-[20%] relative bg-[#1e243a] rounded-md">
      <nav
        className={`h-[600px] overflow-y-scroll scrollbar-hide rounded-md flex flex-col gap-5 transition-all duration-300`}
      >
        <h1 className="px-5 pt-5">Models</h1>
          <div className="flex flex-col gap-5">
            {modelItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-5 py-2 rounded-md cursor-pointer"
              >
                {item.icon}
                <span>{item.name}</span>
              </div>
            ))}
          </div>
      </nav>
    </div>
  );
}
