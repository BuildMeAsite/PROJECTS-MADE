import React from 'react'
import ytIcon from './assets/yticon.jpg'


function Header(props) {
  return (
    <div className='header--container'>
        <div className='header--right--section'>
            <button type='button' className="material-symbols-outlined header--menu--icon">
                menu
            </button>
            <img className='yt--icon' alt='' src={ytIcon} onClick={()=>props.handleClicks()}/>
        </div>

        <div className='header--mid--section'>
            <input className='header--search' type='text' placeholder='Search'/>
            <button type='button' className="material-symbols-outlined header--btn--search">
                search
            </button>
        </div>

        <div className='header--left--section'>
            <button type='button' className="material-symbols-outlined header--right--btn" data-bs-toggle="tooltip" data-bs-placement="left" title="Upload your video">
                arrow_upward
            </button>
            <button type='button' className="material-symbols-outlined header--right--btn" data-bs-toggle="tooltip" data-bs-placement="top" title="Notifications">
                notifications
            </button>
            <button type='button' className="material-symbols-outlined header--right--profile" data-bs-toggle="tooltip" data-bs-placement="top" title="Sign In">
                account_circle
            </button>
        </div>
    </div>
  )
}

export default Header