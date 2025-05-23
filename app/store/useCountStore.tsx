import { create } from 'zustand'


export type Store = {
 count: number
 inc: () => void
}


export const useCountStore = create<Store>()((set) => ({
 count: 1,
 inc: () => set((state) => ({ count: state.count + 1 })),
}))