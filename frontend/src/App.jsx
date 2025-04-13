import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CreateBooks from "./pages/CreateBook.jsx";
import ShowBook from "./pages/ShowBook.jsx";
import EditBook from "./pages/EditBook.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";

const App = () => {
  return (
    <>
      <div className="bg-red-400 text-white text-center">
        BOOK STORE MERN-STACK APP
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/create" element={<CreateBooks />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
      </Routes>
    </>
  );
};

export default App;
