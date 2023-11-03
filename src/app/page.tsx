"use client";
import * as React from "react";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import ApiLibs from "./libs/api-libs";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [datasTopAnime, setDatasTopAnime] = useState([]);
  const [pending, setIsPending] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
      .then((res) => {
        setDatasTopAnime(res.data.data);
        setIsPending(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  <ApiLibs resource={"top/anime"} query={"limit=8"} setIsPending={setIsPending} setDatasTopAnime={setDatasTopAnime} datasTopAnime={datasTopAnime} pending={pending} />

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
