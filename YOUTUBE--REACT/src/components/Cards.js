import React from 'react'

function Cards(props) {
  return (
    <div className='card--box'>
        <div className='thumbnail--container' >
            <img className='thumbnail' src={props.videoData.videoThumbnail} alt="" id={props.videoData.id} onClick={(e)=>props.handleClick(e)}/>
            <div className='duration'>{props.videoData.videoDuration}</div>
        </div>
        <div className='card--foot' >
            <img className='author--profile' alt='' src={props.videoData.authorProfile}/>
            <div className='video--description'>
                <span className='video--title'>{props.videoData.videoTitle}</span>
                <span className='author'>
                    {props.videoData.authorName}
                    <span className="material-symbols-outlined checker">
                        check_small
                    </span>
                </span>
                <span className='video-stats'>{`${props.videoData.views} views ${props.videoData.videoAge}`}</span>
            </div>
        </div>
    </div>
  )
}

export default Cards