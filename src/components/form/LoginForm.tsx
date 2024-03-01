"use client";
import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useStore } from "zustand";
import useUserStore from "@/store/store";

type Props = {};

const formSchema = z.object({
  username: z.string(),
  password: z.any(),
});

const LoginForm = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const registerAction = useUserStore((state) => state.registerNewUser);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    registerAction({
      username: values.username,
      password: values.password,
    });
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="ml-3">Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your username"
                    {...field}
                    className="border border-black rounded-full"
                  />
                </FormControl>
                <FormMessage className="!text-center" />
              </FormItem>
            )}
          />{" "}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="ml-3">Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    {...field}
                    className="border border-black rounded-full"
                  />
                </FormControl>
                <FormMessage className="!text-center" />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full rounded-full">
            Sign up
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
