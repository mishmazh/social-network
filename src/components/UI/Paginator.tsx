import { FC, useState } from "react";
import Button from "./Button";

interface PaginatorProps {
  totalUsersCount: number;
  portionSize: number;
  changePage: (pageNumber: number) => void;
}

const Paginator: FC<PaginatorProps> = ({
  totalUsersCount,
  portionSize,
  changePage,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / 10);
  const pages = [];

  for (let i = 1; i < pagesCount; i++) {
    pages.push(i);
  }

  const [portionNumber, setPortionNumber] = useState(1);
  const portionCount = Math.ceil(pagesCount / portionSize);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className="flex mb-8 text-sm">
      <div className="flex bg-white text-black rounded">
        {portionNumber > 1 && (
          <Button
            className="w-8 bg-transparent"
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            <i className="fa-solid fa-angle-left" />
          </Button>
        )}

        {pages
          .filter(
            (pageNumber) =>
              pageNumber >= leftPortionPageNumber &&
              pageNumber <= rightPortionPageNumber
          )
          .map((pageNumber) => {
            return (
              <div
                className="flex items-center px-3 cursor-pointer"
                onClick={() => changePage(pageNumber)}
                key={pageNumber}
              >
                {pageNumber}
              </div>
            );
          })}

        {portionCount > portionNumber && (
          <Button
            className="w-8 bg-transparent"
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            <i className="fa-solid fa-angle-right" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Paginator;
