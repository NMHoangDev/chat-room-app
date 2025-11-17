import React, { useState } from "react";
import Sidebar from "../../components/SideBar/SideBar.jsx";
import Header from "../../components/Header/Header.jsx";
import styles from "./VideoCallPage.module.css";
import { FaVideo } from "react-icons/fa";

const VideoCallPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [meetingCode, setMeetingCode] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleNewMeeting = () => {
    console.log("Tạo cuộc họp mới");
  };

  const handleJoinMeeting = () => {
    if (meetingCode.trim()) {
      console.log("Tham gia cuộc họp:", meetingCode);
    }
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className={styles.container}>
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      {/* MAIN LAYOUT */}
      <div className={styles.mainLayout}>
        <Sidebar isSidebarOpen={isSidebarOpen} onClose={closeSidebar}/>

        <main
          className={`${styles.mainContent} ${
            isSidebarOpen ? styles.openContent : ""
          }`}
        >
          <div className={styles.centerWrapper}>
            <div className={styles.heroSection}>
              <h1 className={styles.title}>Tính năng họp và gọi video</h1>
              <p className={styles.subtitle}>
                Kết nối, cộng tác và ăn mừng ở mọi nơi với Google Meet
              </p>

              <div className={styles.actionSection}>
                <button
                  className={styles.newMeetingBtn}
                  onClick={handleNewMeeting}
                >
                  <FaVideo /> Cuộc họp mới
                </button>

                <div className={styles.joinSection}>
                  <input
                    type="text"
                    className={styles.meetingInput}
                    placeholder="Nhập một mã hoặc đường liên kết"
                    value={meetingCode}
                    onChange={(e) => setMeetingCode(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleJoinMeeting()}
                  />
                  <button
                    className={styles.joinBtn}
                    onClick={handleJoinMeeting}
                    disabled={!meetingCode.trim()}
                  >
                    Tham gia
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default VideoCallPage;
