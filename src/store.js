//store.js
import { create } from 'zustand';

const useStore = create((set, get) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    })),
  countPendingTasks: () => {
    const tasks = get().tasks; // Use 'get()' to access the current state
    return tasks.filter((task) => !task.completed).length;
  },
}));

export default useStore;


