import Button from "@/components/Button";
import Filters from "@/components/Filters";
import Searchfield from "@/components/Searchfield";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex h-96 rounded-lg justify-center round bg-[#96acc0] w-[750px]">
      <div className="flex flex-col w-[100%] gap-20">
        <div className="font-bold text-4xl text-white pt-5 text-center">
          <h3>Scrape away</h3>
        </div>
        <div className="flex flex-col relative w-[100%] p-2 gap-4">
          <Searchfield />
          <Button />
        </div>
        <div className="flex justify-center w-[100%]">
          <Filters />
        </div>
      </div>
    </div>
  );
}
