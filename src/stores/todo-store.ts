import { create } from '../zustand/src';

interface TodoState {
  todos: string[];
}

interface TodoAction {
  addTodo: (todo: string) => void;
  removeTodo: (todo: string) => void;
}

export const useTodoStore = create<TodoState & TodoAction>((set) => ({
  todos: [],
  addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
  removeTodo: (todo) =>
    set((state) => ({ todos: state.todos.filter((t) => t !== todo) })),
}));
