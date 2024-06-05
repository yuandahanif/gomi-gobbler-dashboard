"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileNavbarItem = ({
  icon,
  children,
  label,
  href = "#",
}: Readonly<{
  icon: React.ReactNode;
  children?: React.ReactNode;
  label: string;
  href?: string;
}>) => {
  const pathname = usePathname();
  const is_link_active = pathname === href;

  return (
    <Link
      href={href}
      className={cn("block p-3", is_link_active ? "text-gray-400" : "")}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </Link>
  );
};

export default MobileNavbarItem;
