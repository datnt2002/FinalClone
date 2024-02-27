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

const formSchema = z
  .object({
    email: z.string().email(),
    username: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    phoneNumber: z.string().min(9).max(11),
    password: z.any(),
    cfPassword: z.any(),
  })
  .refine(
    (data) => {
      console.log(data);

      return data?.password === data?.cfPassword;
    },
    {
      message: "Password not match",
      path: ["cfPassword"],
    }
  );

const RegisterForm = (props: Props) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      password: "",
      cfPassword: "",
    },
  });

  const registerAction = useUserStore((state) => state.registerNewUser);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    registerAction({
      email: values.email,
      password: values.password,
    });
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="ml-3">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
                    {...field}
                    className="border border-black rounded-full"
                  />
                </FormControl>
                <FormMessage className="!text-center" />
              </FormItem>
            )}
          />
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
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="ml-3">Phone Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your phone number"
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
            name="firstName"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="ml-3">First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your first name"
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
            name="lastName"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="ml-3">Last Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your last name"
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
                    placeholder="Enter your password"
                    {...field}
                    className="border border-black rounded-full"
                  />
                </FormControl>
                <FormMessage className="!text-center" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cfPassword"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="ml-3">Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your password confirm"
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

export default RegisterForm;
