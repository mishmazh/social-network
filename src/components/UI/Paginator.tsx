import { FC, useState } from "react";
import Button from "./Button";

interface PaginatorProps {
  totalUsersCount: number;
  portionSize: number;
  currentPage: number;
  changePage: (pageNumber: number) => void;
}

const Paginator: FC<PaginatorProps> = ({
  totalUsersCount,
  portionSize,
  currentPage,
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
      <div className="flex bg-white rounded text-black-500 overflow-hidden">
        {/* ---------- Стрелка влево ----------  */}
        {portionNumber > 1 && (
          <Button
            className="pagination-arrow hover-dark-gradient"
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
                className={
                  currentPage === pageNumber
                    ? "pagination-page-number bg-black-500/30 text-white"
                    : "pagination-page-number hover-dark-gradient"
                }
                onClick={() => changePage(pageNumber)}
                key={pageNumber}
              >
                {pageNumber}
              </div>
            );
          })}

        {/* ---------- Стрелка вправо ----------  */}
        {portionCount > portionNumber && (
          <Button
            className="pagination-arrow hover-dark-gradient"
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
