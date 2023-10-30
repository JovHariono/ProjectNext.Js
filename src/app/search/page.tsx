"use client"

import { useSearchParams } from 'next/navigation';
import * as React from 'react';

interface ISearchResultProps {
}

const SearchResult: React.FunctionComponent<ISearchResultProps> = (props) => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search")
  console.log(search)

  return (
    <div>
      
    </div>
  );
};

export default SearchResult;
