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
import TraashLineChart from "./line-chart";

export default function SchoolTrashPage() {
  return (
    <main className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0">
      <div className="grid auto-rows-max items-start gap-4">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
            <CardHeader className="pb-3">
              <CardTitle className="text-3xl font-bold">
                Kelola Tempat sampah
              </CardTitle>
              <CardDescription className="max-w-lg text-balance leading-relaxed">
                Kelola tempat sampah disini.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card x-chunk="dashboard-05-chunk-1">
            <CardHeader className="pb-2">
              <CardDescription>Tempat Sampah Terhubung</CardDescription>
              <CardTitle className="text-center text-4xl">3</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                <span className="font-semibold">Rekomendasi:</span> tambah dua
                tempat sampah lagi untuk optimalisasi penampungan sampah.
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Tempat Sampah Penuh</CardDescription>
              <CardTitle className="text-center text-4xl">1/3</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground">
                <span className="font-semibold">Rekomendasi:</span> dua hari
                terakhir tempat sampah nomer dua memiliki aktivitas yang tinggi.
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="week">
          <div className="flex items-center">
            <TabsList>
              <TabsTrigger value="week">Saat ini</TabsTrigger>
              <TabsTrigger value="month">Riwayat</TabsTrigger>
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
              <CardHeader className="px-7">
                <CardTitle>Ringkasan</CardTitle>
                <CardDescription>
                  Ringkasan data sampah minggu ini.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
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
                          src={"/images/sch-map-name.png"}
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
                        Tempat Sampah paling aktif
                      </CardDescription>
                      <CardTitle className="text-2xl">No. 2</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        +50% dari minggu lalu
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-1">
                      <CardDescription className="text-base">
                        Kategori sampah terbanyak
                      </CardDescription>
                      <CardTitle className="text-2xl">Anorganik</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">
                        +13% dari minggu lalu
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

                  {/* tempat sampah */}
                  <div className="col-span-4 grid grid-flow-row grid-cols-3 gap-4">
                    <div className="col-span-3">
                      <h3 className="text-2xl">Detail Tempat Sampah</h3>
                    </div>

                    <Card className="col-span-2">
                      <CardHeader className="pb-1">
                        <CardDescription className="text-base">
                          Tempat sampah 1
                        </CardDescription>
                        <CardTitle className="text-2xl"></CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex h-[300px] w-full">
                          <TraashLineChart />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="">
                      <CardHeader className="pb-1">
                        <CardDescription className="inline-flex text-base">
                          Status Tempat sampah 1{" "}
                          <Button variant="link" className="ml-auto" size="sm">
                            Detail
                          </Button>
                        </CardDescription>
                        <CardTitle className="text-2xl"></CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex h-auto flex-col text-sm text-muted-foreground">
                          <table className="w-full table-auto">
                            <thead>
                              <tr>
                                <th className="text-left">Proses</th>
                                <th className="text-right">Nilai</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>CPU</td>
                                <td className="text-right">30%</td>
                              </tr>
                              <tr>
                                <td>Memori</td>
                                <td className="text-right">2.5 Gib / 8 Gib</td>
                              </tr>
                              <tr>
                                <td>Penyimpanan</td>
                                <td className="text-right">50%</td>
                              </tr>
                              <tr>
                                <td>Suhu</td>
                                <td className="text-right">39C</td>
                              </tr>
                              <tr>
                                <td>Konsumsi Daya</td>
                                <td className="text-right">12V</td>
                              </tr>
                              <tr>
                                <td>Kapasitas Baterai</td>
                                <td className="text-right">80%</td>
                              </tr>
                            </tbody>
                          </table>

                          <div className="mt-8 flex w-full flex-col gap-2">
                            <Button variant="outline">Buka Kamera</Button>
                            <Button variant="outline">Pengaturan</Button>

                            <div className="flex w-full justify-stretch gap-2">
                              <Button variant="secondary" className="w-full">
                                Mulai Ulang
                              </Button>
                              <Button variant="destructive" className="w-full">
                                Matikan Daya
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="col-span-2 bg-red-100">
                      <CardHeader className="pb-1">
                        <CardDescription className="text-base">
                          Tempat sampah 2{" "}
                          <span className="text-xl font-bold">(Penuh)</span>
                        </CardDescription>
                        <CardTitle className="text-2xl"></CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex h-[300px] w-full">
                          <TraashLineChart />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-red-100">
                      <CardHeader className="pb-1">
                        <CardDescription className="inline-flex text-base">
                          Status Tempat sampah 2
                          <Button variant="link" className="ml-auto" size="sm">
                            Detail
                          </Button>
                        </CardDescription>
                        <CardTitle className="text-2xl"></CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex h-auto flex-col text-sm text-muted-foreground">
                          <table className="w-full table-auto">
                            <thead>
                              <tr>
                                <th className="text-left">Proses</th>
                                <th className="text-right">Nilai</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>CPU</td>
                                <td className="text-right">30%</td>
                              </tr>
                              <tr>
                                <td>Memori</td>
                                <td className="text-right">2.5 Gib / 8 Gib</td>
                              </tr>
                              <tr>
                                <td>Penyimpanan</td>
                                <td className="text-right">50%</td>
                              </tr>
                              <tr>
                                <td>Suhu</td>
                                <td className="text-right">39C</td>
                              </tr>
                              <tr>
                                <td>Konsumsi Daya</td>
                                <td className="text-right">12V</td>
                              </tr>
                              <tr>
                                <td>Kapasitas Baterai</td>
                                <td className="text-right">80%</td>
                              </tr>
                            </tbody>
                          </table>

                          <div className="mt-8 flex w-full flex-col gap-2">
                            <Button variant="outline">Buka Kamera</Button>
                            <Button variant="outline">Pengaturan</Button>

                            <div className="flex w-full justify-stretch gap-2">
                              <Button variant="secondary" className="w-full">
                                Mulai Ulang
                              </Button>
                              <Button variant="destructive" className="w-full">
                                Matikan Daya
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="col-span-2">
                      <CardHeader className="pb-1">
                        <CardDescription className="text-base">
                          Tempat sampah 3
                        </CardDescription>
                        <CardTitle className="text-2xl"></CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex h-[300px] w-full">
                          <TraashLineChart />
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="">
                      <CardHeader className="pb-1">
                        <CardDescription className="inline-flex text-base">
                          Status Tempat sampah 3
                          <Button variant="link" className="ml-auto" size="sm">
                            Detail
                          </Button>
                        </CardDescription>
                        <CardTitle className="text-2xl"></CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex h-auto flex-col text-sm text-muted-foreground">
                          <table className="w-full table-auto">
                            <thead>
                              <tr>
                                <th className="text-left">Proses</th>
                                <th className="text-right">Nilai</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>CPU</td>
                                <td className="text-right">30%</td>
                              </tr>
                              <tr>
                                <td>Memori</td>
                                <td className="text-right">2.5 Gib / 8 Gib</td>
                              </tr>
                              <tr>
                                <td>Penyimpanan</td>
                                <td className="text-right">50%</td>
                              </tr>
                              <tr>
                                <td>Suhu</td>
                                <td className="text-right">39C</td>
                              </tr>
                              <tr>
                                <td>Konsumsi Daya</td>
                                <td className="text-right">12V</td>
                              </tr>
                              <tr>
                                <td>Kapasitas Baterai</td>
                                <td className="text-right">80%</td>
                              </tr>
                            </tbody>
                          </table>

                          <div className="mt-8 flex w-full flex-col gap-2">
                            <Button variant="outline">Buka Kamera</Button>
                            <Button variant="outline">Pengaturan</Button>

                            <div className="flex w-full justify-stretch gap-2">
                              <Button variant="secondary" className="w-full">
                                Mulai Ulang
                              </Button>
                              <Button variant="destructive" className="w-full">
                                Matikan Daya
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
