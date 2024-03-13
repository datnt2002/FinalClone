import type { Meta, StoryObj } from "@storybook/react";

import Todo from "./Todo";

const meta: Meta<typeof Todo> = {
  title: "Example/Todo",
  component: Todo,
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
  render: (args, { loaded: { todo } }) => <Todo {...args} {...todo} />,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  loaders: [
    async () => ({
      todo: await (
        await fetch("https://jsonplaceholder.typicode.com/todos/1")
      ).json(),
    }),
  ],
};
