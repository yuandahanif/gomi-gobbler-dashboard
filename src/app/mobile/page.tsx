import MascotDefault from "@/components/mascot/mascot-default";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function MobileLanding() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-10 p-5">
      <div className="relative min-h-96">
        <MascotDefault />
      </div>

      <h1 className="text-center text-2xl font-bold">
        Selamat datang di tempat sampah :3
      </h1>

      <div className="flex justify-center gap-4">
        <Link href={"/mobile/nav/home"}>
          <Button variant="default" className="bg-green-400 hover:bg-green-500">
            Masuk
          </Button>
        </Link>
      </div>
    </main>
  );
}
