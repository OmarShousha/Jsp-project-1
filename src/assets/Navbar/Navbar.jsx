import React, { useEffect, useState } from 'react'

export default function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>

      <nav className='navbar navbar-expand-lg navbar-dark fixed-top '>
          <div className="container">
            <a className="navbar-brand fw-bold" href="#">Bakery Shop</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fa-solid fa-bars" style={{color: "#c98a40"}}></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav fw-semibold m-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#Home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " aria-current="page" href="#Work">Work</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#About">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#Recipes">Recipes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#Testymonials">Testymonials</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
      </nav>

    </>
  )
}
