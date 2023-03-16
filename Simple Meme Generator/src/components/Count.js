import React from 'react'

function Count(props) {
    let flipper = props.isON? "toggle_on":"toggle_off"
  return (
    <div className='yel' onClick={props.handleClick}>
        <span className="material-symbols-outlined" >
            {flipper}
        </span>
    </div>
  )
}

export default Count