import React from "react";
import {
  FaSearch,
  FaQuestionCircle,
  FaCog,
  FaEllipsisV,
  FaVideo,
} from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile"); 
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.menuIcon} onClick={toggleSidebar}>
          ☰
        </div>
        <div className={styles.logo}>
          <FaVideo className={styles.logoIcon} />
          <span className={styles.logoText}>Google Meet</span>
        </div>
      </div>

      <div className={styles.headerCenter}>
        <div className={styles.searchBox}>
          <FaSearch className={styles.searchIcon} />
        </div>
      </div>

      <div className={styles.headerRight}>
        <div className={styles.timeInfo}>09:12 • Th 5, 13 thg 11</div>
        <div className={styles.headerIcons}>
          <button className={styles.iconBtn}>
            <FaQuestionCircle />
          </button>
          <button className={styles.iconBtn}>
            <FaCog />
          </button>
          <button className={styles.iconBtn}>
            <FaEllipsisV />
          </button>
          <div className={styles.userAvatar} onClick={goToProfile}>
            <IoMdPerson />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
