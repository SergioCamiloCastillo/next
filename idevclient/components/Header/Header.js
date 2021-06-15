import React, { useState,useEffect } from "react";
import { Layout } from "antd";
import { Menu } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
const { SubMenu } = Menu;
import Link from "next/link";
import useWindowSize from "../../hooks/useWindowSize";


import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export default function Header() {
  const [click, setClick] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const { width, height } = useWindowSize();


  const state = {
    current: "mail",
  };
  const { Header } = Layout;
  const { current } = state;

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () =>setClick(false);


 useEffect(() => {
   window.addEventListener("scroll",changeBackground)
   return ()=> window.removeEventListener("scroll", changeBackground)
 }, [])

const changeBackground=()=>{
  if(window.scrollY>=80){
    setNavbar(true);
  }else{
    setNavbar(false);
  }
}
 
  return (
    <>
      <nav className={navbar ? "navbar active" : "navbar"}>
        <div className="navbar-container">
          <Link href="/#" className="navbar-logo">
            Idev
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars}></FontAwesomeIcon>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>

            <li className='nav-item'>
              <Link href='/#' className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className='nav-item'>
              <Link href='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
            </li>
            <li className='nav-item'>
              <Link href='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link>
            </li>
            <li className='nav-item'>
              <Link href='/sign-up' className='nav-links-' onClick={closeMobileMenu}>Sign Up</Link>
            </li>
          </ul>
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
