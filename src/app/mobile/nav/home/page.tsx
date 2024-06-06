import * as React from "react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { Permanent_Marker } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BookHeart,
  Crown,
  Facebook,
  Instagram,
  School,
  Shapes,
  Sparkles,
  Sword,
  Twitter,
  VenetianMask,
} from "lucide-react";
import Image from "next/image";

const activities = [
  {
    name: "Kulit pisang",
    reward: 10,
  },
  {
    name: "Kertas",
    reward: 3,
  },
  {
    name: "Sedotan",
    reward: -2,
  },
  {
    name: "Daun",
    reward: 1,
  },
  {
    name: "kaleng",
    reward: 10,
  },
];

const news = [
  {
    name: "Sekolah SMA A mendaftar ke program pemilahan sampah",
    reward: 10,
    description: "Mulia memilah dengan benar 10x berturut-turut",
    imgSrc:
      "https://images.unsplash.com/photo-1562077981-4d7eafd44932?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Manfaat memilah sampah",
    reward: 20,
    description: "Memilah  dengan benar 50x berturut-turut",
    imgSrc:
      "https://images.unsplash.com/photo-1562077981-4d7eafd44932?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Program pemilahan sampah akan diperluas",
    reward: 30,
    description: "Memilah jenis organik 20x, anorganik 30x, dan residu 10x",
    imgSrc:
      "https://images.unsplash.com/photo-1562077981-4d7eafd44932?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Penyihir Pemilah",
    reward: 30,
    description: "Memilah jenis organik 20x, anorganik 30x, dan residu 10x",
    imgSrc:
      "https://images.unsplash.com/photo-1562077981-4d7eafd44932?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function MobileHomePage() {
  return (
    <ScrollArea className="h-full w-full p-2 pr-3">
      <div className="relative mb-2 flex h-fit w-full rounded-sm rounded-b-xl bg-gradient-to-r from-teal-200 to-teal-500 p-3">
        <div className="relative h-32 w-32">
          <Image
            alt="qr code"
            src="https://quickchart.io/qr?text=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D5uaHMmcReI0&size=128"
            fill
            className="object-contain"
          />
        </div>

        <div className="ml-auto flex h-auto w-fit flex-col items-end gap-1 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text text-white drop-shadow-sm">
          <p className="mb-auto mt-0 text-left text-base font-semibold leading-none">
            Poin: 100
          </p>
          <h2 className="mt-auto text-left text-xs leading-none">
            Jair Gantt | 12341231419612
          </h2>
        </div>
      </div>

      <div className="mt-4 flex w-full">
        <h2 className="mb-2 mt-0 text-left text-base font-semibold leading-none text-black">
          Berita
        </h2>
      </div>

      <ScrollArea className="w-[370px] whitespace-nowrap">
        <div className="mb-3 flex w-max gap-2 overflow-auto">
          {news.map((acv, idx) => (
            <div
              key={acv.name}
              className={cn(
                "mb-px flex flex-col items-center gap-2 rounded-sm border border-gray-300 bg-white p-2 text-sm",
              )}
            >
              <div className="relative h-24 w-full">
                <Image
                  alt="news"
                  src={acv.imgSrc}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="flex flex-wrap justify-between">
                <p className="line-clamp-2 max-w-32 whitespace-break-spaces text-left text-sm leading-none">
                  {acv.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="relative mt-2 flex h-80 flex-1 flex-col items-center bg-muted">
        <div className="absolute h-40 w-24 translate-y-12 bg-red-400">
          {/* badan */}
        </div>
        <div className="absolute h-12 w-12 bg-red-300">kepala</div>
        <div className="absolute h-36 w-8 translate-x-[60px] translate-y-12 -rotate-12 bg-red-400">
          {/* tangan kiri */}
        </div>
        <div className="absolute h-36 w-8 origin-top-right -translate-x-[60px] translate-y-12 rotate-12 bg-red-400">
          {/* tangan kanan */}
        </div>
        <div className="rotate-top-left absolute h-36 w-8 origin-top -translate-x-[24px] translate-y-48 bg-red-400">
          {/* kaki kiri */}
        </div>
        <div className="rotate-top-right absolute h-36 w-8 origin-top translate-x-[24px] translate-y-48 bg-red-400">
          {/* kaki kanan */}
        </div>
      </div>
    </ScrollArea>
  );
}
