import { FC, useState } from "react";

interface PaginatorProps {
  totalUsersCount: number;
  changePage: (page: number) => void;
}

const Paginator: FC<PaginatorProps> = ({ totalUsersCount, changePage }) => {
  const pagesCount = Math.ceil(totalUsersCount / 10);
  const pages = [];
  const portionSize = 10;

  for (let i = 1; i < pagesCount; i++) {
    pages.push(i);
  }

  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div>
      {pages
        .filter(
          (page) =>
            page >= leftPortionPageNumber && page <= rightPortionPageNumber
        )
        .map((page) => {
          return <span onClick={() => changePage(page)}>{page}</span>;
        })}

      <div>
        {portionNumber > 1 && (
          <button
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            Prev
          </button>
        )}

        {portionCount > portionNumber && (
          <button
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Paginator;
