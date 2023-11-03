import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';

interface IApiLibsProps {
    resource: string;
    query: string;
    datasTopAnime: any;
    pending: boolean;
    setDatasTopAnime: (datasTopAnime: []) => void;
    setIsPending: (pending: boolean) => void
}

const ApiLibs: React.FunctionComponent<IApiLibsProps> = (props) => {

    useEffect(() => {
        axios
          .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${props.resource}?${props.query}`)
          .then((res) => {
            props.setDatasTopAnime(res.data.data);
            props.setIsPending(false)
            console.log(props.pending)
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);
  return (
    <div></div>
  );
};

export default ApiLibs;
