import { FC, useState } from "react";
import classes from "./Paginator.module.scss";
import Button from "../Button/Button";

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
    <div className={classes.Paginator}>
      <div>
        {portionNumber > 1 && (
          <Button
            classType="pagArrow"
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
                className={classes.pageItem}
                onClick={() => changePage(pageNumber)}
                key={pageNumber}
              >
                {pageNumber}
              </div>
            );
          })}

        {portionCount > portionNumber && (
          <Button
            classType="pagArrow"
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
