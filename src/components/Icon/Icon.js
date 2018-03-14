import React     from 'react'
import PropTypes from 'prop-types'
import Radium    from 'radium'
import paths     from './paths'

const styles = {
  svg: {
    display: 'inline-block',
    verticalAlign: 'middle',
    transform: 'rotate(180deg)',
  },
  path: {
    fill: '#333',
  },
  root: {
    position: 'relative',
    speak: 'none',
  },
}

const Icon = ({ style, onClick, name, size }) => (
  <i
    style={[styles.root, style]}
    aria-hidden={true}
    onClick={onClick}
  >
    <svg style={styles.svg} width={size} height={size} viewBox='0 0 512 512' preserveaspectratio='none' xmlns='http://www.w3.org/2000/svg'>
      <path style={styles.path} d={paths[name]} />
    </svg>
  </i>
)

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
  onClick: PropTypes.func,
  /** size of svg width & height */
  size: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.number
  ])
}

Icon.defaultProps = {
  size: '16',
}


export default Radium(Icon)
