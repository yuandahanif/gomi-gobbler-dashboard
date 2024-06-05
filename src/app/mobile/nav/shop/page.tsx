import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

import { Permanent_Marker } from "next/font/google";
import {
  CalendarSearch,
  ChevronDown,
  ChevronUp,
  ListFilter,
  ShoppingCart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
const font = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

const virtual_items = [
  {
    name: "Internet 1GB",
    price: 10,
    tipe: "internet",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/WiFi_Logo.svg",
  },
  {
    name: "Internet 10GB",
    price: 100,
    tipe: "internet",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/WiFi_Logo.svg",
  },
  {
    name: "Diamond Mobile Legend",
    price: 1000,
    tipe: "game",
    image:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Mobile-legends-logo.svg/512px-Mobile-legends-logo.svg.png",
  },
  {
    name: "Voucher Steam 100k",
    price: 1000,
    tipe: "game",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/512px-Steam_icon_logo.svg.png",
  },
  {
    name: "Robux 1000",
    price: 1000,
    tipe: "game",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/48/Roblox_Logo_2021.png?20211127162044",
  },
  {
    name: "Voucher Gopay 10k",
    price: 100,
    tipe: "wallet",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/308px-Gopay_logo.svg.png",
  },
  {
    name: "Voucher OVO 10k",
    price: 100,
    tipe: "wallet",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Logo_ovo_purple.svg/512px-Logo_ovo_purple.svg.png",
  },
];

const physical_items = [
  {
    name: "Tumbler",
    price: 100,
    tipe: "merch",
  },
  {
    name: "T-shirt",
    price: 200,
    tipe: "merch",
  },
  {
    name: "Hoodie",
    price: 300,
    tipe: "merch",
  },
  {
    name: "Jacket",
    price: 400,
    tipe: "merch",
  },
  {
    name: "Sweater",
    price: 500,
    tipe: "merch",
  },
];

export default function MobileShopPage() {
  return (
    <ScrollArea className="h-full w-full p-1 pb-32 pl-2 pr-3">
      <div className="relative mb-2 flex h-44 w-full flex-col items-center overflow-hidden rounded-sm rounded-b-3xl bg-gradient-to-r from-teal-200 to-teal-500">
        <ShoppingCart className="absolute left-10 top-5 h-36 w-36 -rotate-45 text-white" />
        <div className="mb-5 ml-auto mr-5 flex h-full w-1/2 items-end justify-end text-end">
          <h1 style={font.style} className="text-xl text-white">
            Tukarkan poinmu <br /> dengan <br /> barang-barang menarik!
          </h1>
        </div>
      </div>

      <div className="sticky top-0 z-20 -mt-1 flex justify-between gap-2 bg-white p-3 shadow-sm">
        <p className="text-right text-sm">
          poinmu: <span className="font-semibold">100</span>
        </p>
        <Link href="#" className="text-sm text-blue-500 underline">
          Riwayat
        </Link>
      </div>

      <div className="relative z-10 mb-1 flex items-center">
        <h3 className="mx-auto mb-2 mt-3 text-center text-lg font-semibold leading-none">
          Barang Virtual
        </h3>

        <Button
          variant="outline"
          size="sm"
          className="absolute right-0 h-7 gap-1 text-sm"
        >
          <ListFilter className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only">Filter</span>
        </Button>
      </div>

      <div className="grid grid-flow-row grid-cols-2 items-stretch gap-1">
        {virtual_items.map((item, idx) => (
          <div
            key={item.name}
            className={cn(
              "mb-1 flex flex-col items-center justify-end rounded-lg border border-blue-300 bg-white p-3 text-sm shadow-md",
            )}
          >
            <div className="flex flex-1">
              <Image
                src={item.image}
                alt={item.name}
                width={50}
                height={50}
                className="h-12 w-12 object-contain"
              />
            </div>
            <p className="line-clamp-2 font-semibold">
              {item.name} - Rp {item.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      <Separator className="my-5" />

      <div className="relative mb-1 flex items-center z-10">
        <h3 className="mx-auto mb-2 mt-3 text-center text-lg font-semibold leading-none">
          Barang Fisik
        </h3>

        <Button
          variant="outline"
          size="sm"
          className="absolute right-0 h-7 gap-1 text-sm"
        >
          <ListFilter className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only">Filter</span>
        </Button>
      </div>

      <div className="grid grid-flow-row grid-cols-2 items-stretch gap-1">
        {physical_items.map((item, idx) => (
          <div
            key={item.name}
            className={cn(
              "mb-1 flex justify-between rounded-lg border border-blue-300 bg-white p-3 text-sm shadow-md",
            )}
          >
            <p className="font-semibold">
              {item.name} - Rp {item.price.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
