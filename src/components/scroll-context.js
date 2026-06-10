import { createContext, useContext } from 'react'

// Page-scroll context: overall scroll progress (0..1) and a scrollTo helper.
// Kept in its own module (no component export) so the provider file stays
// fast-refresh friendly.
export const ScrollContext = createContext({
  progress: 0,
  scrollTo: () => {},
})

export const usePageScroll = () => useContext(ScrollContext)
