import React from "react";
import { Portal } from "react-portal";
import useInterval from "./useInterval";
import "./App.css";

const ONE_SECOND = 1000; // in milliseconds

function App() {
  const [count, setCount] = React.useState(10);
  const showModal = React.useMemo(() => count <= 5, [count]);

  useInterval(() => {
    setCount(c => c - 1);
  }, ONE_SECOND);

  return (
    <>
      {showModal ? (
        <Portal>
          <div data-testid="modal">
            <p>Look mom, I'm in a modal!</p>
          </div>
        </Portal>
      ) : (
        <p>No modal to show yet</p>
      )}
    </>
  );
}

export default App;
