import React, { useEffect } from "react"
import Layout from "src/components/Layout/Layout"
import { fetchPopularData } from "src/apis"
import { ActionType } from "src/store/types"
import VideoGrid from "src/components/VideoGrid/VideoGrid"
import VideoGridItem from "src/components/VideoGridItem/VideoGridItem"
import { useDispatch, useGlobalState } from "src/store"

const Top: React.FC = () => {
  const globalState = useGlobalState("popular")
  const setGlobalState = useDispatch()

  useEffect(() => {
    ;(async () => {
      const res = await fetchPopularData()
      setGlobalState({
        type: ActionType.SET_POPULAR,
        payload: { popular: res.data.items },
      })
    })()
  }, [setGlobalState])

  return (
    <Layout>
      <VideoGrid>
        {globalState.length === 0 ? (
          <div>正しく取得できませんでした。</div>
        ) : (
          globalState.map((popular) => {
            return (
              <VideoGridItem
                id={popular.id}
                key={popular.id}
                src={popular.snippet.thumbnails.standard.url}
                title={popular.snippet.title}
              />
            )
          })
        )}
      </VideoGrid>
    </Layout>
  )
}

export default Top
