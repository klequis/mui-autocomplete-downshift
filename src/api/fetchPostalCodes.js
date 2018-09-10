import pDebounce from 'p-debounce'
import { fetchJson } from './api-helpers'
import { red } from 'logger'

/* Dev */
// eslint-disable-next-line
import { pink } from 'logger'

const fetchPostalCodes = pDebounce(

  async (searchString) => {
    try {
      const data = await fetchJson(
        `/location/postal-codes/${searchString}`,
        {
          method: 'GET',
          body: JSON.strinify
        }
      )
      pink('fetchPostalCodes: data.data', data.data)
      return data.data
    }
    catch (e) {
      red('api.postalCodes.read', e)
    }
  },
  100
)

export default fetchPostalCodes