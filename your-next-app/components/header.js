import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image';

const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // Redirect the base path to "/home" if at the root
  React.useEffect(() => {
    if (router.pathname === "/") {
      router.replace("/home");
    }
  }, [router]);

  // Toggle the dropdown menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Scroll to section
  const scrollToSection = (sectionId) => {
    if (router.pathname === "/home") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/home#${sectionId}`);
    }
    setMenuOpen(false); // Close the menu on small screens
  };

  const getNavLinkClass = (path) => {
    return router.pathname === path ? "nav-link fw-bold active" : "nav-link";
  };

  const isContactPage = router.pathname === "/contact";

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container d-flex justify-content-between align-items-center">
          <Link href="/home" className="navbar-brand">
            <Image src="/images/logo.png" alt="Logo" style={{ height: "40px" }} className="home-img" />

          </Link>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon ${menuOpen ? "open" : ""}`}></span>
          </button>

          {menuOpen && (
            <div className="dropdown-menu dropdown-menu-end position-absolute mt-2 small-screen-menu">
              <Link href="/home" className={getNavLinkClass("/home")} onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              {!isContactPage && (
                <>
                  <button
                    className="nav-link bg-transparent border-0"
                    style={{ paddingLeft: "11px" }}
                    onClick={() => scrollToSection("about")}
                  >
                    About
                  </button>
                  <button
                    className="nav-link bg-transparent border-0"
                    style={{ paddingLeft: "11px" }}
                    onClick={() => scrollToSection("services")}
                  >
                    Services
                  </button>
                </>
              )}
              <Link href="/contact" className={getNavLinkClass("/contact")} onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </div>
          )}

          <div className="collapse navbar-collapse d-none d-lg-flex" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link href="/home" className={getNavLinkClass("/home")}>
                  Home
                </Link>
              </li>
              {!isContactPage && (
                <>
                  <li className="nav-item">
                    <button
                      className="nav-link bg-transparent border-0"
                      onClick={() => scrollToSection("about")}
                    >
                      About
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className="nav-link bg-transparent border-0"
                      onClick={() => scrollToSection("services")}
                    >
                      Services
                    </button>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Link href="/contact" className={getNavLinkClass("/contact")}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
