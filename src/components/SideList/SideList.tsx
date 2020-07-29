import React from "react"
import SideListItem from "src/components/SideListItem/SideListItem"
import Style from "./SideList.module.scss"
import { useGlobalState } from "src/store"

const SideList: React.FC = () => {
  const globalState = useGlobalState("related")

  return (
    <div className={Style.sidenav}>
      {globalState ? (
        globalState.map((video) => {
          return (
            <SideListItem
              id={video.id.videoId}
              key={video.id.videoId}
              src={video.snippet.thumbnails.medium.url}
              title={video.snippet.title}
            />
          )
        })
      ) : (
        <span>no data</span>
      )}
    </div>
  )
}

export default SideList
