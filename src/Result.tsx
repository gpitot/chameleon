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
  return (
    <div className="flex flex-col space-y-4">
      <h1>Player: {playerIndex + 1}</h1>
      {hidden ? (
        <h1>The card is hidden, press reveal to show</h1>
      ) : chameleon ? (
        <h1>You are the chameleon!</h1>
      ) : (
        <h1>The chosen card is number {optionIndex + 1}</h1>
      )}

      <button className="bg-green-700" onClick={onNext}>
        {hidden ? "Reveal" : "Hide"}
      </button>
    </div>
  );
};
