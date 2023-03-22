import React from 'react'

function VerticalCards(props) {
  return (
    <div className='vertical--container'>
        <img id={props.collected.id} className='vertical--image' alt='' src={props.collected.videoThumbnail} onClick={(e)=>props.handleClicks(e)}/>
        <div className='video--desc'>
          <span className='vertical--title'>{props.collected.videoTitle}</span>
          <span>{props.collected.authorName}</span>
          <span>{`${props.collected.views} views ${props.collected.videoAge}`}</span>
        </div>
    </div>
  )
}

export default VerticalCards