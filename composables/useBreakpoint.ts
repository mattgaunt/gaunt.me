import { breakpointsTailwind } from '@vueuse/core'

export function useBreakpoint() {
  const breakpoints = useBreakpoints(breakpointsTailwind)

  const smAndLarger = breakpoints.greater('sm')
  const mdAndLarger = breakpoints.greater('md')
  const lgAndLarger = breakpoints.greater('lg')
  const mdAndSmaller = breakpoints.smaller('lg')

  return {
    breakpoints,
    smAndLarger,
    mdAndLarger,
    lgAndLarger,
    mdAndSmaller,
  }
}
