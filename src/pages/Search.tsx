import React, { useEffect, useCallback } from "react"
import Layout from "src/components/Layout/Layout"
import { useLocation } from "react-router-dom"
import { fetchSearchData } from "src/apis"
import { ActionType } from "src/store/types"
import VideoGrid from "src/components/VideoGrid/VideoGrid"
import VideoGridItem from "src/components/VideoGridItem/VideoGridItem"
import { useGlobalState, useDispatch } from "src/store"

const Search: React.FC = () => {
  const location = useLocation()
  const globalState = useGlobalState("searched")
  const setGlobalState = useDispatch()

  const setSearchResult = useCallback(async () => {
    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get("query")
    if (query) {
      const res = await fetchSearchData(query)
      setGlobalState({
        type: ActionType.SET_SEARCHED,
        payload: {
          searched: res.data.item,
        },
      })
    }
  }, [location.search, setGlobalState])

  useEffect(() => {
    setSearchResult()
  }, [setSearchResult, location.search])

  return (
    <Layout>
      <VideoGrid>
        {globalState ? (
          globalState.map((search) => {
            return (
              <VideoGridItem
                id={search.id.videoId}
                key={search.id.videoId}
                src={search.snippet.thumbnails.medium.url}
                title={search.snippet.title}
              />
            )
          })
        ) : (
          <span>no data</span>
        )}
      </VideoGrid>
    </Layout>
  )
}

export default Search
