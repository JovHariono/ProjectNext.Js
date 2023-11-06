"use client"

import useApiData from '@/app/libs/api-libs';
import axios from 'axios';
import * as React from 'react';
import { useState, useEffect } from 'react'

interface IAnimePageProps {
    params: { id: string }
}

const AnimePage: React.FunctionComponent<IAnimePageProps> = ({ params }) => {
    const result = params.id
    const [datasAnime, setDatasAnime] = useState([])
    const [pending, setIsPending] = useState(false)

    useApiData({
        resource: `anime/${result}`,
        query: '',
        datasAnime,
        pending,
        page: 0,
        lastpage: 0,
        setDatasAnime,
        setIsPending,
        setPage: () => "",
        setLastPage: () => "", 
    })

    console.log(datasAnime)


  return (
    <div></div>
  );
};

export default AnimePage;
