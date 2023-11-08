"use client";

import useApiData from "@/app/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";

interface ISearchResultProps {
  params: { keyword: string };
}

const SearchResult: React.FunctionComponent<ISearchResultProps> = ({
  params,
}) => {
  const result = params.keyword;
  const decodedResult = decodeURI(result);

  const [datasSearchAnime, setSearchAnime] = useState<[]>([]);
  const [pending, setIsPending] = useState(true);

  useApiData({
    resource: "anime",
    query: `q=${decodedResult}`,
    datasAnime: datasSearchAnime,
    pending,
    setDatasAnime: setSearchAnime,
    setIsPending: setIsPending,
    page: 0,
    lastpage: 0,
    setPage: () => "",
    setLastPage: () => "",
  });

  return (
    <>
      <section>
        {pending && <div className="custom-loader"></div>}
        {!pending && (
          <Header
            title={`Pencarian untuk ${decodedResult}...`}
            linkHref="/populer"
            linkTitle=""
          />
        )}
        {datasSearchAnime && <AnimeList api={datasSearchAnime} />}
      </section>
    </>
  );
};

export default SearchResult;
