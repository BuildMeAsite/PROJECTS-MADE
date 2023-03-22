import React from 'react'



function Navigation(props) {


    let userSubs = props.collections.map((obj)=>{
        if (obj.subscribed) {
            return (
                <div className='sub-channel'>
                    <img className='sub--profile' alt='' src={obj.authorProfile}/>
                    <span className='sub--name'>{obj.authorName}</span>
                </div>
            )
        }
    })


  return (
    <nav className='navigation--container'>
        <section className='nav--section'>
            <button className='nav--button'>
                <span className="material-symbols-outlined nav--btn">
                    home
                </span>
                <span className='btn--title'>Home</span>
            </button>
            <button className='nav--button'>
                <span className="material-symbols-outlined nav--btn">
                    movie
                </span>
                <span className='btn--title'>Shorts</span>
                
            </button>
            <button className='nav--button'>
                <span className="material-symbols-outlined nav--btn">
                    subscriptions
                </span>
                <span className='btn--title'>Subscriptions</span>
                
            </button>
        </section>

        <section className='nav--section'>
            <button className='nav--button'>
                <span className="material-symbols-outlined nav--btn">
                    video_library
                </span>
                <span className='btn--title'>Library</span>
                
            </button>
            <button className='nav--button'>
                <span className="material-symbols-outlined nav--btn">
                    history
                </span>
                <span className='btn--title'>History</span>
                
            </button>
            <button className='nav--button'>
                <span className="material-symbols-outlined nav--btn">
                    slideshow
                </span>
                <span className='btn--title'>Your videos</span>
            </button>
            <button className='nav--button'>
                <span className="material-symbols-outlined nav--btn">
                    pace
                </span>
                <span className='btn--title'>Watch later</span>
                
            </button>
        </section>
 
        <section className='nav--section'>
            <span className='nav--title'>Subscriptions</span>
            {userSubs}
        </section>
        <section className='nav--section'>
            <span className='nav--title'>Explore</span>
            <button className='nav--button'>
                <span className="material-symbols-outlined nav--btn">
                    local_fire_department
                </span>
                <span className='btn--title'>Trending</span>
                
            </button>
            <button className='nav--button'>
                <span className="material-symbols-outlined nav--btn">
                    music_note
                </span>
                <span className='btn--title'>Music</span>
                
            </button>
            <button className='nav--button'>
                <span className="material-symbols-outlined nav--btn">
                    theaters
                </span>
                <span className='btn--title'>Movies</span>
                
            </button>
            <button className='nav--button'>
                <span className="material-symbols-outlined nav--btn">
                    videogame_asset
                </span>
                <span className='btn--title'>Gaming</span>
                
            </button>
            <button className='nav--button'>
                <span className="material-symbols-outlined nav--btn">
                    newspaper
                </span>
                <span className='btn--title'>News</span>
                
            </button>
            <button className='nav--button'>
                <span className="material-symbols-outlined nav--btn">
                    wine_bar
                </span>
                <span className='btn--title'>Sports</span>
                
            </button>
        </section>


        <section className='nav--section'>
            <button className='nav--button'>
                <span className="material-symbols-outlined nav--btn">
                    settings
                </span>
                <span className='btn--title'>Settings</span>
                
            </button>
            <button className='nav--button'>
                <span className="material-symbols-outlined nav--btn">
                    flag
                </span>
                <span className='btn--title'>Report history</span>
                
            </button>
            <button className='nav--button'>
                <span className="material-symbols-outlined nav--btn">
                    sms_failed
                </span>
                <span className='btn--title'>Send feedback</span>
                
            </button>
        </section>

    </nav>
  )
}

export default Navigation