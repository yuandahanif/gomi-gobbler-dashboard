import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 gap-10">
      <div className="relative w-96 h-96">
        <Image
          alt="trash can"
          src="https://safebooru.org//samples/4619/sample_862b28f71cbd83cf95039f6a87342df7632fca32.jpg?4936620"
          width={384}
          height={384}
          className="object-contain w-full h-full"
        />
      </div>

      <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">
        Selamat datang di :3
      </h1>

      <div className="flex gap-4 justify-center">
        <Button>Download</Button>
        <Link href={"/dashboard"}>
          <Button variant="ghost">Masuk</Button>
        </Link>
      </div>
    </main>
  );
}
