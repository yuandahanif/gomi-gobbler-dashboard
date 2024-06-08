import MascotDefault from "@/components/mascot/mascot-default";
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
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">
      <div className="relative h-20">
        <MascotDefault />
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
