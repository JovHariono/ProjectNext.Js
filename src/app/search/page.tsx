"use client"

import { useSearchParams } from 'next/navigation';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Data } from '../types';
import axios from 'axios';
import Header from '@/components/AnimeList/Header';
import AnimeList from '@/components/AnimeList';

interface ISearchResultProps {
}

const SearchResult: React.FunctionComponent<ISearchResultProps> = (props) => {
  const searchParams = useSearchParams();
  const result = searchParams.get("result")

  const [datasSearchAnime, setSearchAnime] = useState<Data[]>([]);
  const [pending, setIsPending] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${result}`)
      .then((res) => {
        setSearchAnime(res.data.data);
        setIsPending(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section>
      { pending && <div className="custom-loader"></div> }
      { !pending && <Header title={`Pencarian untuk ${result}`} linkHref="/populer" linkTitle="" />}
      { datasSearchAnime && <AnimeList api={datasSearchAnime}  />}
      </section>
  );
};

export default SearchResult;
