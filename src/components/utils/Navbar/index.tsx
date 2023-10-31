import Link from "next/link";
import * as React from "react";
import InputSearch from "./InputSearch";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4">
        <Link href="/" className="font-bold text-2xl">Cuy AnimeList</Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
