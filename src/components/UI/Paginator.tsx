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

  const [portionNumber, setPortionNumber] = useState(
    Math.ceil(currentPage / 10)
  );
  const portionCount = Math.ceil(pagesCount / portionSize);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className="flex justify-between bg-white-500 text-black-500 text-sm rounded overflow-hidden">
      {/* ---------- Arrow left ----------  */}
      {portionNumber > 1 && (
        <Button
          className="pag-arrow hover-dark-gradient"
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
                  ? "pag-page-number bg-black-500/50 text-white-500"
                  : "pag-page-number hover-dark-gradient"
              }
              onClick={() => changePage(pageNumber)}
              key={pageNumber}
            >
              {pageNumber}
            </div>
          );
        })}

      {/* ---------- Arrow right ----------  */}
      {portionCount > portionNumber && (
        <Button
          className="pag-arrow hover-dark-gradient"
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          <i className="fa-solid fa-angle-right" />
        </Button>
      )}
    </div>
  );
};

export default Paginator;
