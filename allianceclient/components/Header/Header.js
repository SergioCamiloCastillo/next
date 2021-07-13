import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faBars, faCode } from "@fortawesome/free-solid-svg-icons";

const { SubMenu } = Menu;

export default function Header() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container container">
          <div className="spacing-80"></div>
          <Link href="/#" className="navbar-logo">
            <Image width={80} height={60} class="navbar__logo" src="/images/logooscuro.png" />
          </Link>
          <div className="menu-icon vertical-center" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars}></FontAwesomeIcon>
          </div>
          <div className={click ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu__ul">
              <li className="sub-menu-parent" tab-index="0">
                <Link href="/">Home</Link>
              </li>
              <li className="sub-menu-parent" tab-index="0">
                <Link href="/resumen">Resume</Link>
              </li>
              <li className="sub-menu-parent" tab-index="0">
                <Link href="/service">Service </Link>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Sub Item 1</a>
                  </li>
                  <li>
                    <a href="#">Sub Item 2</a>
                  </li>
                  <li>
                    <a href="#">Sub Item 3</a>
                  </li>
                  <li>
                    <a href="#">Sub Item 4</a>
                  </li>
                </ul>
              </li>
              <li className="sub-menu-parent" tab-index="0">
                <a href="#">Portafolio</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Sub Item 1</a>
                  </li>
                  <li>
                    <a href="#">Sub Item 2</a>
                  </li>
                  <li>
                    <a href="#">Sub Item 3</a>
                  </li>
                  <li>
                    <a href="#">Sub Item 4</a>
                  </li>
                  <li>
                    <a href="#">Sub Item 5</a>
                  </li>
                  <li>
                    <a href="#">Sub Item 6</a>
                  </li>
                </ul>
              </li>
              <li className="sub-menu-parent" tab-index="0">
                <a href="#">Blogs</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Sub Item 1</a>
                  </li>
                  <li>
                    <a href="#">Sub Item 2</a>
                  </li>
                </ul>
              </li>
              <li className="sub-menu-parent" tab-index="0">
                <Link href="http://google.com">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
 
  );
}
