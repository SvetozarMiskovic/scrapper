import React from "react";

export default function Filters({
  filters = ["Filter 1", "Filter 2", "Filter 3", "Filter 4"],
}) {
  let num = 1;
  return (
    <div className="flex gap-4 w-[100%] justify-center h-[100%] px-2">
      {filters &&
        filters?.map((filter) => {
          return (
            <div
              key={num++}
              className="rounded-sm cursor-pointer transition-all hover:bg-slate-700 font-bold hover:text-slate-50 text-slate-700 bg-slate-50 w-[100%] text-center "
            >
              <h3 className="m-0 p-0 text-xl">{filter}</h3>
            </div>
          );
        })}
    </div>
  );
}
