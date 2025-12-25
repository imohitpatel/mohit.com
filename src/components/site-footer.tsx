import { RssIcon } from "lucide-react";
import Link from "next/link";

import { SITE_INFO, SOURCE_CODE_GITHUB_URL } from "@/config/site";

import { Icons } from "./icons";

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-hidden px-2">
      <div className="screen-line-before mx-auto border-x border-edge pt-4 md:max-w-3xl">
        {/*
          <p className="mb-1 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
            Inspired by tailwindcss.com & ui.shadcn.com
          </p>
        */}

        <p className="mb-4 px-4 text-center font-mono text-sm text-balance text-muted-foreground">
          built with love by{" "}
          
            <a
              className="link"
              href="https://linkedin.com/in/imohitpatel"
              target="_blank"
              rel="noopener"
            >
              imohitpatel
            </a>
          {/*
          . The source code is available on{" "}
          <a
            className="link"
            href={SOURCE_CODE_GITHUB_URL}
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          .*/}
        </p>

        <div className="screen-line-before screen-line-after flex w-full before:z-1 after:z-1">
          <div className="mx-auto flex items-center justify-center gap-3 border-x border-edge bg-background px-4">
            <Link
              className="flex font-mono text-xs font-medium text-muted-foreground"
              href="/sponsors"
            >
              connect with me
           </Link>
            {/*
            <Separator />

            <a
              className="flex font-mono text-xs font-medium text-muted-foreground"
              href={`${SITE_INFO.url}/llms.txt`}
              target="_blank"
              rel="noopener noreferrer"
            >
              imohitpatel
            </a>
            */}
          </div>
        </div>
      </div>
      <div className="pb-[env(safe-area-inset-bottom,0px)]">
        <div className="flex h-2" />
      </div>
    </footer>
  );
}

function Separator() {
  return <div className="flex h-11 w-px bg-edge" />;
}
