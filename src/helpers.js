import React from 'react'
import PropTypes from 'prop-types'
import deburr from 'lodash/deburr'
// import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'
// import * as selectors from 'store/selectors'

// eslint-disable-next-line
import { green } from 'logger'

const suggestions = []

export const renderInput = (inputProps) => {
  const { InputProps, classes, ref, ...other } = inputProps
  green('renderInput: inputProps', inputProps)

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
        },
        ...InputProps,
      }}
      {...other}
    />
  )
}

export const renderSuggestion = ({ suggestion, index, itemProps, highlightedIndex, selectedItem }) => {
  const isHighlighted = highlightedIndex === index
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.label}
    </MenuItem>
  )
}
renderSuggestion.propTypes = {
  highlightedIndex: PropTypes.number,
  index: PropTypes.number,
  itemProps: PropTypes.object,
  selectedItem: PropTypes.string,
  suggestion: PropTypes.shape({ label: PropTypes.string }).isRequired,
}

export const getSuggestions = (value) => {
  const inputValue = deburr(value.trim()).toLowerCase()
  const inputLength = inputValue.length
  let count = 0

  return inputLength === 0
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 10 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue

        if (keep) {
          count += 1
        }
        return keep
      })
}
