import React from "react"
import Youtube from "react-youtube"
import Style from "./VideoPlay.module.scss"

type OwnProps = {
  id: string
}

const VideoPlay: React.FC<OwnProps> = ({ id }) => {
  return (
    <div className={Style.wrap}>
      <Youtube videoId={id} className={Style.video} />
    </div>
  )
}

export default VideoPlay
