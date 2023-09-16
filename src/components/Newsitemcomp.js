import React from 'react'
import newsjpg from './news.jpg'

const Newsitemcomp = (props)=> { 

    let {title, description, imageUrl,URL,sourceName,date,author} = props;

    return (
      <>
      <div className="d-flex justify-content-center align-items-center">
        
        <div className="card" style={{width: "22rem"}}>   
            <img src={!imageUrl?newsjpg:imageUrl} className="card-img-top" alt="..."/>           
            <div className="card-body">
            <span className="badge rounded-pill text-bg-dark">{sourceName}</span>
              {/* <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p> */}
              <h5 className="card-title">{title}</h5>
              <small style={{fontSize:"12px",color:"grey"}}>By {author} published at : {new Date(date).toGMTString()}</small>
              <p className="card-text">{description}</p>
              <a rel="noreferrer" href={URL} target="_blank" className="btn btn-outline-dark  rounded-pill">Read news</a>
            </div>
        </div>
      </div>
      </>
    )
  
}

export default Newsitemcomp
