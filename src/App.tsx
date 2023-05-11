import CustomForm from "./components/CustomForm";
import { useState } from "react";
import Task from "./components/Task";
import { ChangeEvent, FormEvent } from "react";

// confetti library
import JSConfetti from "js-confetti";
const jsConfetti: JSConfetti = new JSConfetti();

const getSuccessMessage = (): string => {
  const messages = [
    "Congrats!",
    "Great job!",
    "Don’t ya feel great?!",
    "Up, up, and up!",
    "You completed a task, want a medal?",
    "Did you though?",
    "Don’t feel like you tried your best…",
    "Look at you, doing the bare minimum.",
    "Wow, you actually did something right.",
    "Impressive, you completed one whole task.",
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};

function App(): JSX.Element {
  const [value, setValue] = useState("");
  const [isCompleted, setIsCompleted] = useState(true);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setIsCompleted(false);
  };

  const handleInput = (e: ChangeEvent<HTMLInputElement>): void => {
    setValue((e.target as HTMLInputElement).value);
  };

  const handleCompletedTask = async (event: MouseEvent): Promise<void> => {
    const button = event.target as HTMLButtonElement;

    if (button instanceof HTMLButtonElement) {
      button.disabled = true;
      setValue(getSuccessMessage());
      await jsConfetti.addConfetti();
      button.disabled = false;
      setValue("");
      setIsCompleted(true);
    }
  };

  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-900 text-slate-900 dark:text-slate-200">
      <div className="grid place-items-center gap-8 m-8">
        {isCompleted && (
          <CustomForm
            value={value}
            handleSubmit={handleSubmit}
            handleInput={handleInput}
          />
        )}
        {!isCompleted && (
          <Task value={value} handleCompletedTask={handleCompletedTask} />
        )}
      </div>
    </main>
  );
}

export default App;
