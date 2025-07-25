import { create } from "zustand";

export const useStore = create((set) => ({
  count: 1,
  wishlist: [],

  inc: () => set((state) => ({ count: state.count + 1 })),

  toggleWishlist: (payload) =>
    set((state) => {
      return { wishlist: [...state.wishlist, payload] };
    }),
}));
