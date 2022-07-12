import React from "react";

const VideoDisplay = ({videos, filteredArray, filteredResults}) => {

  let uniqueObjArray = [...new Map(filteredArray.map((item) => [item["id"], item])).values()];
  console.log("uniqueObjArray",uniqueObjArray);

  if(filteredResults.length !==0  ){
    videos = filteredResults
  } else if(filteredArray.length !== 0){
    videos = uniqueObjArray
  }

  return (
      <div className="Video-container">
          {videos.map(video => (
              <div className='card' key={video.id}>
                <img key={video.title} alt="Person" src={video.image} />
                <div className='container'>
                  <h4>{video.title}</h4>
                  <p>{video.description}</p>
                  <time>{video.version}</time>
                </div>
              </div>               
          ))}
      </div>
  )
}

export default VideoDisplay;