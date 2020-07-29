import axios, { AxiosResponse } from "axios"
import { KEY, apiURL } from "src/config"

const youtube = axios.create({
  baseURL: apiURL,
})

const params = {
  part: "snippet",
  maxResults: 40,
  key: KEY,
  regionCode: "JP",
  type: "video",
}

// @see https://developers.google.com/youtube/v3/docs/videos/list?hl=ja
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchPopularData = async (): Promise<AxiosResponse<any>> => {
  return await youtube.get("/videos", {
    params: {
      ...params,
      chart: "mostPopular",
    },
  })
}

export const fetchSelectedData = async (
  id: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<AxiosResponse<any>> => {
  return await youtube.get("videos", {
    params: {
      ...params,
      id,
    },
  })
}

// @see https://developers.google.com/youtube/v3/docs/search/list?hl=ja
export const fetchRelatedData = async (
  id: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<AxiosResponse<any>> => {
  return await youtube.get("/search", {
    params: {
      ...params,
      relatedToVideoId: id,
    },
  })
}

export const fetchSearchData = async (
  query: string | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<AxiosResponse<any>> => {
  return await youtube.get("/search", {
    params: {
      ...params,
      q: query,
    },
  })
}
