"use client";

import queryClient from "@/utils/trpc/query-client";
import { trpc } from "@/utils/trpc/trpc";
import React from "react";
import { useFormState } from "react-dom";

export type State = {
  name?: string;
  email?: string;
};

const UserForm = () => {
  //TODO: refactor with hook form
  const action = (currentState: State, formData: FormData) => {
    const newData = {
      ...currentState,
      name: formData.get("name") as string,
      email: formData.get("email") as string,
    };

    handleSubmit(newData as State);

    return newData;
  };

  const [state, formAction] = useFormState<State, FormData>(action, {
    name: "",
    email: "",
  });

  const { mutate } = trpc.createUser.useMutation({
    onSettled: () => {
      formAction(new FormData());
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [
          ["getUsers"],
          { input: { limit: 10, page: 1 }, type: "query" },
        ],
      });
    },
  });

  const handleSubmit = async (state: State) => {
    mutate({
      name: state.name as string,
      email: state.email as string,
    });
  };

  return (
    <div className="bg-gray-300 p-8 pt-4 rounded shadow-md max-w-2xl w-full">
      <h2 className="text-2xl font-semibold mb-4">Submit Form</h2>

      <form action={formAction} className="space-y-4">
        <div className="flex space-x-4 items-end">
          <div className="w-1/2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="w-1/2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="w-1/4">
            <button
              type="submit"
              className="w-full block align-bottom bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
