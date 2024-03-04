import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
type Props = {};

const Mail = (props: Props) => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={25}>One</ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>Two</ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default Mail;
