import UserForm from "@/app/components/molecules/user-form";
import ListUsers from "@/app/components/molecules/list-user";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "@/utils/query/hydrate-client";
import { createSSRHelper } from "@/app/api/trpc/trpc-router";
export default async function Home() {
  const helpers = createSSRHelper();
  await helpers.getUsers.prefetch({ limit: 10, page: 1 });
  return (
    <Hydrate state={dehydrate(helpers.queryClient)}>
      <UserForm />
      <ListUsers />
    </Hydrate>
  );
}
