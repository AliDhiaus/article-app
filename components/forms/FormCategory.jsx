"use client";
import React, { useEffect } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const FormCategory = ({ form }) => {
  return (
    <>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-gray-700 dark:text-gray-200 font-medium">
              Name Category
            </FormLabel>
            <FormControl>
              <Input
                placeholder="Enter name"
                {...field}
                className="mt-1"
              />
            </FormControl>
            <FormMessage>{form.formState.errors.name?.message}</FormMessage>
          </FormItem>
        )}
      />
    </>
  );
};

export default FormCategory;
