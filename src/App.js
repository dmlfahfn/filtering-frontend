import './App.css';
import Filter from "./components/Filter";
import VideoDisplay from "./components/VideoDisplay";
import Search from "./components/Search";
import { useState, useEffect } from 'react';

function App() {

const [videos, setVideos] = useState([]);
const [filteredArray, setFilteredArray] = useState([]); 
const [filteredResults, setFilteredResults] = useState([]);

useEffect(() => {
  const url = "http://localhost:3000/videos"
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setVideos(json);
    } catch (error) {
      console.log("error", error);
    }
  };

  fetchData();
}, []);


  return (
    <div className="App">
      <Search videos={videos} {...{filteredResults, setFilteredResults}}/>
      <Filter videos={videos} {...{filteredArray, setFilteredArray}}/>
      <VideoDisplay videos={videos} filteredArray= {filteredArray} filteredResults={filteredResults}/>
    </div>
  );
}

export default App;
