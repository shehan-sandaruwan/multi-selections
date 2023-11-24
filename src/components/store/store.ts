import { configureStore } from "@reduxjs/toolkit";
import outcomeHistorySelecterSlice from "./outcomeHistorySelecterSlice";
import outcomeSelecterSlice from "./outcomeSelecterSlice";
// ...

const store = configureStore({
  reducer: {
    selectionHistory: outcomeHistorySelecterSlice,
    selection: outcomeSelecterSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
