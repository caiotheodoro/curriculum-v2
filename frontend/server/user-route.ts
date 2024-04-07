import { createUserSchema, filterQuery } from '~/server/user-schema';
import { createUserHandler, getUsersHandler } from '~/server/user-controller';
import { t } from '@/utils/trpc/trpc-server';

const userRouter = t.router({
  createUser: t.procedure
    .input(createUserSchema)
    .mutation(({ input }) => createUserHandler({ input })),
  getUsers: t.procedure
    .input(filterQuery)
    .query(({ input }) => getUsersHandler({ filterQuery: input })),
});

export default userRouter;
