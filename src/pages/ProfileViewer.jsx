import React, { useState } from 'react';
import './Profile.css'; 
// Giả sử bạn sử dụng React Icons cho icon chuyên nghiệp

// Component cho Stats Card
const ProfileViewer = ({ icon, title, value }) => (
  <div className="stat-card-modern">
    <div className="stat-icon-modern">{icon}</div> 
    <div className="stat-title-modern">{title}</div>
    <div className="stat-value-modern">{value}</div>
  </div>
);

const ModernProfile = () => {
  const [activeTab, setActiveTab] = useState('info');

  const renderPersonalForm = () => (
    <div className="form-content-modern">
      <div className="form-grid-modern">
        {/* Hàng 1: Name & Email */}
        <div className="form-group-modern">
          <label>Tên hiển thị</label>
          <input type="text" defaultValue="Tuấn Khải Lê" />
        </div>
        <div className="form-group-modern">
          <label>Email liên hệ</label>
          <input type="email" defaultValue="letuankhai.hk@gmail.com" />
        </div>
        
        {/* Hàng 2: Phone Number & Date of Birth */}
        <div className="form-group-modern">
          <label>Số điện thoại</label>
          <input type="text" placeholder="Thêm số điện thoại" />
        </div>
        <div className="form-group-modern">
          <label>Vị trí / Công việc</label>
          <input type="text" placeholder="Lập trình viên, Sinh viên..." /> 
        </div>
        
        {/* Hàng 3: Gender & School Name (có thể đổi thành Cài đặt Chat) */}
        <div className="form-group-modern">
          <label>Trạng thái mặc định</label>
          <select defaultValue="Available">
            <option>Available</option>
            <option>Busy</option>
            <option>Do Not Disturb</option>
          </select>
        </div>
        <div className="form-group-modern">
          <label>Username Chat</label>
          <input type="text" defaultValue="tuan_khai_dev" />
        </div>
      </div>
      
      <button className="save-button-modern">Lưu Thay Đổi</button>
    </div>
  );

  return (
    <div className="profile-container-modern">
      {/* 1. HEADER */}
      <div className="profile-header-modern">
        <div className="avatar-modern">T</div>
        <p className="profile-name-modern">Tuấn Khải Lê</p>
        <p className="profile-join-date-modern">Tham gia: Tháng 06, 2025</p>
        <button className="logout-button-modern">Đăng Xuất</button>
      </div>

      {/* 2. STATS CARDS (Thông số ChatRoom) */}
      <div className="stats-grid-modern">
        {/* <StatCardModern icon="📞" title="Cuộc Họp Đã Tạo" value="45" />
        <StatCardModern icon="🕒" title="Tổng Thời Gian Họp" value="120 giờ" />
        <StatCardModern icon="💬" title="Tin Nhắn Đã Gửi" value="2,560" />
        <StatCardModern icon="👥" title="Người Tham Gia Duy Nhất" value="85" /> */}
      </div>

      {/* 3. TABS */}
      <div className="profile-tabs-modern">
        <div
          className={`tab-item-modern ${activeTab === 'info' ? 'active' : ''}`}
          onClick={() => setActiveTab('info')}
        >
          Thông tin cá nhân
        </div>
        <div
          className={`tab-item-modern ${activeTab === 'history' ? 'active' : ''}`}
          onClick={() => setActiveTab('history')}
        >
          Lịch sử hoạt động
        </div>
        <div
          className={`tab-item-modern ${activeTab === 'settings' ? 'active' : ''}`}
          onClick={() => setActiveTab('settings')}
        >
          Cài đặt Chat
        </div>
      </div>

      {/* 4. TAB CONTENT (FORM) */}
      {activeTab === 'info' && renderPersonalForm()}
      {activeTab === 'history' && <div style={{ padding: '10px' }}>[Giao diện Lịch sử các cuộc gọi và tin nhắn đã tham gia]</div>}
      {activeTab === 'settings' && <div style={{ padding: '10px' }}>[Giao diện Cài đặt camera, microphone, thông báo...]</div>}
      
    </div>
  );
};

export default ProfileViewer;