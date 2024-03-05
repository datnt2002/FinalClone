import MenuMusic from "@/components/musicAdmin/MenuMusicAdmin";
import { Separator } from "@/components/ui/separator";
import React from "react";

type Props = {};

const MusicPage = (props: Props) => {
  return (
    <div className="w-full">
      <MenuMusic />
      <Separator />
    </div>
  );
};

export default MusicPage;
