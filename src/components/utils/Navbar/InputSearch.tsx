"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { useState } from "react";

interface IInputSearchProps {}

const InputSearch: React.FunctionComponent<IInputSearchProps> = (props) => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const handleClick = () => {
    router.push(`/search/${keyword}`)
    setKeyword("");
  };

  return (
    <div className="relative">
      <input
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
        type="text"
        placeholder="Cari anime..."
        className="p-2 rounded w-full"
        value={keyword}
        onKeyDown={handleClick}
      />
      <button className="absolute top-2 end-2" onClick={handleClick}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
