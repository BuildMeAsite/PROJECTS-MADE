import React from 'react'

function Category(props) {


    let catLoop = props.catHeader.map((obj,index)=>{
      return (
        <button key={index} type='button' id={obj.cat} className={`btn ${obj.isActive ? "btn-dark":"btn-light"}`} onClick={(e)=>props.handleClickCat(e)}>
          {obj.cat}
        </button>
      )
    })

  
  return (
    <div className='category--container'>

       {catLoop}
    </div>
  )
}

export default Category