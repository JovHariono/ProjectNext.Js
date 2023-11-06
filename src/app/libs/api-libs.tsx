import axios from 'axios';
import { useEffect } from 'react';

interface IApiLibsProps {
    resource: string;
    query: string;
    datasAnime: any;
    pending: boolean;
    page: number;
    lastpage: number;
    setDatasAnime: (datasAnime: []) => void;
    setIsPending: (pending: boolean) => void;
    setPage: (page: number) => void;
    setLastPage: (lastpage: number) => void;
}

const useApiData = (props: IApiLibsProps) => {
    useEffect(() => {
        props.setIsPending(true);

        axios
          .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${props.resource}?${props.query}`)
          .then((res) => {
            props.setDatasAnime(res.data.data);
            props.setIsPending(false);
            props.setLastPage(res.data.pagination.last_visible_page)
          })
          .catch((err) => {
            console.log(err);
            props.setIsPending(false);
          });
    }, [props.resource, props.query, props.setDatasAnime, props.setIsPending, props.page]);
};

export default useApiData;
