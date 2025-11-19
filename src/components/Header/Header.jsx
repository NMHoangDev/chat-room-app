import React from "react";
import {
  FaSearch,
  FaQuestionCircle,
  FaCog,
  FaEllipsisV,
  FaVideo,
  FaBars,
} from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import styles from "./Header.module.css";

const Header = ({ toggleSidebar, isSidebarOpen }) => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile"); 
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <button
          className={`${styles.menuIcon} ${isSidebarOpen ? styles.menuOpen : ""}`}
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
        <div className={styles.logo}>
          <FaVideo className={styles.logoIcon} />
          <span className={styles.logoText}>Google Meet</span>
        </div>
      </div>

      <div className={styles.headerCenter}>
        <div className={styles.searchBox}>
          <FaSearch className={styles.searchIcon} />

          <input
            type="text"
            placeholder="Search "
            className={styles.searchInput}
          />
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
          <div className={styles.userAvatar}>
            <IoMdPerson />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
