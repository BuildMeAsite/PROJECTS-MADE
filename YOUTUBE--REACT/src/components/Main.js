import React from 'react'
import Cards from './Cards'




function Main(props) {

  let getCat = props.currentCat.filter(obj => obj.isActive === true)

  let showVideo = props.collections.map((obj,index)=>{
    if (getCat[0].cat === 'All') {
      return(
        <Cards key={index} videoData={obj} handleClick={props.handleClicks}/>
      )
    } else if (getCat[0].cat === obj.cat) {
      return(
        <Cards key={index} videoData={obj} handleClick={props.handleClicks}/>
      )
    }
    return(
      <></>
    )
  })

  return (
    <div className='main'>
      {showVideo}
    </div>
  )
}

export default Main