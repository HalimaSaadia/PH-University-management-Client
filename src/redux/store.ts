import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import { baseApi } from "./api/baseAPi";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath] : baseApi.reducer, 
    auth: authSlice,
    
  },
  middleware: (defaultMiddlewares) => defaultMiddlewares().concat(baseApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
