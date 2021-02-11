import React from 'react';
import { secondToMinutes } from '../utils/second-to-minutes';

interface Props {
  mainTime: number;
}

export function Timer(props: Props): JSX.Element {
  return <div className="timer">{secondToMinutes(props.mainTime)}</div>;
}
