import { create } from '../zustand/src';

interface CountState {
  count: number;
}

interface CountAction {
  increment: () => void;
  decrement: () => void;
}

export const useCountStore = create<CountState & CountAction>((set) => ({
  count: 0,

  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));
