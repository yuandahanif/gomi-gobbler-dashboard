"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePathname } from "next/navigation";

const SidebarItem = ({
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
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8",
            is_link_active
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground"
          )}
        >
          {icon}
          <span className="sr-only">{label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );
};

export default SidebarItem;
