import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";

interface CustomFormProps {
  value: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomForm = ({ value, handleInput, handleSubmit }: CustomFormProps) => {
  return (
    <>
      <h1 className="text-3xl sm:text-6xl font-mono font-bold tracking-wide">
        UniStep
      </h1>
      <h3 className="text-2xl font-mono sm:text-4xl italic">
        One task, one step to success
      </h3>
      <form
        className="flex ring-6 rounded-lg ring-slate-200 focus-within:ring-indigo-600 focus-within:ring-offset-4 bg-slate-200 ring-offset-slate-200 dark:ring-offset-slate-800"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter One Thing"
          maxLength={parseInt("64")}
          autoFocus
          required
          value={value}
          onInput={handleInput}
          className="bg-inherit rounded-lg font-sans text-slate-800 py-2 px-6 focus:outline-none text-xl sm:text-2xl placeholer:text-slate-400 caret-indigo-600 appearance-none w-full"
        />
        <button className="bg-inherit rounded-md font-sans text-slate-800 py-2 pr-6 focus:outline-none focus:text-indigo-600 hover:text-indigo-600 ">
          <ArrowRightCircleIcon className="h-12 w-12 pointer-events-none" />
        </button>
      </form>
    </>
  );
};
export default CustomForm;
