import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
} from 'react';
import { Observable, Subject } from 'rxjs';
import {
  map,
  buffer,
  debounceTime,
  filter,
  takeUntil,
} from 'rxjs/operators';

import { Controls } from './components/Controls';

const App = () => {
  const [status, setStatus] = useState('stop');
  const [time, setTime] = useState(0);
  console.log(status);
  const stop$ = useMemo(() => new Subject(), []);
  const click$ = useMemo(() => new Subject(), []);
  const start = () => {
    setStatus('start');
  };

  const stop = useCallback(() => {
    setTime(0);
    setStatus('stop');
  }, []);

  const reset = useCallback(() => {
    setTime(0);
    setStatus('start');
  }, []);

  const wait = useCallback(() => {
    click$.next();
    setStatus('wait');
    click$.next();
  }, [click$]);

  useEffect(() => {
    const doubleClick$ = click$.pipe(
      buffer(click$.pipe(debounceTime(300))),
      map((list) => list.length),
      filter((value) => value >= 2),
    );
    const timer$ = new Observable((observer) => {
      let count = 0;
      const intervalId = setInterval(() => {
        observer.next(count += 1);
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    });

    const subscribtion$ = timer$
      .pipe(takeUntil(doubleClick$))
      .pipe(takeUntil(stop$))
      .subscribe({
        next: () => {
          if (status === 'start') {
            setTime((prev) => prev + 1);
          }
        },
      });

    return (() => {
      subscribtion$.unsubscribe();
    });
  }, [status, click$, stop$]);

  return (
    <section className="stopwatch">
      <Controls
        time={time}
        start={start}
        stop={stop}
        reset={reset}
        wait={wait}
      />
    </section>
  );
};

export default App;
