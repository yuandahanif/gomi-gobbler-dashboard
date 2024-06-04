import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="flex-1 items-center justify-center flex gap-4 p-4 sm:px-6 sm:py-0">
      <Card className="mx-auto my-auto max-w-sm min-w-[400px]">
        <CardHeader>
          <CardTitle className="text-xl">Masuk Sebagai</CardTitle>
          <CardDescription>Pilih peran anda pada aplikasi ini.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            <Link href="/dashboard/sch">
              <Button variant="outline" className="w-full">
                Sekolah
              </Button>
            </Link>
            <Link href="/dashboard/govt">
              <Button variant="outline" className="w-full">
                Pemerintah
              </Button>
            </Link>
          </div>
          <div className="mt-4 text-center text-sm">
            Ada pertanyaan?{" "}
            <Link href="#" className="underline">
              ajukan disini.
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
