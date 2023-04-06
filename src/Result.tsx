import classNames from "classnames";
import { ViewState } from "./App";

type Props = {
  chameleon: boolean;
  optionIndex: number;
  viewState: ViewState;
  onNext: () => void;
};

export const Result = ({
  viewState: { hidden, playerIndex },
  optionIndex,
  chameleon,
  onNext,
}: Props) => {
  console.log("render");
  return (
    <div
      className={classNames(
        "flex flex-col justify-center fixed inset-0",

        hidden ? "bg-amber-600" : "bg-sky-600"
      )}
    >
      <div className="m-4 flex flex-col space-y-4 items-stretch">
        <h1>Player: {playerIndex + 1}</h1>
        {hidden ? (
          <h2 className="text-xl">The card is hidden, press reveal to show</h2>
        ) : chameleon ? (
          <h2 className="text-xl">You are the chameleon!</h2>
        ) : (
          <h2 className="text-xl">
            The chosen card is number {optionIndex + 1}
          </h2>
        )}

        <button className="bg-slate-700 w-44 m-auto" onClick={onNext}>
          {hidden ? "Reveal" : "Hide"}
        </button>
      </div>
    </div>
  );
};
