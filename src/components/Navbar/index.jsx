function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className='main-header-menu'>
      <section>
        <a
          href='#home'
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
        <a
          href='#projects'
          onClick={() => handlePageChange("Projects")}
          className={
            currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </a>

        <a
          href='#art'
          onClick={() => handlePageChange("Art")}
          className={currentPage === "Art" ? "nav-link active" : "nav-link"}
        >
          Art
        </a>
        {/* 
        <a
          href='#contact'
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a> */}

        <div class='animation start-home'></div>
      </section>
      {/* <div class='C0'></div> */}
    </nav>
  );
}

export default Navbar;
