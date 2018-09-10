import fetchPostalCodes from './fetchPostalCodes'

/* Dev */
// eslint-disable-next-line
import { pink } from 'logger'

export default {
  postalCodes: {
    read: async (searchString) => {
      const a = await fetchPostalCodes(searchString)
      pink('a', a)
      if (a === undefined) {
        return []
      }
      return a
    }
  },
}
