import Image from "next/image";
import React from "react";

import { cn } from "@/lib/utils";

import type { Experience } from "../../types/experiences";
import { ExperiencePositionItem } from "./experience-position-item";

export function ExperienceItem({ experience }: { experience: Experience }) {
  const isLargeLogo =
    experience.id === "mckinsey" ||
    experience.id === "Automotive Society Of JEC";
  const logoSize = isLargeLogo ? 32 : 24;

  return (
    <div className="screen-line-after space-y-4 py-4">
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "flex shrink-0 items-center justify-center select-none",
            isLargeLogo ? "size-8" : "size-6"
          )}
        >
          {experience.companyLogo ? (
            <Image
              src={experience.companyLogo}
              alt={experience.companyName}
              width={logoSize}
              height={logoSize}
              quality={100}
              className="rounded-full"
              unoptimized
              aria-hidden
            />
          ) : (
            <span className="flex size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
          )}
        </div>

        {experience.companyWebsite ? (
          <a
            href={experience.companyWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg leading-snug font-medium underline-offset-4 hover:underline"
            aria-label={`${experience.companyName} website`}
          >
            {experience.companyName}
          </a>
        ) : (
          <h3 className="text-lg leading-snug font-medium">
            {experience.companyName}
          </h3>
        )}

        {experience.isCurrentEmployer && (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-info" />
            <span className="sr-only">Current Employer</span>
          </span>
        )}
      </div>

      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  );
}
