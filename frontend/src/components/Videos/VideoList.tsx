import React, { useState, useEffect } from 'react'
import { Video } from './Videos'
import * as videoService from './VideoServices'
// import { getVideos } from './VideoServices'
import VideoItem from './VideoItem'

function VideoList() {

   const [videos, setVideos] = useState<Video[]>([])
   console.log(videos);
   const loadVideos = async () => {
      const res = await videoService.getVideos()
      setVideos(res.data.videosDB)
   }

   useEffect(() => {
      loadVideos()
   }, [])

  return (
    <div className="row">
       {videos?.map((video) =>{
          return <VideoItem video={video} key={video._id}/>
       })}
    </div>
  )
}

export default VideoList