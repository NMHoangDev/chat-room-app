import React, { useState } from "react";
import Sidebar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import styles from "./ProfilePage.module.css";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("personal");

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    navigate("/signup"); 
  };

  return (
    <div className={styles.container}>
      <Header toggleSidebar={toggleSidebar} />

      <div className={styles.mainLayout}>
        <Sidebar isSidebarOpen={isSidebarOpen} />

        <main
          className={`${styles.mainContent} ${
            isSidebarOpen ? styles.openContent : ""
          }`}
        >
          <div className={styles.profileWrapper}>
            {/* AVATAR + BASIC INFO */}
            <div className={styles.topSection}>
              <div className={styles.avatarCircle}>T</div>
              <h2 className={styles.username}>Tuấn Khải Lê</h2>
              <p className={styles.joinDate}>Joined June 2025</p>
              <button className={styles.logoutBtn} onClick={handleLogout}>Logout</button>
            </div>

            {/* STATS */}
            <div className={styles.statsRow}>
              <div className={styles.statCard}>
                <span className={styles.statIcon}>🏆</span>
                <p className={styles.statLabel}>Current Rank</p>
                <h3 className={styles.statValue}>#5166</h3>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statIcon}>📃</span>
                <p className={styles.statLabel}>Credits</p>
                <h3 className={styles.statValue}>0</h3>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statIcon}>⭐</span>
                <p className={styles.statLabel}>Total Points</p>
                <h3 className={styles.statValue}>30</h3>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statIcon}>🔥</span>
                <p className={styles.statLabel}>Streak</p>
                <h3 className={styles.statValue}>0</h3>
              </div>
            </div>

            {/* TABS */}
            <div className={styles.tabBar}>
              <button
                className={`${styles.tabBtn} ${
                  activeTab === "personal" ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab("personal")}
              >
                Personal Info
              </button>
              <button
                className={`${styles.tabBtn} ${
                  activeTab === "activity" ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab("activity")}
              >
                Activity History
              </button>
              <button
                className={`${styles.tabBtn} ${
                  activeTab === "payments" ? styles.activeTab : ""
                }`}
                onClick={() => setActiveTab("payments")}
              >
                Payments
              </button>
            </div>

            {/* TAB CONTENT */}
            <div className={styles.tabContent}>
              {activeTab === "personal" && (
                <form className={styles.infoForm}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Name</label>
                      <input type="text" defaultValue="Tuấn Khải Lê" />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Email</label>
                      <input
                        type="email"
                        defaultValue="letuankhai.lk@gmail.com"
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Phone Number</label>
                      <input type="text" placeholder="Phone Number" />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Date Of Birth</label>
                      <input type="date" />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Gender</label>
                      <select defaultValue="Male">
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className={styles.formGroup}>
                      <label>School Name</label>
                      <input type="text" placeholder="School Name" />
                    </div>
                  </div>

                  <div className={styles.saveWrapper}>
                    <button type="submit" className={styles.saveBtn}>
                      Save Changes
                    </button>
                  </div>
                </form>
              )}

              {activeTab === "activity" && (
                <div className={styles.placeholder}>
                  <p>No activity history yet.</p>
                </div>
              )}

              {activeTab === "payments" && (
                <div className={styles.placeholder}>
                  <p>No payment data available.</p>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;
