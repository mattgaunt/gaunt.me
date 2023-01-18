import { v4 as uuid } from 'uuid'

export function useId() {
  return uuid()
}
