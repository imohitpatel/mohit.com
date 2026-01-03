"use client";

import { DownloadIcon, TriangleDashedIcon, TypeIcon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { toast } from "sonner";

import { copyText } from "@/utils/copy";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu";

export function BrandContextMenu({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-64">
        <ContextMenuItem asChild>
          <a href="assets/mplogo.png" download>
            <DownloadIcon />
            Download Brand Assets
          </a>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
