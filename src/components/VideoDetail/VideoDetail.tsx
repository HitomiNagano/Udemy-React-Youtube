import React from "react"
import VideoPlay from "src/components/VideoPlay/VideoPlay"
import Style from "./VideoDetail.module.scss"
import Linkify from "react-linkify"
import { useGlobalState } from "src/store"

const VideoDetail: React.FC = () => {
  const globalState = useGlobalState("selected")

  return globalState && globalState.id ? (
    <div className={Style.wrap}>
      <VideoPlay id={globalState.id} />
      <p>{globalState.snippet.title}</p>
      <hr />
      <Linkify>
        <pre>{globalState.snippet.description}</pre>
      </Linkify>
    </div>
  ) : (
    <span>no data</span>
  )
}

export default VideoDetail
