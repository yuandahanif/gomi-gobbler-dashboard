import * as React from "react";
import { File } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const students = [
  {
    name: "Lemona Demach Ine",
    interaction: {
      status: "active",
      avg_interaction_per_day: 2,
    },
    class: "XII IPA 1",
    ratio: {
      correct: 25,
      wrong: 123,
    },
    imgSrc: "https://avatar.iran.liara.run/public/30",
  },
  {
    name: "Mona Nova Bintang",
    interaction: {
      status: "active",
      avg_interaction_per_day: 3,
    },
    class: "XII IPA 1",
    ratio: {
      correct: 29,
      wrong: 1,
    },
    imgSrc: "https://avatar.iran.liara.run/public/30",
  },
  {
    name: "Jair Gantt",
    interaction: {
      status: "active",
      avg_interaction_per_day: 4,
    },
    class: "XII IPA 1",
    ratio: {
      correct: 29,
      wrong: 4,
    },
    imgSrc: "https://avatar.iran.liara.run/public/30",
  },
  {
    name: "Nino mae inanis",
    interaction: {
      status: "active",
      avg_interaction_per_day: 7,
    },
    class: "XII IPA 1",
    ratio: {
      correct: 229,
      wrong: 14,
    },
    imgSrc: "https://avatar.iran.liara.run/public/30",
  },
  {
    name: "Lillie Albert",
    interaction: {
      status: "inactive",
      avg_interaction_per_day: 4,
    },
    class: "XII IPA 1",
    ratio: {
      correct: 9,
      wrong: 4,
    },
    imgSrc: "https://avatar.iran.liara.run/public/30",
  },
];

export default function SchoolStudentPage() {
  return (
    <main className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0">
      <div className="grid auto-rows-max items-start gap-4">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
            <CardHeader className="pb-3">
              <CardTitle className="text-3xl font-bold">Kelola Siswa</CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Kelola siswa disini.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card x-chunk="dashboard-05-chunk-1">
            <CardHeader className="pb-2">
              <CardDescription>Pengguna Aktif</CardDescription>
              <CardTitle className="text-center text-4xl">491/513</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                <span className="font-semibold">Rekomendasi:</span> beberapa
                siswa tidak membuang sampah selama satu minggu.
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Presentase benar per siswa</CardDescription>
              <CardTitle className="text-center text-4xl">
                91<span className="text-4xl">%</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                <span className="font-semibold">Rekomendasi:</span> beberapa
                sampah tidak dapat dikategorikan, periksa folder monitoring
                untuk lebih detail.
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="week">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="week">Semua Data</TabsTrigger>
              <TabsTrigger value="month">Tambah</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only">Export</span>
              </Button>
            </div>
          </div>

          <TabsContent value="week">
            <Card>
              <CardHeader>
                <CardTitle>Pengguna</CardTitle>
                <CardDescription>
                  Menampilkan semua data pengguna.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="hidden w-[100px] sm:table-cell">
                        <span className="sr-only">Image</span>
                      </TableHead>
                      <TableHead>Nama</TableHead>
                      <TableHead>Interaksi</TableHead>
                      <TableHead>Kelas</TableHead>
                      <TableHead className="hidden md:table-cell">
                        Rasio salah benar
                      </TableHead>
                      <TableHead className="hidden md:table-cell">
                        Rata-Rata interaksi per hari
                      </TableHead>
                      <TableHead>
                        <span className="sr-only">Aksi</span>
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((student) => (
                      <TableRow key={student.name}>
                        <TableCell className="hidden sm:table-cell">
                          <Image
                            alt="Avatar image"
                            className="aspect-square rounded-md object-cover"
                            height="64"
                            width="64"
                            src={student.imgSrc}
                          />
                        </TableCell>
                        <TableCell className="font-medium">
                          {student.name}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">
                            {student.interaction.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{student.class}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          {student.ratio.correct}/{student.ratio.wrong}{" "}
                          {student.ratio.correct > student.ratio.wrong
                            ? "👍"
                            : "👎"}
                        </TableCell>
                        <TableCell className="hidden text-center md:table-cell">
                          {student.interaction.avg_interaction_per_day}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                aria-haspopup="true"
                                size="icon"
                                variant="ghost"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Toggle menu</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>Edit</DropdownMenuItem>
                              <DropdownMenuItem>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  Showing <strong>1-5</strong> of <strong>513</strong> students
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
