import * as React from "react";
import { File, ListFilter } from "lucide-react";

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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function GovtDashboardPage() {
  return (
    <main className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0">
      <div className="grid auto-rows-max items-start gap-4">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
            <CardHeader className="pb-3">
              <CardTitle className="text-3xl font-bold">
                Selamat datang, Pemerintah Kota!
              </CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Introducing Our Dynamic Dashboard for Seamless Management and
                Insightful Analysis.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card x-chunk="dashboard-05-chunk-1">
            <CardHeader className="pb-2">
              <CardDescription>Total Sampah Bulan Ini</CardDescription>
              <CardTitle className="text-4xl">5,329 ton</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +10% dari bulan lalu
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Sampah dipilah bulan ini</CardDescription>
              <CardTitle className="text-4xl">1,329 ton</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                +64% dari bulan lalu
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="week">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="week">Minggu</TabsTrigger>
              <TabsTrigger value="month">Bulan</TabsTrigger>
              <TabsTrigger value="year">Tahun</TabsTrigger>
            </TabsList>
            <div className="ml-auto flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 gap-1 text-sm"
                  >
                    <ListFilter className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Fulfilled
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Declined</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Refunded</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
                <File className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only">Export</span>
              </Button>
            </div>
          </div>

          <TabsContent value="week">
            <Card>
              <CardHeader className="px-7">
                <CardTitle>Ringkasan</CardTitle>
                <CardDescription>
                  Ringkasan data sampah minggu ini.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                  <Card className="bg-green-100">
                    <CardHeader className="pb-1">
                      <CardDescription className="text-base">
                        Total sampah organik
                      </CardDescription>
                      <CardTitle className="text-2xl">1909 buah</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        +25% dari minggu lalu
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-red-100">
                    <CardHeader className="pb-1">
                      <CardDescription className="text-base">
                        Total sampah anorganik
                      </CardDescription>
                      <CardTitle className="text-2xl">1,329 buah</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        +25% dari minggu lalu
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-yellow-100">
                    <CardHeader className="pb-0">
                      <CardDescription className="text-base">
                        Total sampah residu
                      </CardDescription>
                      <CardTitle className="text-2xl">1,329 buah</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        +25% dari minggu lalu
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-1">
                      <CardDescription className="text-base">
                        Tempat sampah penuh
                      </CardDescription>
                      <CardTitle className="text-2xl">1/3</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        Terakhir diangkut 2 hari yang lalu
                      </div>
                    </CardContent>
                  </Card>

                  {/* Map tempat sampah */}
                  <Card className="col-span-3 row-span-3">
                    <CardHeader className="pb-0">
                      <CardDescription className="text-base">
                        Heatmap penggunaan tempat sampah
                      </CardDescription>
                      <CardTitle className="text-base"></CardTitle>
                    </CardHeader>
                    <CardContent className="flex h-4/5 w-full">
                      <div className="relative h-full w-full text-xs text-muted-foreground">
                        <Image
                          className="h-full w-full object-contain"
                          src={"/images/sch-map-default.png"}
                          alt="map sekolah"
                          fill
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="flex w-full justify-center gap-2 text-xs">
                        <span>0 interaksi</span>
                        <div className="h-4 w-60 bg-gradient-to-r from-green-300 via-yellow-400 to-red-500">
                          <span className="sr-only">heatmap range</span>
                        </div>
                        <span>429 interaksi</span>
                      </div>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader className="pb-1">
                      <CardDescription className="text-base">
                        Kategori sampah benar
                      </CardDescription>
                      <CardTitle className="text-2xl">5,179 buah</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        +99% dari minggu lalu
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-1">
                      <CardDescription className="text-base">
                        Kategori sampah salah
                      </CardDescription>
                      <CardTitle className="text-2xl">40 buah</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        +1% dari minggu lalu
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-1">
                      <CardDescription className="text-base">
                        Partisipasi siswa
                      </CardDescription>
                      <CardTitle className="text-2xl">
                        1,329 interaksi
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        +10% dari minggu lalu
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
