import { create } from '../zustand/src';

interface CountState {
  count: number;
}

interface CountAction {
  increment: () => void;
  decrement: () => void;
}

export const useCountStore = create<CountState & CountAction>((setState) => ({
  count: 0,

  increment: () => setState((state) => ({ count: state.count + 1 })),
  decrement: () => setState((state) => ({ count: state.count - 1 })),
}));

// export const useCountStore = create<CountState & CountAction>(
//   (setState, getState, { subscribe }) => ({
//     count: 0,

//     increment: () => {
//       console.log('Current count:', getState().count);
//       setState((state) => ({ count: state.count + 1 }));
//     },
//     decrement: () => setState((state) => ({ count: state.count - 1 })),
//   })
// );

// interface CountState {
//   count: number;
// }

// interface CountAction {
//   increment: () => void;
//   decrement: () => void;
//   subscribeToCountChanges: (listener: (count: number) => void) => () => void;
// }

// export const useCountStore = create<CountState & CountAction>(
//   (setState, getState, store) => ({
//     count: 0,

//     increment: () => setState((state) => ({ count: state.count + 1 })),
//     decrement: () => setState((state) => ({ count: state.count - 1 })),

//     subscribeToCountChanges: (listener) => {
//       console.log('subscribeToCountChanges listener>>', listener);

//       // subscribe 메서드를 사용하여 상태 변경을 구독
//       const unsubscribe = store.subscribe((state) => {
//         listener(state.count);
//       });
//       // 구독 해제 함수를 반환
//       return unsubscribe;
//     },
//   })
// );
