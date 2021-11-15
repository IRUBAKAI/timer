import React, { useState } from "react";
import DisplayButtons from "./DisplayButtons";
import DisplayComponent from "./DisplayComponent";
import styles from "./Display.module.css";

export default function Display() {
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const [timeInterval, setTimeInterval] = useState();
  const [disabled, setDisabled] = useState();

  function start() {
    setTimeout(() => run(), 300);
    setDisabled("true");
    setTimeInterval(setInterval(run, 1000));
  }

  let updatedHours = time.h;
  let updatedMin = time.m;
  let updatedSec = time.s;

  function run() {
    if (updatedSec === 60) {
      updatedMin++;
      updatedSec = 0;
    }
    if (updatedMin === 60) {
      updatedHours++;
      updatedMin = 0;
    }
    console.log(updatedSec);
    updatedSec++;
    return setTime({ s: updatedSec, m: updatedMin, h: updatedHours });
  }

  function stop() {
    clearInterval(timeInterval);
    setTime({ s: 0, m: 0, h: 0 });
  }

  function wait() {
    clearInterval(timeInterval);
  }

  function reset() {
    clearInterval(timeInterval);
    updatedSec = 0;
    updatedMin = 0;
    start();
    setDisabled("false");
  }

  
  return (
    <div className={styles.content}>
      <div>
        <DisplayComponent time={time} styles={styles} />
      </div>
      <div>
        <DisplayButtons
          disabled={disabled}
          styles={styles}
          start={start}
          stop={stop}
          wait={wait}
          reset={reset}
        />
      </div>
    </div>
  );
}
