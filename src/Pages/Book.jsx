import React from "react";
import { useParams } from "react-router-dom";
const Book = () => {
  const { id } = useParams();
  return (
    <div className="Book">
      <h1>Book {id}</h1>
    </div>
  );
};

export default Book;
