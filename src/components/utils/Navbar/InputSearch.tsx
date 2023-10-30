"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";

interface IInputSearchProps {}

const InputSearch: React.FunctionComponent<IInputSearchProps> = (props) => {
  const [search, setSearch] = useState("");

  return (
    <div className="relative">
      <input
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        type="text"
        placeholder="Cari anime..."
        className="p-2 rounded w-full"
      />
      <button className="absolute top-2 end-2">
        <Link
          href={{
            pathname: "/search",
            query: { search: search },
          }}
        >
          <MagnifyingGlass size={24} />
        </Link>
      </button>
    </div>
  );
};

export default InputSearch;
