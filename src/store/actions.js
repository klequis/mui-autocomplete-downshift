import { createRequestThunk, logError } from './action-helpers'
import api from 'api'

/* Dev */
// eslint-disable-next-line
import { orange } from 'logger'

// Read postalCode
export const postalCodesReadKey = 'actionKeyReadPostalCodes'

const postalCodesRead = (postalCodes) => {
  // orange('** postalCodesRead')
  return ({
    type: postalCodesReadKey,
    payload: { postalCodes },
  })
}

export const postalCodesReadRequestKey = 'postalCodesReadRequestKey'

export const postalCodesReadRequest = createRequestThunk({
  request: api.postalCodes.read,
  key: postalCodesReadRequestKey,
  success: [ postalCodesRead ],
  failure: [ error => logError(error, postalCodesReadRequestKey) ]
})