import { create } from "zustand";
import { CountSlice, createCountSlice } from "./slices/countSlice";

export const useStore = create<CountSlice>()((...args) => ({
  ...createCountSlice(...args),
}));
