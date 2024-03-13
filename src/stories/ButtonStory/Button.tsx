import React from "react";
import { Button } from "src/components/ui/button";
interface ButtonProps {
  primary?: boolean;
  color?: string;
  hoverBg?: string;
  size?: "default" | "sm" | "lg" | "icon";
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ButtonTheme = ({
  primary = false,
  // size = "default",
  hoverBg,
  color,
  label,
  ...props
}: ButtonProps) => {
  const buttonClasses = `
  px-6 py-4 border bg-transparent rounded-md text-base ${hoverBg} hover:text-white 
  ${primary ? "text-green-500 border-green-500" : color}
`;
  return (
    <Button {...props} className={buttonClasses}>
      {label}
    </Button>
  );
};
