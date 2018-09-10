// eslint-disable-next-line
import { yellow } from 'logger'

export const getPostalCodes = (state) => {
  const r = state.postalCodes || []
  return r
}
