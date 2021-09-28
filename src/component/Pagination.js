import React, { useState } from "react";
import JsonData from "../Fake_Data.json";
import ReactPaginate from "react-paginate";
import "./pagination.css";

const Pagination = () => {
  const [users, setUsers] = useState(JsonData);
  const [currentPage, setCurrentPage] = useState(0);

  const userPerPage = 10;
  const pagesVisited = currentPage * userPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + userPerPage)
    .map((user) => {
      const { first_name, last_name, email } = user;
      return (
        <div
          className="col-md-12 text-center p-3"
          style={{ border: "1px solid red" }}
        >
          <p>{first_name}</p>
          <p>{last_name}</p>
          <p>{email}</p>
        </div>
      );
    });

  return (
    <div className="container">
      <div className="row m-0">{displayUsers}</div>
      <div className="pagination_bar">
        <div className="row p-5">
          <div className="col-sm-12 col-md-6 d-flex justify-content-start align-items-center">
            <p className="mb-0">
              Show {pagesVisited + userPerPage} Items out of {users.length}
            </p>
          </div>
          <div className="col-sm-12 col-md-6 d-flex justify-content-end align-items-center">
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              pageCount={Math.ceil(users.length / userPerPage)}
              onPageChange={(e) => {
                setCurrentPage(e.selected);
              }}
              containerClassName={"paginationBtn"}
              previousLinkClassName={"previousBtn"}
              nextLinkClassName={"nextBtn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
