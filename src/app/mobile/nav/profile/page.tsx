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
  icons,
} from "lucide-react";

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

const achievements = [
  {
    name: "Pemilah Pemula",
    reward: 10,
    description: "Mulia memilah dengan benar 10x berturut-turut",
    icon: <Shapes />,
  },
  {
    name: "Prajurit Pemilah",
    reward: 20,
    description: "Memilah  dengan benar 50x berturut-turut",
    icon: <Sword />,
  },
  {
    name: "Penyihir Pemilah",
    reward: 30,
    description: "Memilah jenis organik 20x, anorganik 30x, dan residu 10x",
    icon: <Sparkles />,
  },
  {
    name: "Pahlawan Pemilah",
    reward: 40,
    description: "Tidak pernah salah memilah sampah 50x berturut-turut",
    icon: <VenetianMask />,
  },
  {
    name: "Raja Pemilah",
    reward: 50,
    description: "Tidak pernah salah memilih kategori 500x",
    icon: <Crown />,
  },
  {
    name: "Sesepuh  Pemilah",
    reward: 100,
    description: "Tidak pernah salah memilih kategori 10000x",
    icon: <BookHeart />,
  },
];

const achievements_unlocked_idx = 2;

export default function MobileProfilePage() {
  return (
    <ScrollArea className="h-full w-full p-2 pr-3">
      <div className="relative mb-2 flex h-14 w-full flex-col items-center rounded-sm rounded-b-xl bg-gradient-to-r from-violet-200 to-pink-200">
        <div className="ml-auto mt-auto flex w-fit items-center gap-1 bg-gradient-to-r from-amber-200 to-yellow-400 bg-clip-text pb-2 pr-2 text-white drop-shadow-sm">
          <h2 className="mt-0 text-left text-sm leading-none">
            penyihir pemilah
          </h2>
          <Sparkles className="h-3.5 w-3.5 text-inherit" />
        </div>

        <div className="absolute bottom-0 left-6 translate-y-1/2 rounded-full bg-white p-2">
          <Avatar className="h-20 w-20">
            <AvatarImage src="https://safebooru.org//images/4619/17289fb65697ec3adda05131d44dfdf150095533.png?4814699" />
            <AvatarFallback>user avatar</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="mx-32 flex w-8/12 items-start justify-between gap-1">
        <div>
          <h1 className="text-left text-xl font-semibold leading-none text-black">
            Jair Gantt
          </h1>

          <div className="flex items-center gap-1">
            <School className="h-3 w-3" />
            <p className="text-xs leading-none">SMA Abydos</p>
          </div>
        </div>

        <div className="flex justify-end">
          <Button className="p-1" variant="ghost" size="sm">
            <Instagram className="h-4 w-4 text-rose-500" />
          </Button>
          <Button className="p-1" variant="ghost" size="sm">
            <Facebook className="h-4 w-4 text-blue-600" />
          </Button>
        </div>
      </div>

      <div className="mt-4 flex w-full">
        <h2 className="mb-2 mt-0 text-left text-base font-semibold leading-none text-black">
          Riwayat Pencapaian
        </h2>
      </div>

      <ScrollArea className="w-[370px] whitespace-nowrap">
        <div className="mb-3 flex w-max gap-2 overflow-auto">
          {achievements.map((acv, idx) => (
            <div
              key={acv.name}
              className={cn(
                "mb-px flex flex-col items-center gap-2 rounded-sm border border-gray-300 bg-white p-2 text-sm",
                idx <= achievements_unlocked_idx
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300 bg-gray-50",
              )}
            >
              {acv.icon}
              <div className="flex flex-wrap justify-between">
                <p className="text-center text-sm">{acv.name}</p>
              </div>
            </div>
          ))}
        </div>

        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <div className="mt-4 flex w-full">
        <h2 className="mb-2 mt-0 text-left text-base font-semibold leading-none text-black">
          Riwayat Aktivitas
        </h2>
      </div>

      <div>
        {activities.map((activity, idx) => (
          <div
            key={activity.name}
            className={cn(
              "mb-px flex flex-col rounded-sm border border-gray-300 bg-white p-2 text-sm",
            )}
          >
            <div className="flex flex-wrap justify-between">
              <p className="text-sm">{activity.name}</p>
              <p
                className={cn(
                  "text-green-500",
                  activity.reward > 0 ? "text-green-500" : "text-red-500",
                )}
              >
                {activity.reward > 0 ? "+" : "-"} {Math.abs(activity.reward)}
              </p>
            </div>
          </div>
        ))}
        <Button className="mt-2 w-full" variant="ghost" size="sm">
          Lihat Semua
        </Button>
      </div>
    </ScrollArea>
  );
}
