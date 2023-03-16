import React from 'react'

let pictureArr = ['beach1.jpg','beach2.webp','beach3.jpg','beach4.webp','beach5.webp','beach6.jpg']


function Main() {

  const [memGen,setMeme] = React.useState({topTxt:'Edit text',bottomTxt:'Edit text',randomIMG:`assets/${pictureArr[0]}`})
  const [allMeme,setMemes] = React.useState({})

  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setMemes(data))
 
  },[])

  function topMeme(){
    setMeme((prevState)=>{
      let newTxt = document.querySelector('.firstWord').value
      return prevState = {...prevState,topTxt:newTxt}
    })
  }

  function bottomMeme(){
    setMeme((prevState)=>{
      let newTxt = document.querySelector('.secondWord').value
      return prevState = {...prevState,bottomTxt:newTxt}
    })
  }

  let randomPic = ()=>{
    setMeme((prevState)=>{
      let randomNum = Math.floor(Math.random()*allMeme.data.memes.length)
      return prevState = {...prevState,randomIMG:`${allMeme.data.memes[randomNum].url}`}
    })
  }

  return (
    <>
      <form className='main--div'>
        <div className='upper'>
          <input type="text" id="firstWord" className='firstWord' placeholder='Enter first word' onChange={topMeme}/>
          <input type="text" id="secondWord" className='secondWord'  placeholder='Enter second word' onChange={bottomMeme}/>
        </div>
        <div className='mid'>
          <button id='newMeme'  type='button' onClick={randomPic}>Get a new meme image</button>
        </div>
        <div className='lower'>
          <img className='imgPrev' id='imgPrev' alt='' src={memGen.randomIMG}/>
          <span className='uppertxt' id='uppertxt'>{memGen.topTxt}</span>
          <span className='lowertxt' id='lowertxt'>{memGen.bottomTxt}</span>
        </div>
      </form>
    </>
  )
}

export default Main