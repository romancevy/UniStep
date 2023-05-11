import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { MouseEvent } from "react";

interface TaskProps {
  value: string;
  handleCompletedTask: (event: MouseEvent) => Promise<void>;
}

const Task = ({ value, handleCompletedTask }: TaskProps) => {
  return (
    <>
      <h1 className="text-3xl sm:text-6xl font-bold tracking-wide text-center">
        👉 {value} 👈
      </h1>
      <button
        className="flex items-center space-x-3 text-2xl bg-indigo-600 dark:bg-indigo-500 px-6 py-3 rounded-md text-slate-200 focus:outline-none focus-visible:ring-4 ring-ingigo-600 dark:ring-ingigo-500 ring-offset-4 ring-offset-slate-200 dark:ring-offset-slate-800 hover:opacity-80 transition-opacity disabled:opacity-50"
        autoFocus
        onClick={handleCompletedTask}
      >
        <span className="pointer-events-none">Done</span>
        <CheckCircleIcon className="w-12 h-12 pointer-events-none" />
      </button>
    </>
  );
};
export default Task;
