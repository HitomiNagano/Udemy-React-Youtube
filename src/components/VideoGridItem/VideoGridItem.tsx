import React from "react"
import Style from "./VideoGridItem.module.scss"
import { Link } from "react-router-dom"

type OwnProps = {
  id: string
  src: string
  title: string
}

const VideoGridItem: React.FC<OwnProps> = ({ id, src, title }) => {
  return (
    <Link to={{ pathname: "watch", search: `?v=${id}` }} className={Style.item}>
      <div>
        <img src={src} alt={title} />
        <span>{title}</span>
      </div>
    </Link>
  )
}

export default VideoGridItem
