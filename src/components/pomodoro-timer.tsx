import React, { useState } from 'react';
import { useInterval } from '../hooks/use-interval';
import { secondToTime } from '../utils/second-to-time';

interface Props {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return <div>Olá mundo! {secondToTime(mainTime)}</div>;
}
