import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function MobileLanding() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center p-5 gap-10">
      <div className="relative w-96 h-96">
        <Image
          alt="trash can"
          src="https://safebooru.org//samples/4619/sample_862b28f71cbd83cf95039f6a87342df7632fca32.jpg?4936620"
          width={384}
          height={384}
          className="object-contain w-full h-full"
        />
      </div>

      <h1 className="text-2xl font-bold text-center">
        Selamat datang di tempat sampah :3
      </h1>

      <div className="flex gap-4 justify-center">
        <Link href={"/mobile/nav/home"}>
          <Button variant="default" className="bg-green-400 hover:bg-green-500">
            Masuk
          </Button>
        </Link>
      </div>
    </main>
  );
}
