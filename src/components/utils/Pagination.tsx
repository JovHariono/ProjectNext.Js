import * as React from "react";

interface IPaginationProps {
  page: number;
  lastpage: number;
  setPage: (page: number) => void;
}

const Pagination: React.FunctionComponent<IPaginationProps> = (props) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handlePrevClick = () => {
    if (props.page > 1) {
      props.setPage(props.page - 1);
      scrollTop();
    }
  };

  const handleNextClick = () => {
    if (props.page <= props.lastpage) {
      props.setPage(props.page + 1);
      scrollTop();
    }
  };

  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-2xl">
      { props.page <= 1 ? null : <button
        className="transition-all hover:text-color-accent underline"
        onClick={handlePrevClick}
      >
        Prev
      </button>}
      <p>
        {props.page} of {props.lastpage}
      </p>
      { props.page >= props.lastpage ? null : <button
        className="transition-all hover:text-color-accent underline"
        onClick={handleNextClick}
      >
        Next
      </button>}
    </div>
  );
};

export default Pagination;
