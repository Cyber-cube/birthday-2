import PropTypes from "prop-types"

function Progress({ value }) {
  return (
    <div className={"progress"} style={{
      'display': 'grid',
      /* 'justifyContent': 'center',
      'alignContent': 'center' */
      'placeItems': 'center',
    }}>
      <p style={{color: '#7A1C1C'}}>Move the cards to progress!</p>
      <div style={{
        'height': '10px',
        'width': '300px',
        'border': 'solid 2px #7A1C1C',
        'backgroundColor': '#F8E6CB',
        'borderRadius': '10px'
      }}>
        <div style={
          {
            'position': "relative",
            'height': '100%',
            'backgroundColor': '#E2BF88',
            'width': `${6.25 * value}%`,
            'transition': 'width 2s',
            'borderRadius': '10px'
          }
        }></div>
      </div>
    </div>
  )
}

Progress.propTypes = {
  value: PropTypes.arrayOf(PropTypes.number).isRequired,
}

export default Progress
