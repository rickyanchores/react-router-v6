import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import FAQ from "./Pages/FAQ";
import NotFound from "./Pages/NotFound";

import "./styles.css";
import Nav from "./Components/Nav";
import BookList from "./Pages/BookList";
import Book from "./Pages/Book";
import NewBook from "./Pages/NewBook";

export default function App() {
  return (
    <div className="App">
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booklist">
            <Route index element={<BookList />} />
            <Route path={"id:"} element={<Book />} />
            <Route path={"new"} element={<NewBook />} />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </div>
  );
}
