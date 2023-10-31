"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";
import { ChangeEvent, useState } from "react";

interface IInputSearchProps {}

const InputSearch: React.FunctionComponent<IInputSearchProps> = (props) => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(keyword === ""){
      return false
    }

    if (e.key === "Enter") {
      router.push(`/search/${keyword}`);
      setKeyword("");
    }
  };

  const handleClick = () => {
    if(keyword === ""){
      return false
    }
    
    router.push(`/search/${keyword}`);
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
        onKeyDown={handleEnter}
      />
      <button className="absolute top-2 end-2" onClick={handleClick}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
