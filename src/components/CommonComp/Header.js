import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Sidebar from "./SubComp/Sidebar";
import Logo from "./SubComp/Logo";

const headerLinks = [
  {
    'linkText': 'Home',
    'linkURL': '/',
    'linkId': 0
  },
  {
    'linkText': 'Find a doctor',
    'linkURL': '/doclist',
    'linkId': 1
  },
  {
    'linkText': 'Self Diagnosis',
    'linkURL': '/diagnosis',
    'linkId': 2
  },
  {
    'linkText': 'Blogs',
    'linkURL': '/blogpost',
    'linkId': 3
  },
  {
    'linkText': 'Our Products',
    'linkURL': '/product',
    'linkId': 4
  }


]
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/home');
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [])
  const linkBtns = headerLinks.map((link) => {
    return (
      <button
        className={link.linkURL == activeLink ? styles.linkBtnFocus : styles.linkBtn}
        key={link.linkId}
        onClick={() => {
          navigate(link.linkURL);
        }}
      >
        {link.linkText}
      </button>
    )
  })
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }
  const SideBarIconBtn = () => {
    return (
      <button
        className={styles.navIconButton}
        onClick={toggleSidebar}
      >
        <img src="/images/LandingPage/navbar.svg" alt="navbar" />
      </button>
    );
  }



  return (
    <header className={styles.header}>
      {sidebarOpen ? '' : <Logo />}
      <nav className={styles.navbarDesktop}>
        {linkBtns}
      </nav>
      <nav className={styles.navbarMobile}>
        {sidebarOpen ?
          <Sidebar toggleSidebar={toggleSidebar} /> : <SideBarIconBtn />
        }
      </nav>
    </header>
  );
};

export default Header;
