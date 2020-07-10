import React, { useEffect, useContext, useCallback } from "react"
import Layout from "../components/Layout/Layout"
import VideoDetail from "../components/VideoDetail/VideoDetail"
import SideList from "../components/SideList/SideList"
import { Store } from "../store"
import { useLocation } from "react-router-dom"
import { fetchSelectedData, fetchRelatedData } from "../apis"

const Watch = () => {
  const { setGlobalState } = useContext(Store)
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
        type: "SET_SELECTED",
        payload: {
          selected: selected.data.items.shift(),
        },
      })
      setGlobalState({
        type: "SET_RELATED",
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
