import { Button } from "@/components/ui/button";
import { Baloo_Bhai_2 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const font = Baloo_Bhai_2({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-10 p-24">
      <div className="relative h-96 w-96">
        <Image
          alt="trash can"
          src="https://safebooru.org//samples/4619/sample_862b28f71cbd83cf95039f6a87342df7632fca32.jpg?4936620"
          width={384}
          height={384}
          className="h-full w-full object-contain"
        />
      </div>

      <div>
        <h1 className="text-4xl tracking-tight" style={font.style}>
          <span className="font-bold">Halo, aku Bayman</span>, teman memilah
          sampahmu.
        </h1>
        <p className="mt-2 text-center text-lg">
          apa yang ingin kamu lakukan hari ini?
        </p>
      </div>

      <div className="flex justify-center gap-4">
        <Link href={"/mobile"}>
          <Button>Coba</Button>
        </Link>
        <Link href={"/dashboard"}>
          <Button variant="ghost">Masuk</Button>
        </Link>
      </div>
    </main>
  );
}
