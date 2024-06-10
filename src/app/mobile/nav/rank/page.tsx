import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

import { Baloo_Bhai_2 } from "next/font/google";
import { CalendarSearch, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const font = Baloo_Bhai_2({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

function is_fizz_buzz(n: number) {
  return n % 3 == 0 && n % 5 == 0;
}
function is_fizz(n: number) {
  return n % 3 == 0;
}
function is_buzz(n: number) {
  return n % 5 == 0;
}

const names = [
  "Jania Sherwood",
  "Tucker Johnson",
  "Stevie Daniel",
  "Jair Gantt",
  "Dan Brady",
  "Bo Stevens",
  "Cortez Aaron",
  "Reina Delgado",
  "Eduardo Hedges",
  "Timmy Trimble",
  "Elaina Hershberger",
  "Dajuan Haggerty",
  "Lillie Albert",
  "Lamont Windham",
  "Holland Dent",
  "Misty Head",
  "Darby Nugent",
  "Ty Timmons",
  "Gabriel Betancourt",
  "Randi Almeida",
  "Erin Sam",
  "Khalid Orellana",
  "Galilea Reinhart",
  "Dara Cramer",
  "Dorothy Hurd",
  "Joslyn Staggs",
  "Chris Robison",
  "Hallie Musser",
  "Demarcus McKinnon",
  "Eleni Kessler",
  "Bennett Laney",
  "Dania Cao",
  "Santiago Way",
  "Amina Tackett",
  "Jarret Oliveira",
  "Olga Coombs",
  "Kristi Boykin",
  "Nash Toney",
  "Kelly Ferreira",
  "Rico Turner",
  "Cloe Taylor",
  "Kenton Grayson",
  "Kory Fogle",
  "Micheal Tyler",
  "Jailene Ferguson",
  "Racheal Villanueva",
  "Justice Chamberlin",
];

const userRank = 3;

export default function MobileRankPage() {
  return (
    <div className="relative flex h-full w-full flex-col p-2 pr-2">
      <div className="mb-2 flex h-44 w-full flex-col items-center overflow-hidden rounded-sm rounded-b-3xl bg-[#E4F493]">
        <div className="flex h-4/5 w-full items-end justify-center gap-2">
          <div
            className={`relative mb-5 h-[80px] w-[80px] before:absolute before:left-1/2 before:top-2 before:h-[200%] before:w-[60px] before:-translate-x-1/2 before:bg-white before:content-['']`}
          >
            <Image
              src="/images/p-1.jpg"
              alt="https://www.freepik.com/free-vector/back-school-background-with-kids_2496999.htm#fromView=search&page=1&position=30&uuid=f9924c2d-db11-4ef2-a5ba-0f4818d9c09f"
              fill
              className="overflow-hidden rounded-full border-[6px] border-[#667326] object-cover object-center"
            />

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[105%]">
              <p className="line-clamp-1 text-xs">Jania Sherwood</p>
            </div>

            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[140%] text-lg font-semibold text-[#8CA700]"
              style={font.style}
            >
              <span>2</span>
            </div>
          </div>
          <div
            className={`relative mb-10 h-[80px] w-[80px] before:absolute before:left-1/2 before:top-2 before:h-[200%] before:w-[60px] before:-translate-x-1/2 before:bg-white before:content-['']`}
          >
            <Image
              src="/images/p-2.jpg"
              alt="https://www.freepik.com/free-vector/back-school-background-with-kids_2496999.htm#fromView=search&page=1&position=30&uuid=f9924c2d-db11-4ef2-a5ba-0f4818d9c09f"
              fill
              className="overflow-hidden rounded-full border-[6px] border-[#667326] object-cover object-center"
            />

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[105%]">
              <p className="line-clamp-1 text-xs">Tucker Johnson</p>
            </div>

            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[140%] text-lg font-semibold text-[#8CA700]"
              style={font.style}
            >
              <span>1</span>
            </div>
          </div>

          <div
            className={`relative mb-0 h-[80px] w-[80px] before:absolute before:left-1/2 before:top-0 before:h-full before:w-[60px] before:-translate-x-1/2 before:translate-y-10 before:bg-white before:content-['']`}
          >
            <Image
              src="/images/p-3.jpg"
              alt="https://www.freepik.com/free-vector/back-school-background-with-kids_2496999.htm#fromView=search&page=1&position=30&uuid=f9924c2d-db11-4ef2-a5ba-0f4818d9c09f"
              fill
              className="overflow-hidden rounded-full border-[6px] border-[#667326] object-cover object-center"
            />

            <div className="absolute bottom-0 left-1/2 w-fit -translate-x-1/2 translate-y-[105%]">
              <p className="line-clamp-1 text-xs">Stevie Daniel</p>
            </div>

            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[140%] text-lg font-semibold text-[#8CA700]"
              style={font.style}
            >
              <span>3</span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex items-center">
        <h3
          className="mx-auto mb-2 mt-3 text-center text-xl font-semibold leading-none"
          style={font.style}
        >
          Leaderboard
        </h3>
        {/* <h3
          className="mx-auto mb-2 mt-3 text-center text-xl font-semibold leading-none"
          style={font.style}
        >
          Peringkat Minggu Ini
        </h3> */}

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
        {names.map((name, idx) => (
          <div
            key={name}
            className={cn(
              "mb-1 flex justify-between rounded-lg border border-blue-300 bg-white p-3 text-sm shadow-md",
              userRank == idx && "bg-blue-100",
            )}
          >
            <p className="font-semibold">
              {idx + 1} {name}
            </p>
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
