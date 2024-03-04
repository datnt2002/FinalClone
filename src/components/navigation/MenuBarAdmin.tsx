"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const items = [
  { key: 1, path: "/admin/dashboard", title: "DashBoard" },
  { key: 2, path: "/admin/mail", title: "Mail" },
  { key: 3, path: "/admin/tasks", title: "Tasks" },
];

const MenuBarAdmin = (props: Props) => {
  const pathName = usePathname();
  return (
    <div className="flex gap-3 ">
      {items.map((item) => {
        return (
          <Link
            className={`${
              pathName === item.path ? "bg-gray-200" : ""
            } cursor-pointer font-bold py-2 px-4 rounded-3xl text-sm`}
            key={item?.key}
            href={item?.path}
          >
            {item?.title}
          </Link>
        );
      })}
    </div>
  );
};

export default MenuBarAdmin;
