"use client";

import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import BREADCRUMB_KV from "@/data/breadcrumb_kv";

const HeaderBreadcrumb = () => {
  const pathname = usePathname();
  const [_, ...pathnames] = pathname.split("/").map((path: string) => {
    if (BREADCRUMB_KV[path]) {
      return { label: BREADCRUMB_KV[path], value: path };
    }
    return { label: null, value: null };
  });

  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        {pathnames.map(
          (path, index) =>
            path.value != null && (
              <div
                key={path?.value}
                className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5"
              >
                {index === pathnames.length - 1 ? (
                  <BreadcrumbPage>{path?.label}</BreadcrumbPage>
                ) : (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link href={`/dashboard/${path?.value}`}>
                          {path?.label}
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                  </>
                )}
              </div>
            )
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default HeaderBreadcrumb;
