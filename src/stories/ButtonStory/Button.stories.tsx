import type { Meta, StoryObj } from "@storybook/react";

import { ButtonTheme } from "./Button";

const meta: Meta<typeof ButtonTheme> = {
  title: "Example/Button",
  component: ButtonTheme,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],

  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Delete",
  },
};

export const Secondary: Story = {
  args: {
    label: "Cancel",
    color: "text-gray-500 border-gray-500",
    hoverBg: "hover:bg-gray-500",
  },
};

export const Warning: Story = {
  args: {
    label: "Cancel",
    color: "text-red-500 border-red-500",
    hoverBg: "hover:bg-red-500",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "icon",
    label: "Button",
  },
};
