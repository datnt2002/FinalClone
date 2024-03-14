import React from "react";

type Props = {

    userId: number;
    id: number;
    title: string;
    completed: boolean;
 
};

const Todo = ({ userId, id, title, completed }: Props) => {
  console.log(userId);
  
  return <div>{title}</div>;
};

export default Todo;
