import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

import { Permanent_Marker } from "next/font/google";
import { CalendarSearch, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
const font = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

const tags = Array.from({ length: 47 }).map(
  (_, i, a) => `${i + 4}. [nama siswa]`,
);

function is_fizz_buzz(n: number) {
  return n % 3 == 0 && n % 5 == 0;
}
function is_fizz(n: number) {
  return n % 3 == 0;
}
function is_buzz(n: number) {
  return n % 5 == 0;
}

export default function MobileRankPage() {
  return (
    <div className="relative flex h-full w-full flex-col p-1">
      <div className="mb-2 flex h-44 w-full flex-col items-center overflow-hidden rounded-sm rounded-b-3xl bg-gradient-to-r from-rose-400 to-red-500">
        <div className="mt-auto flex h-4/5 w-full items-end justify-evenly">
          <div
            className={`relative mb-5 h-[120px] w-[120px] before:absolute before:-top-1 before:left-1/2 before:h-[200%] before:w-[60px] before:-translate-x-1/2 before:bg-[#c0c0c0] before:content-['']`}
          >
            <Image
              src="https://safebooru.org//samples/4619/sample_5429d7b3d4bec2e681972180df2e673af1f39c65.jpg?4834439"
              alt="https://i.pximg.net/img-original/img/2024/03/23/12/00/17/117170187_p1.png"
              fill
              className="clip-path-star -rotate-6 object-cover object-center shadow-md"
            />
          </div>

          <div
            className={`relative mb-10 h-[120px] w-[120px] before:absolute before:-top-1 before:left-1/2 before:h-[200%] before:w-[60px] before:-translate-x-1/2 before:bg-[#d4af37] before:content-['']`}
          >
            <Image
              src="https://safebooru.org//images/4619/17289fb65697ec3adda05131d44dfdf150095533.png?4814699"
              alt="https://i.pximg.net/img-original/img/2022/10/31/12/00/22/102382163_p11.png"
              fill
              className="clip-path-star object-cover object-center"
            />
          </div>

          <div
            className={`relative mb-0 h-[120px] w-[120px] before:absolute before:-top-1 before:left-1/2 before:h-[200%] before:w-[60px] before:-translate-x-1/2 before:bg-[#cd7f32] before:content-['']`}
          >
            <Image
              src="https://safebooru.org//images/4619/19969a20075ad17e6fa9084253d1400b43c64855.png?4814181"
              alt="https://i.pximg.net/img-original/img/2022/10/31/12/00/22/102382163_p12.png"
              fill
              className="clip-path-star rotate-6 object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="relative flex items-center">
        <h3
          className="mx-auto mb-2 mt-3 text-center text-xl font-semibold leading-none"
          style={font.style}
        >
          Peringkat Minggu Ini
        </h3>

        <Button
          variant="outline"
          size="sm"
          className="absolute right-0 h-7 gap-1 text-sm"
        >
          <CalendarSearch className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only">Filter</span>
        </Button>
      </div>

      <ScrollArea className="h-1/2 w-full">
        {tags.map((tag, idx) => (
          <div
            key={tag}
            className="mb-1 flex justify-between rounded-lg border border-blue-300 bg-white p-3 text-sm shadow-md"
          >
            <p>{tag}</p>{" "}
            {is_fizz_buzz(idx) ? (
              <ChevronUp className="text-green-500" />
            ) : is_buzz(idx) ? (
              <ChevronDown className="text-red-500" />
            ) : is_fizz(idx) ? (
              <ChevronUp className="text-green-500" />
            ) : (
              <ChevronDown className="text-red-500" />
            )}
          </div>
        ))}
        <div className=""></div>
      </ScrollArea>

      <div className="flex w-full flex-grow rounded-lg rounded-t-none border border-blue-300 bg-white p-2">
        <div>
          <p className="text-xs">
            <span className="text-sm font-semibold">Informasi: </span>
            Peringkat akan diambil dari jumlah sampah dan presentase benar
            pemilihan kategori sampah. Peringkan akan diupdate setiap minggu.
            Selamat memilah!
          </p>
        </div>
      </div>
    </div>
  );
}
