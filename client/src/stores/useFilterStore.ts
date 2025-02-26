import { create } from 'zustand';

type FilterState = {
  make?: string;
  body?: string;
  year?: number;
  price?: number;
};

export const useFilterStore = create<FilterState>((set) => ({
  make: undefined,
  body: undefined,
  year: undefined,
  price: undefined,
  set: () =>
    set((state) => ({
      make: state.make,
      body: state.body,
      year: state.year,
      price: state.price
    }))
}));
