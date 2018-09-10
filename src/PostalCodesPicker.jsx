import React from 'react'
import Downshift from 'downshift'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import { renderInput, renderSuggestion } from './helpers'
import { styles } from './styles'

// eslint-disable-next-line
import { green } from 'logger'

// const INPUT_NAME = 'postalCode'
// const REQUEST_LIMIT = 3

// const localOnChange = async (event, value) => {
//   const valueLength = value.length

//   green('value', value)
//   if (valueLength > 2) {
//     green('** get the data')
//     await this.props.postalCodesReadRequest(value)
//   }

// }

const PostalCodesPicker = ({ classes, getSuggestions }) => {
  green('getSuggestions', getSuggestions())
  return (
    <div className={classes.root}>
      <Downshift
        onChange={item => console.log(item)}
        id="downshift-simple"
      >
        {({
          getInputProps,
          getItemProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          selectedItem,
        }) => (
          <div className={classes.container}>
            {renderInput({
              fullWidth: true,
              classes,
              InputProps: getInputProps({
                placeholder: 'Search a country (start with a)',
              }),
            })}
            <div {...getMenuProps()}>
              {isOpen ? (
                <Paper className={classes.paper} square>
                  {getSuggestions(inputValue).map((suggestion, index) =>
                    renderSuggestion({
                      suggestion,
                      index,
                      itemProps: getItemProps({ item: suggestion.label }),
                      highlightedIndex,
                      selectedItem,
                    }),
                  )}
                </Paper>
              ) : null}
            </div>
          </div>
        )}
      </Downshift>
    </div>
  )
}

export default withStyles(styles)(PostalCodesPicker)

