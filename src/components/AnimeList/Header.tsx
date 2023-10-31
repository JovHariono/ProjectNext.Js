import Link from "next/link";
import * as React from "react";

interface IHeaderProps {
  title: string;
  linkHref: string;
  linkTitle: string;
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-color-primary transition-all">{props.title}</h1>
      <Link
        href={props.linkHref}
        className="md:text-xl text-md underline text-color-primary hover:text-color-accent transition-all"
      >
        {props.linkTitle}
      </Link>
    </div>
  );
};

export default Header;
