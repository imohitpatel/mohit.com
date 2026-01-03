import dynamic from "next/dynamic";

import { Panel, PanelHeader, PanelTitle } from "./panel";

const BrandContextMenu = dynamic(() =>
  import("@/components/brand-context-menu").then((mod) => mod.BrandContextMenu)
);

export function Brand() {
  return (
    <Panel>
      <PanelHeader>
        <PanelTitle>Brand</PanelTitle>
      </PanelHeader>

      <BrandContextMenu>
        <div className="grid grid-cols-[2rem_1fr]">
        </div>
      </BrandContextMenu>
    </Panel>
  );
}
