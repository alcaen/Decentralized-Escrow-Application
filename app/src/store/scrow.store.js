import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useEscrowStore = create(
  persist(
    (set, get) => ({
      escrows: [],
      addEscrow: (newScrow) => set({ escrows: [...get().escrows, newScrow] }),
    }),
    {
      name: 'escrow-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
