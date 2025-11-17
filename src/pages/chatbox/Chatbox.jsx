import React, { useState } from "react";
import Sidebar from "../../components/SideBar/SideBar";
import Header from "../../components/Header/Header";
import styles from "./Chatbox.module.css";

// --- Icons (Sử dụng SVG cho sạch sẽ) ---
const CallIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
  </svg>
);

const AttachIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
  </svg>
);
// --- Hết phần Icons ---

const ChatBoxPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");

  const CURRENT_USER_EMAIL = "user@chat.com";

  // THAY ĐỔI 1: Bỏ avatarUrl khỏi mảng users
  const users = [
    { name: "admin", email: "admin@chat.com" },
    { name: "User", email: "user@chat.com" },
    { name: "Adam", email: "adam@chat.com" },
    { name: "Adam1", email: "adam1@chat.com" },
    { name: "Adam2", email: "adam2@chat.com" },
    { name: "John Smith", email: "john@chat.com" },
    { name: "ABC", email: "abc@abc.com" },
    { name: "ADMINN", email: "adminn@chat.com" },
  ];

  const [messages, setMessages] = useState([
    { id: 1, senderEmail: "admin@chat.com", text: "hey 👋" },
  ]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        senderEmail: CURRENT_USER_EMAIL,
        text: message,
      };
      setMessages([...messages, newMessage]);
      setMessage("");
    }
  };

  const getUserDetails = (email) => {
    return users.find((user) => user.email === email) || {};
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className={styles.container}>
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className={styles.mainLayout}>
        <Sidebar isSidebarOpen={isSidebarOpen} onClose={closeSidebar}/>

        {/* --- Cột Messages (Bên trái) --- */}
        <div className={styles.leftColumn}>
          <h3>Messages</h3>
          <ul className={styles.messageList}>
            {/* THAY ĐỔI 2: Bỏ .slice(0, 1) để map qua tất cả user */}
            {users.map((user) => (
              <li
                key={user.email}
                onClick={() => setSelectedChat(user)}
                className={
                  selectedChat?.email === user.email ? styles.activeChat : ""
                }
              >
                {/* THAY ĐỔI 3: Dùng lại div avatar mặc định */}
                <div className={styles.userAvatar}>{user.name[0]}</div>
                <div>
                  <p className={styles.userName}>{user.name}</p>
                  <p className={styles.userEmail}>{user.email}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Cột Chat (Ở giữa) --- */}
        <div className={styles.chatColumn}>
          {selectedChat ? (
            <>
              {/* Header của Chat */}
              <div className={styles.chatHeader}>
                {/* THAY ĐỔI 3: Dùng lại div avatar mặc định */}
                <div className={styles.userAvatar}>
                  {selectedChat.name[0]}
                </div>
                <div className={styles.chatHeaderInfo}>
                  <h3>{selectedChat.name}</h3>
                  <p>{selectedChat.email}</p>
                </div>
                <button className={styles.iconButton}>
                  <CallIcon />
                </button>
              </div>

              {/* Khu vực hiển thị tin nhắn */}
              <div className={styles.chatMessages}>
                {messages.map((msg) => {
                  const senderDetails = getUserDetails(msg.senderEmail);
                  const isSentByMe = msg.senderEmail === CURRENT_USER_EMAIL;

                  return (
                    <div
                      key={msg.id}
                      className={
                        isSentByMe
                          ? styles.messageSent
                          : styles.messageReceived
                      }
                    >
                      {!isSentByMe && (
                        /* THAY ĐỔI 3: Dùng lại div avatar mặc định */
                        <div className={styles.userAvatar}>
                          {senderDetails.name ? senderDetails.name[0] : "?"}
                        </div>
                      )}
                      <div className={styles.messageBubble}>{msg.text}</div>
                    </div>
                  );
                })}
              </div>

              {/* Khu vực nhập tin nhắn */}
              <div className={styles.chatInput}>
                <button className={`${styles.iconButton} ${styles.attachButton}`}>
                  <AttachIcon />
                </button>
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button className={`${styles.iconButton} ${styles.sendButton}`} onClick={handleSendMessage}>
                  <SendIcon />
                </button>
              </div>
            </>
          ) : (
            <div className={styles.noChatSelected}>
              <p>Select a chat to start messaging</p>
            </div>
          )}
        </div>

        {/* --- Cột People (Bên phải) --- */}
        <div className={styles.rightColumn}>
          <h3>People</h3>
          <ul className={styles.userList}>
            {users.map((user) => (
              <li key={user.email}>
                {/* THAY ĐỔI 3: Dùng lại div avatar mặc định */}
                <div className={styles.userAvatar}>{user.name[0]}</div>
                <div>
                  <p className={styles.userName}>{user.name}</p>
                  <p className={styles.userEmail}>{user.email}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChatBoxPage;