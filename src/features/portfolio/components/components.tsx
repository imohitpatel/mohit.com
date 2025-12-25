// File: /c:/Users/mohit/Desktop/mohit.com/src/features/portfolio/components/components.tsx
// Purpose: Render a small "Components" panel showing a few component posts and a link to the full list.

import { ArrowRightIcon } from "lucide-react"; // Icon used in the footer button
import Link from "next/link"; // Next.js Link for client-side navigation

import { ComponentIcon } from "@/components/icons"; // Icon component for each post
import { Button } from "@/components/ui/button"; // Reusable Button component
import { getPostsByCategory } from "@/features/blog/data/posts"; // Data helper to fetch posts by category
import { cn } from "@/lib/utils"; // Utility to conditionally join class names

import { Panel, PanelHeader, PanelTitle, PanelTitleSup } from "./panel"; // Local Panel UI primitives

export function Components() {
  // Fetch posts tagged with the "components" category
  const posts = getPostsByCategory("components");

  // Render the components panel
  return (
    <Panel id="components">
      {/* Panel header wrapper */}
      <PanelHeader>
        {/* Panel title container */}
        <PanelTitle>
          {/* Visible title text */}
          Components
          {/* Superscript showing number of component posts */}
          <PanelTitleSup>({posts.length})</PanelTitleSup>
        </PanelTitle>
      </PanelHeader>

      {/* Main content area with relative positioning for decorative lines */}
      <div className="relative py-2">
        {/* Decorative vertical dividing lines for larger screens */}
        <div className="absolute inset-0 -z-1 grid grid-cols-1 gap-2 max-sm:hidden sm:grid-cols-2">
          {/* Left divider column */}
          <div className="border-r border-edge"></div>
          {/* Right divider column */}
          <div className="border-l border-edge"></div>
        </div>

        {/* Grid that contains the list of component posts; responsive columns */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {/* Map over the first 6 posts and render each as a link */}
          {posts.slice(0, 6).map((post) => (
            <Link
              key={post.slug} // Unique key for each mapped item
              href={`/components/${post.slug}`} // Destination URL for this component post
              className={cn(
                // Base classes for layout, spacing, and hover behavior
                "group/post flex items-center gap-4 p-4 transition-[background-color] ease-out hover:bg-accent2",
                // Utilities applied on small screens for decorative lines
                "max-sm:screen-line-before max-sm:screen-line-after",
                // Utilities applied to odd items on larger screens for decorative lines
                "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
              )}
            >
              {/* Icon container for the component post */}
              <div
                className="flex size-6 shrink-0 items-center justify-center rounded-lg border border-muted-foreground/15 bg-muted ring-1 ring-edge ring-offset-1 ring-offset-background"
                aria-hidden // Decorative only, not exposed to assistive tech
              >
                {/* Render the component-specific icon */}
                <ComponentIcon
                  className="pointer-events-none size-4 text-muted-foreground"
                  variant={post.metadata.icon} // Choose icon variant from metadata
                />
              </div>

              {/* Title of the component post */}
              <h2 className="leading-snug font-medium text-balance underline-offset-4 group-hover/post:underline">
                {post.metadata.title}
              </h2>

              {/* Optional "New" badge for recently added posts */}
              {post.metadata.new && (
                <span className="flex -translate-x-1 translate-y-px items-center justify-center">
                  {/* Small visual indicator */}
                  <span className="flex size-2 rounded-sm bg-info" />
                  {/* Screen-reader-only label for accessibility */}
                  <span className="sr-only">New</span>
                </span>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Footer area with a centered button linking to the full components index */}
      <div className="screen-line-before flex justify-center py-2">
        {/* Use Button with asChild to render a Link inside it */}
        <Button variant="default" asChild>
          <Link href="/components">
            {/* Button label text */}
            All Components
            {/* Trailing chevron icon */}
            <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </Panel>
  );
}
