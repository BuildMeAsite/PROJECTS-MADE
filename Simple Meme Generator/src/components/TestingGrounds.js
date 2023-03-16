import React from 'react'
import Count from './Count'


function TestingGrounds() {

  const [toogleState,setToogle] = React.useState(false)
  function toogle(){
    setToogle((newState)=> newState = !newState)
  }

  return (
    <>
    <button type='button' onClick={toogle}>ON/OFF</button>
      <Count isON = {toogleState} handleClick={toogle}/>
    </>
  )
}

export default TestingGrounds