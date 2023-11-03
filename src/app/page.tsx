"use client";
import * as React from "react";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import useApiData from "./libs/api-libs";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [datasTopAnime, setDatasTopAnime] = useState([]);
  const [pending, setIsPending] = useState(true);

  useApiData({
    resource: "top/anime",
    query: "limit=8",
    setDatasTopAnime,
    setIsPending,
    pending,
    datasTopAnime,
  });

  return (
    <>
      {/* Anime paling populer */}
      <section>
      { pending && <div className="custom-loader"></div> }
      { !pending && <Header title="Paling Populer" linkHref="/populer" linkTitle="Lihat Semua" />}
      { datasTopAnime && <AnimeList api={datasTopAnime}  />}
      </section>
    </>
  );
};

export default Home;
