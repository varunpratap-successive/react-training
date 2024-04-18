import React from "react";
import "./style.css";
const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(totalPages + 1).keys()].slice(1);

  const goToNextPage = () => {
    if (currentPage !== totalPages) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div className="divpageclass">
      <ul className="ulclass">
        <li>
          <a onClick={goToPrevPage} href="#">
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li key={pgNumber} className="ulclass">
            <a onClick={() => setCurrentPage(pgNumber)} href="#">
              {pgNumber}
            </a>
          </li>
        ))}
        <li>
          <a onClick={goToNextPage} href="#">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
