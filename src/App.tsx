import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Result } from "./Result";

export type ViewState = {
  playerIndex: number;
  hidden: boolean;
};

const initViewState = {
  playerIndex: 0,
  hidden: true,
};

function App() {
  const [numPlayers, setNumPlayers] = useState(5);
  const [numOptions, setNumOptions] = useState(16);
  const [optionSelected, setOptionSelected] = useState<number>();
  const [chameleonPlayer, setChameleonPlayer] = useState<number>();
  const [viewState, setViewState] = useState<ViewState>();

  const next = () => {
    setViewState((viewState) => {
      if (viewState === undefined) return undefined;
      if (viewState.hidden) {
        return {
          ...viewState,
          hidden: false,
        };
      }
      if (viewState.playerIndex >= numPlayers - 1) return undefined;
      return {
        playerIndex: viewState.playerIndex + 1,
        hidden: true,
      };
    });
  };

  const begin = () => {
    setOptionSelected(Math.floor(Math.random() * numOptions));
    setChameleonPlayer(Math.floor(Math.random() * numPlayers));
    setViewState(initViewState);
  };

  if (viewState !== undefined && optionSelected !== undefined) {
    return (
      <Result
        viewState={viewState}
        optionIndex={optionSelected}
        chameleon={viewState.playerIndex === chameleonPlayer}
        onNext={next}
      />
    );
  }

  return (
    <div className="flex flex-col space-y-4">
      <h1>Chameleon</h1>

      <div className="flex flex-col space-y-2 justify-start items-stretch">
        <label>How many players?</label>
        <input
          type="number"
          className="p-2"
          value={numPlayers}
          onChange={(e) => setNumPlayers(Number(e.target.value))}
        />
      </div>
      <div className="flex flex-col space-y-2 justify-start items-stretch">
        <label>How many options?</label>
        <input
          type="number"
          className="p-2"
          value={numOptions}
          onChange={(e) => setNumOptions(Number(e.target.value))}
        />
      </div>
      <button className="bg-green-700" onClick={begin}>
        Begin round
      </button>
    </div>
  );
}

export default App;
