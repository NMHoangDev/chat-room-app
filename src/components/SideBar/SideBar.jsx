import React from "react";
import { FaVideo, FaPhoneAlt, FaFacebookMessenger } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = ({ isSidebarOpen, onClose }) => {
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
          onClick={onClose}
        >
          <FaVideo /> Cuộc họp
        </Link>

        {/* CUỘC GỌI → CALL PAGE */}
        <Link
          to="/call"
          className={`${styles.navItem} ${
            location.pathname === "/call" ? styles.active : ""
          }`}
          onClick={onClose}
        >
          <FaPhoneAlt /> Cuộc gọi
        </Link>

        {/* Trò chuyện → CHATBOX PAGE */}
        <Link
          to="/chatbox"
          className={`${styles.navItem} ${
            location.pathname === "/chatbox" ? styles.active : ""
          }`}
          onClick={onClose}
        >
          <FaFacebookMessenger /> Trò chuyện
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
