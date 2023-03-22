import React from 'react'
import Comments from './Comments'
import VerticalCards from './VerticalCards'

function Containers(props) {

  const [showStateMenu,setShowMenu] = React.useState(false)
  const [showStateSub,setShowSub] = React.useState(false)

  let randomCount = Math.floor(Math.random()*999)

  let randomComments = []
  for (let index = 0; index < randomCount; index++) {
    randomComments.push(<Comments />)
  }


  function showExpandSub() {
    setShowSub(prevState=>prevState = !prevState)
  }

  function showExpandMenu() {
    setShowMenu(prevState=>prevState = !prevState)
  }

  function loopComments(){
    for (let index = 0; index < randomCount; index++) {
             
    }
  }

    let videos = props.collections.map((obj,index)=>{
      return(
        <VerticalCards key={index} collected = {obj}  handleClicks = {props.handleClicksVid}/>
      )
    })


  let subbedStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  textAlign: 'center',
  height: '45px',
  border: 'none',
  padding: '0 0 0 10px',
  gap: '2px',
  borderTopLeftRadius: '30px',
  borderBottomLeftRadius: '30px'
  }

  return (
    <div className='video--container'>
        <div className='videoWrapper'>
         <iframe  id='videoPlayer' className='myVideo' src={props.collections[props.targetVideo].videoURL} title="YouTube video player"  ></iframe>
        </div>
        <div className='video--grid'>
          <div className='box1'>
            <span className='vid--tittle'>{props.collections[props.targetVideo].videoTitle}</span>
            <div className='author--section'>
              <div className='author--section--child1'>
                  <img className='video-author' alt='' src={props.collections[props.targetVideo].authorProfile}/>
                  <div className='author--stat'>
                    <span className='container--author'>{props.collections[props.targetVideo].authorName}
                      <span className="material-symbols-outlined checker">
                          check_small
                      </span>
                    </span>
                    <span className='subscribers'>{`${props.collections[props.targetVideo].subscribers} subscribers`}</span>
                  </div>
                  {(()=>{
                    if (props.collections[props.targetVideo].subscribed) {
                      return(
                        <>
                          <button className='subed--button' type='button' id={props.collections[props.targetVideo].id} onClick={(e)=>props.handleClicks(e)} style={subbedStyle}>
                            <span className="material-symbols-outlined sub--notif">
                              notifications
                            </span>
                            <span>Subscribed</span>
                          </button>
                          <button className="material-symbols-outlined sub--more" onClick={showExpandSub}>
                            expand_more
                            {(()=>{
                              if (showStateSub) {
                                return(
                                  <div className='dropDown'>
                                  <span className='expanded'>
                                    <span className="material-symbols-outlined">
                                      notifications_active
                                    </span>
                                    All
                                  </span>
                                  <span className='expanded'>
                                    <span className="material-symbols-outlined">
                                      notifications
                                    </span>
                                    Personalized
                                  </span>
                                  <span className='expanded'>
                                    <span className="material-symbols-outlined">
                                    notifications_off
                                    </span>
                                    None
                                  </span>
                                </div>
                                )
                              }
                            })()}
                          </button>
                        </>
                      )
                    }
                    return(
                      <button className='btn btn-dark subs--button' type='button' id={props.collections[props.targetVideo].id} onClick={(e)=>props.handleClicks(e)}>Subscribe</button>
                    )
                  })()}
              </div>
              <div className='author--section--child2'>
                <button type='button' className='reaction-btn--like'>
                  <span className="material-symbols-outlined">
                    thumb_up
                  </span>
                  Like
                </button>
                <button type='button'  className='reaction-btn--unlike'>
                  <span className="material-symbols-outlined">
                   thumb_down
                  </span>
                </button>
                <button type='button' className='reaction-btn--share'>
                  <span className="material-symbols-outlined">
                    forward
                  </span>
                  Share
                </button>
                <button className='reaction--btn--menu' onClick={showExpandMenu}>
                  <span className="material-symbols-outlined">
                    more_horiz
                  </span>
                  {(()=>{
                  if (showStateMenu) {
                    return(
                      <div className='dropDownMenu'>
                      <span className='expanded'>
                        <span className="material-symbols-outlined">
                          download
                        </span>
                        Download
                      </span>
                      <span className='expanded'>
                        <span className="material-symbols-outlined">
                          cut
                        </span>
                        Clip
                      </span>
                      <span className='expanded'>
                        <span className="material-symbols-outlined">
                        playlist_add
                        </span>
                        Save
                      </span>
                      <span className='expanded'>
                        <span className="material-symbols-outlined">
                        flag
                        </span>
                        Report
                      </span>
                    </div>
                    )
                  }
                })()}
                </button>
                
              </div>
            </div>
            <div className='video--tag'>
              <strong>{`${props.collections[props.targetVideo].views} views ${props.collections[props.targetVideo].videoAge} `}</strong>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quia, accusantium perferendis explicabo, culpa et maxime quisquam hic, a dolore magni minus praesentium ab similique voluptate minima ut nesciunt nam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae quia, accusantium perferendis explicabo, culpa et maxime quisquam hic, a dolore magni minus praesentium ab similique voluptate minima ut nesciunt nam.</div>
          </div>
          <div className='box2'>
              {videos}
          </div>
          <div className='box3'>
            <div className='comments-control'>
              <span className='comments--count'>
                {`${randomCount} Comments`}
              </span>
              <span className='sorter'>
                <span className="material-symbols-outlined sort--icon">
                 sort
                </span>
                Sort by
              </span>
            </div>
            <div className='comment--box'>
              <span className="material-symbols-outlined profile--comment">
               account_circle
              </span>
              <input className='comment--input' type='text' placeholder='Add a comment'/>
            </div>
            <div className='comments'>
              {
                randomComments
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Containers