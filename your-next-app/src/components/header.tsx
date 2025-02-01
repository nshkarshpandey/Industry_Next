"use client";


import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // Redirect the base path to "/home" if at the root
  useEffect(() => {
    if (pathname === "/") {
      router.replace("/home");
    }
  }, [pathname, router]);

  // Toggle the dropdown menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    if (pathname === "/home") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/home#${sectionId}`);
    }
    setMenuOpen(false); // Close the menu on small screens
  };

  const getNavLinkClass = (path: string) => {
    return pathname === path ? "nav-link fw-bold active" : "nav-link";
  };

  const isContactPage = pathname === "/contact";

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container d-flex justify-content-between align-items-center">
          <Link href="/home" className="navbar-brand">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={200}
              height={30}
              className="home-img"
              loading="eager"
            />
          </Link>

          <button
            className={`navbar-toggler d-lg-none ${menuOpen ? "open" : ""}`}
            type="button"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <span className="close-icon">&times;</span>
            ) : (
              <span className="navbar-toggler-icon"></span>
            )}
          </button>

          {menuOpen && (
            <div className="dropdown-menu show dropdown-menu-end position-absolute mt-2 small-screen-menu">
              <Link
                href="/home"
                className={`${getNavLinkClass("/home")} dropdown-item`}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              {!isContactPage && (
                <>
                  <Link
                    href="/home#about"
                    className="dropdown-item"
                    onClick={() => scrollToSection("about")}
                  >
                    About
                  </Link>
                  <Link
                    href="/home#services"
                    className="dropdown-item"
                    onClick={() => scrollToSection("services")}
                  >
                    Services
                  </Link>
                </>
              )}
              <Link
                href="/contact"
                className={`${getNavLinkClass("/contact")} dropdown-item`}
                onClick={() => setMenuOpen(false)}
              >
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
