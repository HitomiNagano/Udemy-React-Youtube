import React, { useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { fetchSelectedData } from "../../apis";
import { Store } from "../../store";

const VideoDetail = () => {
  const location = useLocation();
  const { globalState, setGlobalState } = useContext(Store);

  const setSelectedVideo = async () => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get("v");
    // console.log("id", id)
    const res = await fetchSelectedData(id);
    // @see https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
    const item = res.data.items.shift();
    setGlobalState({
      type: "SET_SELECTED",
      payload: { selected: item },
    });
  };

  useEffect(() => {
    setSelectedVideo();
  }, [setSelectedVideo]);

  return <div></div>;
};

export default VideoDetail;
