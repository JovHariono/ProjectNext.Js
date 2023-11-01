"use client";

import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";

interface ISearchResultProps {
  params: { keyword: string };
}

const SearchResult: React.FunctionComponent<ISearchResultProps> = ({ params }) => {
  const result = params.keyword
  const decodedResult = decodeURI(result)

  const [datasSearchAnime, setSearchAnime] = useState([]);
  const [pending, setIsPending] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodedResult}`)
      .then((res) => {
        setSearchAnime(res.data.data);
        setIsPending(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section>
      { pending && <div className="custom-loader"></div> }
      { !pending && <Header title={`Pencarian untuk ${decodedResult}...`} linkHref="/populer" linkTitle="" />}
      { datasSearchAnime && <AnimeList api={datasSearchAnime}  />}
      </section>
    </>
  );
};

export default SearchResult;
