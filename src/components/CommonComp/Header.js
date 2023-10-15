import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import Sidebar from "./SubComp/Sidebar";
import Logo from "./SubComp/Logo";

const Header = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  useEffect(() => {
    console.log('useEffect ran');
  }, [])

  return (
    <header className={styles.header}>
      {sidebarOpen ? '' : <Logo />}
      <nav className={styles.navbarDesktop}>
        <button
          className={styles.home}
          onClick={() => navigate('/')}
        >
          Home
        </button>
        <button
          className={styles.findADoctor}
          onClick={() => navigate('/consult')}
        >
          Find a doctor
        </button>
        <button className={styles.apps}>Apps</button>
        <button
          className={styles.testimonials}
          onClick={() => navigate('/blogpost')}
        >Blogs</button>
        <button className={styles.aboutus}>About us</button>
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
