import React     from 'react'
import PropTypes from 'prop-types'
import Radium    from 'radium'
import paths     from './paths'

const baseStyles = {
  position: 'relative',
  speak: 'none',
  lineHeight: '1'
}

const Icon = props => {
  const { style, onClick, name } = props
  const path = paths[name]

  return (
    <i
      style={[baseStyles, style]}
      aria-hidden={true}
      onClick={onClick}
    >
      {path}
    </i>
  )
}

Icon.propTypes = {
  /**
  * String name of icon - ex 'cart'
  */
  name: PropTypes.oneOf(Object.keys(paths)),
  /** Optional style overrides */
  style: PropTypes.object,
  /** Callback function called after button click
   * @param {SyntheticEvent} event The react `SyntheticEvent`
  */
  onClick: PropTypes.func
}

export default Radium(Icon)
