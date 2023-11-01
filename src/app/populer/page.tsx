"use client";

import HeaderMenu from "@/components/utils/HeaderMenu";
import Pagination from "@/components/utils/Pagination";
import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AnimeList from "@/components/AnimeList";

interface IPopulerPageProps {}

const PopulerPage: React.FunctionComponent<IPopulerPageProps> = (props) => {
  const [page, setPage] = useState(1);
  const [lastpage, setLastPage] = useState(0)
  const [pending, setIsPending] = useState(true);
  const [datasTopAnime, setDatasTopAnime] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`)
      .then((res) => {
        setDatasTopAnime(res.data.data);
        setIsPending(false);
        setLastPage(res.data.pagination.last_visible_page)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return pending ? (
    <div className="custom-loader"></div>
  ) : (
    <>
      <HeaderMenu title={`Anime Terpopuler #${page}`} />
      <AnimeList api={datasTopAnime} />
      <Pagination page={page} lastpage={lastpage} setPage={setPage} />
    </>
  );
};

export default PopulerPage;
