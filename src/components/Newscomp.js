import React, { useState }  from 'react';
import Newsitemcomp from './Newsitemcomp';
import Spinnercomp from './Spinnercomp';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from 'react';


const Newscomp = (props)=> {

const [articles,setArticles] = useState([])
const [loading,setLoading] = useState(true)
const [loadingScroll,setLoadingScroll] = useState(false)
const [page,setPage] = useState(1)
const [totalResults,setTotalResults] = useState(1)

const capitalizeFirstLetter = (string)=> {
  return string.charAt(0).toUpperCase() + string.slice (1);
}
document.title = `${capitalizeFirstLetter(props.category)} - News thunda`;





  const updateNews = async () =>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pagesize=${props.pageSize}`;
    let data = await (fetch(url))
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    
    props.setProgress(100);
}

useEffect(()=>{
  updateNews();
  // eslint-disable-next-line
},[])
 
  const fetchMoreData = async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pagesize=${props.pageSize}`;
  setLoadingScroll(true);
  setLoading(false);
  try {
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(prevArticles => prevArticles.concat(parsedData.articles));
    setPage(page+1);
    setTotalResults(parsedData.totalResults);
    setLoadingScroll(false);

  } catch (error) {
    console.error("Error fetching more data:", error);
    setLoadingScroll(false);
  }
};



    return (
      
      <>  {/* For infinite scroll */}
      <div className="container my-4">
        <h3 className="text-center" style={{marginTop:"80px"}}>Top {capitalizeFirstLetter(props.category)} Headlines</h3>
        
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loadingScroll && <Spinnercomp/>}
        >
          <div className="container">
            <div className="cotainer row my-4">
            {articles.length > 0 ? (
             articles.map((element,index)=>{
            return <div className="col-md-4 my-2" key={index}>
                <Newsitemcomp title = {element.title} description= {element.description} imageUrl= {element.urlToImage} URL={element.url} sourceName = {element.source.name} date = {element.publishedAt} author={!element.author?"Unknown":element.author} />
              </div>
            })
            ) : (!loading <> <p className="text-center" >Oop's we have encounered the daily limits</p><small className="text-center" >Come back again...</small></>
            )}
            </div>
            </div>
        </InfiniteScroll>
        {loading && <Spinnercomp/>}
      </div>
      
      </>
    )
  
}

Newscomp.defaultProps = {
  country : "in",
  pageSize : 6,
  category : "general"
}

Newscomp.propTypes = {
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string,
}

export default Newscomp
