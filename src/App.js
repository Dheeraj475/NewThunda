import './App.css'
import React,  { useState } from 'react';
import { BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import Navcomp from './components/Navcomp';
import Newscomp from './components/Newscomp';
import LoadingBar from 'react-top-loading-bar'



const App = ()=> {
  const [progress, setProgress] = useState(0);

  const pageSize = 6;
  const apikey = process.env.REACT_APP_NEWS_API;
  
    return (
      <>
      <div>
        <Router>
        <LoadingBar
        color='#fafafa'
        progress={progress}
      />
        <Navcomp/>
          <Routes>
            <Route exact path="/" element={<Newscomp setProgress={setProgress} key="general" apikey={apikey} pageSize={pageSize} country = "in" category = "general" />} />
            <Route exact path="/business" element={<Newscomp setProgress={setProgress} key="business" apikey={apikey} pageSize={pageSize} country = "in" category = "business" />} />
            <Route exact path="/health" element={<Newscomp setProgress={setProgress} key="health" apikey={apikey} pageSize={pageSize} country = "in" category = "health" />} />
            <Route exact path="/science" element={<Newscomp setProgress={setProgress} key="science" apikey={apikey} pageSize={pageSize} country = "in" category = "science" />} />
            <Route exact path="/entertainment" element={<Newscomp setProgress={setProgress} key="entertainment" apikey={apikey} pageSize={pageSize} country = "in" category = "entertainment" />} />
            <Route exact path="/sports" element={<Newscomp setProgress={setProgress} key="sports" apikey={apikey} pageSize={pageSize} country = "in" category = "sports" />} />
            <Route exact path="/technology" element={<Newscomp setProgress={setProgress} key="technology" apikey={apikey} pageSize={pageSize} country = "in" category = "technology" />} />
          </Routes>
        </Router>

      </div>
      </>
    )
  
}
export default App;