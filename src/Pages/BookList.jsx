import React from "react";
import { Link } from "react-router-dom";

const BookList = () => {
  return (
    <div className="BookList">
      <Link to="/booklist/1">Book 1</Link>
      <br />
      <Link to="/booklist/2">Book 2</Link>
      <br />
      <Link to="/booklist/new">New Book</Link>
    </div>
  );
};

export default BookList;
