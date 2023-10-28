import * as React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface IAnimeListProps {
  title: string;
  image_url: string;
  id: string;
}

const AnimeList: React.FunctionComponent<IAnimeListProps> = (props) => {
  return (
    <Link className="cursor-pointer" href={`/${props.id}`}>
      <Image
        src={props.image_url}
        alt="..."
        width={350}
        height={350}
        className="w-full max-h-64 object-contain"
      />
      <h3 className="font-bold md:text-xl text-md p-4">{props.title}</h3>
    </Link>
  );
};

export default AnimeList;
