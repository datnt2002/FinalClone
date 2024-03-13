"use client";
import React, { useEffect } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormState } from "react-hook-form";
import { useRouter } from "next/navigation";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "src/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import useUserStore from "@/store/store";

const formSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const {
    setError,
    clearErrors,
    watch,
    formState: { errors },
  } = form;
  const { isValid, isDirty } = useFormState(form);
  console.log(errors);

  // if (isDirty) {
  //   clearErrors("root");
  // }

  const loginAction = useUserStore((state) => state.login);
  const user = useUserStore((state) => state.user);
  const router = useRouter();

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    loginAction({
      username: values.username,
      password: values.password,
      router,
      setError,
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
          {errors.root?.message && <p>{errors.root.message}</p>}
          <Button
            disabled={!isValid}
            type="submit"
            className="w-full rounded-full"
          >
            Sign in
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
