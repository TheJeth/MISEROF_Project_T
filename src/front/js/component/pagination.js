import React from "react";

const Pagination = ({
  artPiecesPerPage,
  totalArtPieces,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalArtPieces / artPiecesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    const maxPagesToShow = 3;
    let startPage, endPage;

    if (totalPages <= maxPagesToShow) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= Math.ceil(maxPagesToShow / 2)) {
        startPage = 1;
        endPage = maxPagesToShow;
      } else if (currentPage + Math.floor(maxPagesToShow / 2) >= totalPages) {
        startPage = totalPages - maxPagesToShow + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.floor(maxPagesToShow / 2);
        endPage = currentPage + Math.ceil(maxPagesToShow / 2) - 1;
      }
    }

    return (
      <>
        <li className="page-item">
          <button onClick={() => paginate(1)} className="page-link">
            First
          </button>
        </li>
        <li className="page-item">
          <button
            onClick={() => paginate(currentPage - 1)}
            className="page-link"
          >
            Previous
          </button>
        </li>
        {pageNumbers.slice(startPage - 1, endPage).map((number) => (
          <li
            key={number}
            className={`page-item${currentPage === number ? " active" : ""}`}
          >
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            onClick={() => paginate(currentPage + 1)}
            className="page-link"
          >
            Next
          </button>
        </li>
        <li className="page-item">
          <button onClick={() => paginate(totalPages)} className="page-link">
            Last
          </button>
        </li>
      </>
    );
  };

  return (
    <nav>
      <ul className="pagination">{renderPageNumbers()}</ul>
    </nav>
  );
};

export default Pagination;

import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Pagination from "../component/pagination";

import AuthComponent from "../component/auth";
import "../../styles/exhibit.css";

export const Exhibits = () => {
  let fallBackURL =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqX-q4R4VGGs1ArQpqZ-Y5deWIBVJ97KHOp4bkuQlmg&s";
  const { store, actions } = useContext(Context);
  const [artPieces, setArtPieces] = useState([]);
  const [favorited, setFavorited] = useState({}); // State to track favorited items
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [artPiecesPerPage] = useState(10);

  const handleFavorite = (exhibit_museum_id) => {
    setFavorited((prevFavorited) => ({
      ...prevFavorited,
      [exhibit_museum_id]: !prevFavorited[exhibit_museum_id],
    }));
    actions.addFavorite(exhibit_museum_id);
  };

  useEffect(() => {
    setArtPieces(store.artPieces);
  }, [store.artPieces]);

  const indexOfLastArtPiece = currentPage * artPiecesPerPage;
  const indexOfFirstArtPiece = indexOfLastArtPiece - artPiecesPerPage;
  const currentArtPieces = artPieces.slice(
    indexOfFirstArtPiece,
    indexOfLastArtPiece
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <AuthComponent>
      <div
        className="text-center justify-content-center d-flex flex-wrap w-100"
        id="main"
      >
        <div
          className="text-center mt-5 justify-content-center d-flex flex-wrap w-100"
          id="main"
        >
          {loading
            ? "it's loading"
            : currentArtPieces.map((item, index) => (
                <div className="rowExhibit" key={index}>
                  <div
                    className="card"
                    style={{
                      width: "18rem",
                      height: "420px",
                      boxShadow: "10px 10px 20px 21px rgba(0, 0, 0, 0.2)",
                      border: "15px solid black",
                    }}
                  >
                    <Link to={`single/${item.exhibit_museum_id}`}>
                      <img
                        src={item.primary_image_small}
                        className="card-img-top"
                        width="18rem"
                        height="320px"
                        onError={(e) => {
                          e.target.src = fallBackURL; // Fallback image if there's an error
                        }}
                        alt={item.exhibit_name}
                      />
                    </Link>
                    <div className="card-body overflow-auto mb-2">
                      <p className="card-text" style={{ fontSize: "x-small" }}>
                        {item.exhibit_name}
                      </p>
                      <button
                        className={`exhibit-button ${
                          favorited[item.exhibit_museum_id] ? "favorited" : ""
                        }`}
                        onClick={() => {
                          handleFavorite(item.exhibit_museum_id);
                        }}
                      >
                        <i
                          className={`fas fa-heart ${
                            favorited[item.exhibit_museum_id] ? "favorited" : ""
                          }`}
                          aria-hidden="true"
                        ></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          <Pagination
            artPiecesPerPage={artPiecesPerPage}
            totalArtPieces={artPieces.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </AuthComponent>
  );
};