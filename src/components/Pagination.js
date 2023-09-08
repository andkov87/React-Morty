import React from "react";

export default function Pagination({
  pageNumber,
  setPageNumber,
  numberOfPages,
}) {
  function handleBtnClick(event) {
    if (event.target.name === "prev") {
      setPageNumber((prev) => prev - 1);
    }
    if (event.target.name === "next") {
      setPageNumber((prev) => prev + 1);
    }
    if (event.target.name === "-2") {
      setPageNumber((prev) => prev - 2);
    }
    if (event.target.name === "+2") {
      setPageNumber((prev) => prev + 2);
    }
  }

  return (
    <div className="pagination">
      {pageNumber > 1 && (
        <button
          className="pagination-btn prev"
          name="prev"
          onClick={(event) => handleBtnClick(event)}
        >
          {" "}
          prev
        </button>
      )}
      {pageNumber > 2 && (
        <button
          className="pagination-btn "
          name="-2"
          onClick={(event) => handleBtnClick(event)}
        >
          {" "}
          {pageNumber - 2}{" "}
        </button>
      )}
      {pageNumber > 1 && (
        <button
          className="pagination-btn "
          name="prev"
          onClick={(event) => handleBtnClick(event)}
        >
          {" "}
          {pageNumber - 1}{" "}
        </button>
      )}
      <button className="pagination-btn selected-btn"> {pageNumber} </button>
      {pageNumber < numberOfPages && (
        <button
          className="pagination-btn "
          name="next"
          onClick={(event) => handleBtnClick(event)}
        >
          {" "}
          {pageNumber + 1}{" "}
        </button>
      )}
      {pageNumber < numberOfPages - 1 && (
        <button
          className="pagination-btn"
          name="+2"
          onClick={(event) => handleBtnClick(event)}
        >
          {" "}
          {pageNumber + 2}{" "}
        </button>
      )}
      {pageNumber < numberOfPages && (
        <button
          className="pagination-btn next"
          name="next"
          onClick={(event) => handleBtnClick(event)}
        >
          {" "}
          next{" "}
        </button>
      )}
    </div>
  );
}
