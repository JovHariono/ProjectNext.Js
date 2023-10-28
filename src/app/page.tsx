"use client";
import * as React from "react";
import AnimeList from "@/components/AnimeList";
import { useState, useEffect } from "react";
import axios from "axios";
import { Data } from "./types";
import Link from "next/link";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [datas, setDatas] = useState<Data[]>([]);
  const [pending, setIsPending] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`)
      .then((res) => {
        setDatas(res.data.data);
        setIsPending(false)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Paling Populer</h1>
      <Link href="/populer" className="md:text-xl text-md underline hover:text-indigo-500 transition-all">Lihat Semua</Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
      { pending && <div>Loading...</div> }
      { datas && datas.map((data) => {
        return (
          <div key={data.mal_id} className="shadow-xl">
            <AnimeList title={data.title} image_url={data.images.webp.image_url} id={data.mal_id}  />
          </div>
        ) 
      })}
      </div>
    </div>
  );
};

export default Home;
