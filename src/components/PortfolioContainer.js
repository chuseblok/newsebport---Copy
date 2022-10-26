import React, { useState } from "react";

import Navbar from "./Navbar/index";

import Home from "./pages/Home";

import Projects from "./pages/Projects";

// import Contact from "./pages/Contact";

import Art from "./pages/Art";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Navbar");

  const renderPage = () => {
    if (currentPage === "Projects") {
      return <Projects />;
    }

    if (currentPage === "Art") {
      return <Art />;
    }

    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div class='NB'>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}
    </div>
  );
}
