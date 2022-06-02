import React from 'react'
import { Video } from './Videos'
import ReactPlayer from 'react-player'

//similar al modulo de React proptype
interface Props {
   video: Video
}

const VideoItem = ({video}: Props) => {
  return (
    <div className="col-md-4">
      <div className="card card.body">
        <div className="d-flex justify-content-between">
          <h1>{video.title}</h1>
          <span className="text-danger">X</span>
        </div>
       <p>{video.description}</p>
       <div className="embed-responsive embed-responsive-4by3">
         <ReactPlayer url={video.url} />
       </div>
      </div>
    </div>
  )
}

export default VideoItem