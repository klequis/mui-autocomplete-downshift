import React from 'react'
import { deburr } from 'lodash/deburr'
import { connect } from 'react-redux'
import { postalCodesReadRequest } from 'store/actions'
// import * as selectors from 'store/selectors'
import { getPostalCodes } from 'store/selectors'
import PostalCodesPicker from './PostalCodesPicker'
import { suggestions } from './suggestions'

// eslint-disable-next-line
import { green } from 'logger'

const postalCodes = async (props, value) => {
  if (value.length > 2) {
    // green('** get the data')
    await props.postalCodesReadRequest(value)
  }
}

const PostalCodes = (props) => {
  green('PostalCodes: props', props)
  // green('actions', actions)

  const getSuggestions = (value = '') => {
    green('value')
    // green('** BEFORE getPostalCodes()')
    // postalCodes(props, value)
    // green('** AFTER getPostalCodes()')
    const inputLength = value.inputLength
    return inputLength === 0
      ? []
      : props.postalCodes











    // green('value', value)
    // if (valueLength > 2) {
    //   green('** get the data')
    //   await this.props.postalCodesReadRequest(value)
    // }
    // green('props.postalCodes', props.postalcodes)
    // return props.postalCodes
  }
  return (
    <div>
      <PostalCodesPicker
        getSuggestions={getSuggestions}
      />

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    postalCodes: getPostalCodes(state)
  }
}

export default connect(
  mapStateToProps,
  { postalCodesReadRequest },
)(PostalCodes)