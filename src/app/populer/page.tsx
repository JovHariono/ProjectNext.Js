"use client";

import HeaderMenu from "@/components/utils/HeaderMenu";
import Pagination from "@/components/utils/Pagination";
import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AnimeList from "@/components/AnimeList";
import useApiData from "../libs/api-libs";

interface IPopulerPageProps {}

const PopulerPage: React.FunctionComponent<IPopulerPageProps> = (props) => {
  const [page, setPage] = useState(1);
  const [lastpage, setLastPage] = useState(0)
  const [pending, setIsPending] = useState(true);
  const [datasAnime, setDatasAnime] = useState([]);

  useApiData({
    resource: "top/anime",
    query: `page=${page}`,
    datasAnime,
    pending,
    setDatasAnime,
    setIsPending,
    page,
    lastpage,
    setPage,
    setLastPage,
  })

  return pending ? (
    <div className="custom-loader"></div>
  ) : (
    <>
      <HeaderMenu title={`Anime Terpopuler #${page}`} />
      <AnimeList api={datasAnime} />
      <Pagination page={page} lastpage={lastpage} setPage={setPage} />
    </>
  );
};

export default PopulerPage;
