import React from "react";

type Props = {
  todo: {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
};

const Todo = ({ todo }: Props) => {
  return <div>{todo?.userId}</div>;
};

export default Todo;
