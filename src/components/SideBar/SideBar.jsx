import React from "react";
import { FaVideo, FaPhoneAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = ({ isSidebarOpen }) => {
  const location = useLocation();

  return (
    <aside
      className={`${styles.sidebar} ${
        isSidebarOpen ? styles.open : styles.closed
      }`}
    >
      <nav className={styles.nav}>
        {/* CUỘC HỌP → VIDEO CALL PAGE */}
        <Link
          to="/video-call"
          className={`${styles.navItem} ${
            location.pathname === "/video-call" ? styles.active : ""
          }`}
        >
          <FaVideo /> Cuộc họp
        </Link>

        {/* CUỘC GỌI → CALL PAGE */}
        <Link
          to="/call"
          className={`${styles.navItem} ${
            location.pathname === "/call" ? styles.active : ""
          }`}
        >
          <FaPhoneAlt /> Cuộc gọi
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
