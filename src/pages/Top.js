import React, { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { fetchPopularData } from "../apis";

const Top = () => {
  useEffect(() => {
    (async () => {
      const res = await fetchPopularData();
      console.log(res.data);
    })();
  }, []);

  return <Layout>top page</Layout>;
};

export default Top;
