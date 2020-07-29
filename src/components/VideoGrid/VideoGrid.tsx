import React from "react"
import Style from "./VideoGrid.module.scss"

const VideoGrid: React.FC = ({ children }) => {
  return <div className={Style.continer}>{children}</div>
}

export default VideoGrid
