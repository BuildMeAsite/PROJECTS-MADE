import React from 'react'
import Category from "./Category";
import Header from "./Header";
import Main from "./Main"
import Navigation from "./Navigation";
import coreData from './Datalist'
import Containers from './Container';



function Core() {

    const [dataState,setData] = React.useState(coreData)
    const [viewState,setView] = React.useState('Home')
    const [videoState,setVideo] =React.useState()


    function handleClickCat(e) {
        console.log(e.target.id)
        setData((prevState)=>{
            return prevState.map((obj)=>{
                return {...obj,vidCategoryArray: obj.vidCategoryArray.map((obj)=>{
                    if (e.target.id === obj.cat) {
                        return {...obj,isActive: true}
                    }
                    return {...obj,isActive: false}
                })}
            })
        })
    }

    function handleVidClick(e) {
      console.log(e.target.id)
      setView(prevState=>prevState='Video')
      setVideo(prevState=>prevState=e.target.id)
    }
    function handleHomeClick() {
      setView(prevState=>prevState='Home')

    }

    function handleSubClick(e) {
      console.log(e.target.id)
      setData((prevState)=>{
        return prevState.map((obj)=>{
          return {...obj,videoCollection: obj.videoCollection.map((obj)=>{
            if (Number(e.target.id) === Number(obj.id)) {
              return {...obj,subscribed: !obj.subscribed}
            }
            return obj
          })}
        })
      })
    }

  return (
    <div className='core'>

      {(() => {
        if (viewState === 'Home') {
          return (
            <>
              <Main collections = {dataState[0].videoCollection} currentCat = {dataState[0].vidCategoryArray} handleClicks={handleVidClick}/>
              <Header handleClicks={handleHomeClick}/>
              <Navigation collections={dataState[0].videoCollection}/>
              <Category catHeader = {dataState[0].vidCategoryArray} handleClickCat = {handleClickCat}/>
            </>
          )
        } else if (viewState === 'Video') {
          return (
            <>
              <Header handleClicks={handleHomeClick}/>
              <Containers collections = {dataState[0].videoCollection} targetVideo={videoState} handleClicks={handleSubClick} handleClicksVid={handleVidClick}/>
            </>
          )
        }
      })()}


      
    </div>
  )
}

export default Core