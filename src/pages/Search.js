import React, { useEffect, useCallback, useContext } from "react"
import Layout from "../components/Layout/Layout"
import { useLocation } from "react-router-dom"
import { fetchSearchData } from "../apis"
import { Store } from "../store"
import VideoGrid from "../components/VideoGrid/VideoGrid"
import VideoGridItem from "../components/VideoGridItem/VideoGridItem"

const Search = () => {
  const location = useLocation()
  const { globalState, setGlobalState } = useContext(Store)

  const setSearchResult = useCallback(async () => {
    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get("query")
    if (query) {
      const res = await fetchSearchData(query)
      setGlobalState({
        type: "SET_SEARCHED",
        payload: {
          searched: res.data.item
        }
      })
    }
  }, [location.search, setGlobalState])

  useEffect(() => {
    setSearchResult()
  }, [setSearchResult, location.search])

  return (
    <Layout>
      <VideoGrid>
        {globalState.searched ? globalState.searched.map((search) => {
          return (
            <VideoGridItem
              id={search.id.videoId}
              key={search.id.videoId}
              src={search.snippet.thumbnails.medium.url}
              title={search.snippet.title}
            />
          )
        }): <span>no data</span>}
      </VideoGrid>
    </Layout>
  )
}

export default Search
