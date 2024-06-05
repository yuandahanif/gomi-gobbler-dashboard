import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";

import { Permanent_Marker } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ReceiptText } from "lucide-react";
const font = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

const quests = [
  {
    name: "Buang 5 kulit buah",
    description: "Buang 5 kulit buah",
    step: 5,
    completed: 1,
    reward: 10,
  },
  {
    name: "Buang 5 kantong plastik",
    description: "Buang 5 kantong plastik",
    step: 5,
    completed: 2,
    reward: 3,
  },
  {
    name: "Buang 5 botol plastik",
    description: "Buang 5 botol plastik",
    step: 5,
    completed: 4,
    reward: 2,
  },
  {
    name: "Buang 5 kertas",
    description: "Buang 5 kertas",
    step: 5,
    completed: 5,
    reward: 1,
  },
  {
    name: "Buang 5 kaleng",
    description: "Buang 5 kaleng",
    step: 5,
    completed: 0,
    reward: 10,
  },
];

const completedQuest = 3;

export default function MobileQuestPage() {
  return (
    <ScrollArea className="h-full w-full p-2 pr-3">
      <div className="mb-2 flex h-44 w-full flex-col items-center overflow-hidden rounded-sm rounded-b-3xl bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="mt-auto flex h-full w-full items-center justify-evenly">
          <h1
            className="mx-auto mb-2 mt-3 text-center text-xl font-semibold leading-none text-white"
            style={font.style}
          >
            <span className="text-2xl">Horee!!</span> Kamu membuang sampah{" "}
            <br />
            <span className="font-sans text-8xl font-semibold text-cyan-200 drop-shadow-2xl">
              691
            </span>{" "}
            <br /> kali benar berturut-turut!
          </h1>
        </div>
      </div>

      <div className="relative flex items-center">
        <h3
          className="mx-auto mb-2 mt-3 text-center text-xl font-semibold leading-none"
          style={font.style}
        >
          Misi Minggu Ini
        </h3>
      </div>

      {quests.map((quest, idx) => (
        <div
          key={quest.name}
          className={cn(
            "mb-1 flex flex-col rounded-lg border border-gray-300 bg-white p-3 text-sm shadow-md duration-200",
            completedQuest == idx && "border-green-300 bg-green-100",
          )}
        >
          <div className="flex flex-wrap justify-between">
            <p className="font-semibold">
              {quest.name} {completedQuest == idx ? "(selesai)" : ""}
            </p>

            <Button variant="ghost" size="sm" className="gap-1 text-sm">
              <label
                htmlFor={`quest-${quest.name}`}
                className="flex cursor-pointer items-center"
              >
                <ReceiptText className="h-3.5 w-3.5" /> detail
              </label>
            </Button>
          </div>

          <div className="duration-200">
            <input
              type="checkbox"
              className="peer/draft sr-only"
              id={`quest-${quest.name}`}
            />

            <div className="h-0 w-full origin-top scale-y-0 duration-200 peer-checked/draft:h-full peer-checked/draft:scale-y-100">
              <p className="text-left text-xs">
                Hadiah: {quest.reward} poin | Progress: {quest.completed}/
                {quest.step}{" "}
              </p>
              <p className="text-left text-xs">{quest.description}</p>
            </div>
          </div>
        </div>
      ))}
    </ScrollArea>
  );
}
