import React, { useEffect, useCallback } from "react"
import { useLocation } from "react-router-dom"
import Layout from "src/components/Layout/Layout"
import VideoDetail from "src/components/VideoDetail/VideoDetail"
import SideList from "src/components/SideList/SideList"
import { fetchSelectedData, fetchRelatedData } from "src/apis"
import { useDispatch } from "src/store"
import { ActionType } from "src/store/types"

const Watch: React.FC = () => {
  const setGlobalState = useDispatch()
  const location = useLocation()

  const setVideos = useCallback(async () => {
    const searchParams = new URLSearchParams(location.search)
    const id = searchParams.get("v")
    if (id) {
      const [selected, related] = await Promise.all([
        fetchSelectedData(id),
        fetchRelatedData(id),
      ])
      setGlobalState({
        type: ActionType.SET_SELECTED,
        payload: {
          selected: selected.data.items.shift(),
        },
      })
      setGlobalState({
        type: ActionType.SET_RELATED,
        payload: {
          related: related.data.items,
        },
      })
    }
  }, [location.search, setGlobalState])

  useEffect(() => {
    setVideos()
  }, [location.search, setVideos])

  return (
    <Layout>
      <VideoDetail />
      <SideList />
    </Layout>
  )
}

export default Watch
