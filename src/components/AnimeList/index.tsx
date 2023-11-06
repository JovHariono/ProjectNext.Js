import * as React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Data } from "@/app/types";

interface IAnimeListProps {
  api: Data[];
}

const AnimeList: React.FunctionComponent<IAnimeListProps> = (props) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4 pb-4">
      {props.api.map((data) => {
        return (
          <Link
            className="cursor-pointer shadow-xl text-color-primary hover:text-color-accent transition-all rounded border-color-accent"
            href={`/anime/${data.mal_id}`}
            key={data.mal_id}
          >
            <Image
              src={data.images.webp.image_url}
              alt="..."
              width={350}
              height={350}
              className="w-full max-h-64 object-contain"
            />
            <h3 className="font-bold md:text-xl text-md p-4">{data.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default AnimeList;
