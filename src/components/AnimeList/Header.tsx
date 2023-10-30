import Link from "next/link";
import * as React from "react";

interface IHeaderProps {
  title: string;
  linkHref: string;
  linkTitle: string;
}

const Header: React.FunctionComponent<IHeaderProps> = (
  props
) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">{props.title}</h1>
      <Link
        href={props.linkHref}
        className="md:text-xl text-md underline hover:text-indigo-500 transition-all"
      >
        {props.linkTitle}
      </Link>
    </div>
  );
};

export default Header;
