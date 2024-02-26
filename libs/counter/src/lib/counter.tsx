'use client';
import { useState } from 'react';
import styles from './counter.module.css';

/* eslint-disable-next-line */
export interface CounterProps {
  name: string;
  step: number;
}

export function Counter(props: CounterProps) {
  const [count, setCount] = useState(0);
  return (
    <div className={styles['container']}>
      <h1>Welcome to Counter! from {props.name}</h1>
      <button
        onClick={() => {
          setCount(count + props.step);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - props.step);
        }}
      >
        Decrease
      </button>
      <p>{count}</p>
    </div>
  );
}

export default Counter;
