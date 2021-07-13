import React, { useState, useEffect } from "react";
import { Menu } from "antd";

import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import {
  
  faTimes,
  faBars,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

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
          <Link>
            <Image src="/"></Image>
          </Link>
          <div className='spacing-80'></div>
          <div className="menu-icon vertical-center" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars}></FontAwesomeIcon>
          </div>
          <div className={click ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu__ul">
              <li className="sub-menu-parent" tab-index="0">
                <Link href="http://google.com">Home</Link>
              </li>
              <li className="sub-menu-parent" tab-index="0">
                <Link href="http://google.com">Resume</Link>
              </li>
              <li className="sub-menu-parent" tab-index="0">
                <Link href="http://google.com">Service </Link>
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
    /*<Menu onClick={()=>handleClick()} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="mail" icon={<MailOutlined />}>
        Navigation One
      </Menu.Item>
      
      <SubMenu
        key="SubMenu"
        icon={<SettingOutlined />}
        title="Navigation Three - Submenu"
      >
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <Menu.Item key="alipay">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      </Menu.Item>
    </Menu>*/
  );
}
