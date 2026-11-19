import styles from "./WrittenLine.module.css";
import type { CSSProperties } from "react";

// Centreline pen strokes on a 32-unit baseline. Each advance leaves room for the next letter.
const letters: Record<string, [number, string]> = {
  H: [24, "M4 32 Q8 19 10 6 M2 22 Q13 18 23 18 M23 5 Q20 16 18 32"],
  i: [8, "M4 19 Q1 28 2 31 Q3 34 8 28 M6 12 l.3 -.5"],
  ",": [6, "M4 30 Q5 34 1 38"],
  I: [17, "M3 8 Q10 6 17 7 M12 7 L6 32 M0 32 Q8 31 13 30"],
  "'": [5, "M4 6 Q4 10 1 13"],
  m: [25, "M2 20 Q4 17 4 20 L1 32 Q11 10 12 21 L9 32 Q20 10 20 21 Q15 38 24 28"],
  P: [22, "M3 32 Q9 16 10 7 M3 12 C12 1 27 4 22 14 Q18 22 7 21"],
  e: [13, "M1 27 Q13 24 10 19 C5 15 -1 27 3 31 Q7 35 14 27"],
  t: [10, "M9 10 Q5 19 3 27 Q1 37 11 28 M1 20 L12 18"],
  r: [12, "M1 23 Q6 14 6 19 L2 32 Q8 15 13 20"],
  "!": [7, "M7 7 L3 25 M2 31 l-.3 .5"],
  W: [32, "M2 9 Q0 21 3 32 Q10 24 16 10 Q12 25 15 32 C23 24 32 11 30 6"],
  l: [10, "M2 26 C15 10 14 -1 8 7 C3 15 -2 32 4 32 Q6 33 11 27"],
  c: [13, "M11 21 C9 14 2 20 2 28 Q2 37 14 27"],
  o: [14, "M10 20 C4 14 -3 31 5 32 C11 33 15 19 10 19 Q8 23 15 23"],
  y: [15, "M4 19 Q-2 42 12 22 L14 19 C11 36 7 48 2 44 Q-2 40 13 30"],
  p: [15, "M5 19 L0 44 M4 29 Q12 11 14 21 Q15 31 6 32 Q10 34 16 28"],
  f: [11, "M1 42 Q3 20 9 8 C15 -1 17 11 5 22 M1 24 L13 21"],
  ".": [5, "M2 31 l-.3 .5"],
};

export function WrittenLine({ text, delay, pace, className }: {
  text: string;
  delay: number;
  pace: number;
  className: string;
}) {
  let width = 0;
  const strokes = [];
  for (const [index, letter] of Array.from(text).entries()) {
    const x = width;
    if (letter === " ") {
      width += 8;
      continue;
    }
    const [advance, d] = letters[letter];
    width += advance;
    strokes.push(
      <path className={styles.stroke} key={index} d={d} transform={`translate(${x} 0)`} pathLength="1"
        style={{ "--pen-delay": `${delay + index * pace}ms`, "--pen-duration": `${pace * 1.4}ms` } as CSSProperties} />
    );
  }
  return (
    <svg aria-hidden="true" className={className} viewBox={`-3 0 ${width + 8} 48`}
      fill="none" stroke="currentColor" strokeWidth="2.15" strokeLinecap="round" strokeLinejoin="round">
      {strokes}
    </svg>
  );
}
