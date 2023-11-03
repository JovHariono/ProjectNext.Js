import axios from 'axios';
import { useEffect } from 'react';

interface IApiLibsProps {
    resource: string;
    query: string;
    datasTopAnime: any;
    pending: boolean;
    setDatasTopAnime: (datasTopAnime: []) => void;
    setIsPending: (pending: boolean) => void
}

const useApiData = (props: IApiLibsProps) => {
    useEffect(() => {
        props.setIsPending(true);

        axios
          .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${props.resource}?${props.query}`)
          .then((res) => {
            props.setDatasTopAnime(res.data.data);
            props.setIsPending(false);
          })
          .catch((err) => {
            console.log(err);
            props.setIsPending(false);
          });
    }, [props.resource, props.query, props.setDatasTopAnime, props.setIsPending]);
};

export default useApiData;
