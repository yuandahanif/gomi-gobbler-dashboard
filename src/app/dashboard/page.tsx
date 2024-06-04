import * as React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  ListFilter,
  MoreVertical,
  Truck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
            <Link href="/dashboaard/sch/">
              <Button variant="outline" className="w-full">
                Sekolah
              </Button>
            </Link>
            <Link href="/dashboaard/govt/">
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
