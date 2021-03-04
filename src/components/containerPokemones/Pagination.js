import React from "react";

export const Pagination = ({ page, pagesAmount, setPage }) => {
  const arrPages = (pagesAmount) => {
    let arr = [];
    for (let index = 0; index < pagesAmount; index++) {
      arr.push(index + 1);
    }
    return arr;
  };
  const activePage = (p) => (page === p ? "active" : "");

  const iniIdx =
    page > 5 ? (page > pagesAmount - 5 ? pagesAmount - 10 : page - 5) : 0;
  const finIdx = page > 5 ? page + 5 : 10;

  const pages = arrPages(pagesAmount)
    .slice(iniIdx, finIdx)
    .map((p) => (
      <li className={`page-item ${activePage(p)}`} key={p}>
        <button className="page-link" onClick={() => setPage(p)}>
          {p}
        </button>
      </li>
    ));

  return (
    <nav aria-label="Page navigation example ">
      <ul className="pagination justify-content-end">
        <li className="page-item">
          <button
            className="page-link"
            onClick={() => setPage(1)}
            aria-disabled="true"
          >
            {"<<"}
          </button>
        </li>

        {pages}

        <li className="page-item">
          <button
            className="page-link"
            onClick={() => setPage(pagesAmount)}
            aria-disabled="true"
          >
            {">>"}
          </button>
        </li>
      </ul>
    </nav>
  );
};
