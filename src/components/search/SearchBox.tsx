"use client";
import React, { useState, useRef } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

type Props = {};

const SearchBox = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const commandListRef = useRef(null);

  const handleOpenChange = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const handleFocus = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Command className="border">
        <CommandInput
          placeholder="Enter something to search"
          onClick={() => setIsOpen(true)}
        />
      </Command>
      <CommandDialog open={isOpen} onOpenChange={handleOpenChange}>
        <CommandInput
          placeholder="Type a command or search..."
          onFocus={handleFocus}
        />
        <CommandList ref={commandListRef}>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchBox;
