import React, { useState } from "react";
import Sidebar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import styles from "./CallPage.module.css";

const CallPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <Header toggleSidebar={toggleSidebar} />

      <div className={styles.mainLayout}>
        {/* SIDEBAR */}
        <Sidebar isSidebarOpen={isSidebarOpen} />

        {/* MAIN CONTENT */}
        <main
          className={`${styles.mainContent} ${
            isSidebarOpen ? styles.openContent : ""
          }`}
        >
          <div className={styles.contentCenter}>
            <div className={styles.heroSection}>
              <img
                src="https://www.gstatic.com/meet/call_landing_illustration_963a2f074d52c2e278e3a44b6f376ece.svg"
                alt="Cuộc gọi"
                className={styles.heroImage}
              />

              <h1 className={styles.title}>Kết nối với người bạn biết</h1>

              <p className={styles.subtitle}>
                Kết nối, cộng tác và ăn mừng ở mọi nơi với Google Meet
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CallPage;
