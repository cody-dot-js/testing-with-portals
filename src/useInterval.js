import React from "react";

/**
 * Declarative hook for setInterval
 *
 * @param {function} callback - A function to be executed every delay milliseconds.
 * The function is not passed any arguments, and no return value is expected.
 * @param {number} delay - The time in ms the timer should delay in between
 * executions of the specified function
 *
 * @see credit Dan Abramov: https://overreacted.io/making-setinterval-declarative-with-react-hooks/#just-show-me-the-code
 */
function useInterval(callback, delay) {
  const savedCallback = React.useRef();
  const intervalDelay = parseInt(delay, 10) || -1;

  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    // eslint-disable-line consistent-return
    function tick() {
      savedCallback.current();
    }

    if (intervalDelay >= 0) {
      const id = setInterval(tick, intervalDelay);
      return () => clearInterval(id);
    }
  }, [delay, intervalDelay]);
}

export default useInterval;
