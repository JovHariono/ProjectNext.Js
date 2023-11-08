"use client";

import useApiData from "@/app/libs/api-libs";
import { Data } from "@/app/types";
import axios from "axios";
import * as React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import VideoPlayer from "@/components/utils/VideoPlayer";

interface IAnimePageProps {
  params: { id: string };
}

interface AnimeData {
  title: string;
  year: number;
}

const AnimePage: React.FunctionComponent<IAnimePageProps> = ({ params }) => {
  const result = params.id;
  const [datasAnime, setDatasAnime] = useState<any>([]);
  const [pending, setIsPending] = useState(true);

  useApiData({
    resource: `anime/${result}`,
    query: "",
    datasAnime,
    pending,
    page: 0,
    lastpage: 0,
    setDatasAnime,
    setIsPending,
    setPage: () => "",
    setLastPage: () => "",
  });

  return pending ? (
    <div className="custom-loader"></div>
  ) : (
    <>
    <div className="overflow-x-auto">
      <div className="pt-4 px-4">
        <h3 className="text-2xl text-color-primary">
          {datasAnime.title} - {datasAnime.year}
        </h3>
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary">
          <h3>PERINGKAT: </h3>
          <p>{ datasAnime.rank }</p>
      </div>
      <div className="pt-4 px-4 flex gap-2 text-color-primary">
          <h3>SKOR: </h3>
          <p>{ datasAnime.score } / 10</p>
      </div>
    </div>
      <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image
          src={datasAnime.images.webp.image_url}
          alt={datasAnime.images.jpg.image_url}
          width={250}
          height={250}
        ></Image>
        <p>{ datasAnime.synopsis }</p>
      </div>
      <div>
        <VideoPlayer result={datasAnime.trailer.youtube_id} />
      </div>
    </>
  );
};

export default AnimePage;
