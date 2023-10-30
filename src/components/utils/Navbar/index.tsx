import Link from "next/link";
import * as React from "react";
import InputSearch from "./InputSearch";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <header className="bg-indigo-500">
      <div className="flex md:flex-row flex-col justify-between p-4">
        <Link href="/" className="font-bold text-white text-2xl">Cuy AnimeList</Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
