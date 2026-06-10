// Gold line-art symbols for the five sila. Each is a self-drawing <motion.svg>
// (pathLength) that accepts `size`, `className`, `stroke`, `strokeWidth`, plus
// any extra motion props. Use SILA_SYMBOLS[nomor] to pick one by sila number.
export { default as StarSymbol } from './StarSymbol'
export { default as ChainSymbol } from './ChainSymbol'
export { default as TreeSymbol } from './TreeSymbol'
export { default as BantengSymbol } from './BantengSymbol'
export { default as PadiKapasSymbol } from './PadiKapasSymbol'

import StarSymbol from './StarSymbol'
import ChainSymbol from './ChainSymbol'
import TreeSymbol from './TreeSymbol'
import BantengSymbol from './BantengSymbol'
import PadiKapasSymbol from './PadiKapasSymbol'

export const SILA_SYMBOLS = {
  1: StarSymbol,
  2: ChainSymbol,
  3: TreeSymbol,
  4: BantengSymbol,
  5: PadiKapasSymbol,
}
