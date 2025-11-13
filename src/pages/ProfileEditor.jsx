// ProfileEditor.jsx (Phần dựa trên Ảnh 1)
import React, { useState } from 'react';
import './Profile.css'; 

const ProfileEditor = ({ initialData, onSave }) => {
  const [activeTab, setActiveTab] = useState('basic');
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Gọi hàm lưu dữ liệu
    alert("Đã lưu thông tin!");
  };

  const renderBasicTab = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Email</label>
        <input 
          type="email" 
          value="letuankhai.hk@gmail.com" 
          disabled 
          style={{ backgroundColor: '#f5f5f5' }}
        />
        <p style={{ fontSize: '12px', color: 'red', margin: '5px 0' }}>
            Email: letuankhai.hk@gmail.com (STUDY4 không hỗ trợ đổi email. Vui lòng liên hệ chúng tôi nếu bạn đã mua khóa học và muốn đổi account.) 
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="name">Họ và Tên</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
        />
      </div>

      <div className="form-group">
        <label htmlFor="bio">Về bản thân</label>
        <textarea 
          id="bio" 
          name="bio" 
          value={formData.bio} 
          onChange={handleChange} 
          rows="4" 
          placeholder="Chia sẻ những điều thú vị về bạn"
        />
      </div>

      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          value={formData.username} 
          onChange={handleChange} 
        />
      </div>

      <div className="form-group">
        <label>Ảnh đại diện</label>
        <input type="file" />
      </div>

      <div className="form-group">
        <label>Banner</label>
        <input type="file" />
      </div>

      <button type="submit" className="save-button">Lưu</button>
    </form>
  );

  const renderPrivacyTab = () => (
    <div style={{ padding: '20px', color: '#555' }}>
        <h3>Cài đặt Quyền riêng tư</h3>
        <p>Chọn ai có thể xem trạng thái hoạt động của bạn:</p>
        <label>
            <input type="checkbox" defaultChecked /> Hiển thị trạng thái "Đang họp"
        </label>
        <br/>
        <label>
            <input type="checkbox" /> Chỉ người trong danh bạ mới có thể gọi tôi
        </label>
    </div>
  );

  const renderPasswordTab = () => (
    <div style={{ padding: '20px' }}>
        <h3>Thay đổi Mật khẩu</h3>
        <div className="form-group">
            <label htmlFor="currentPass">Mật khẩu hiện tại</label>
            <input type="password" id="currentPass" />
        </div>
        <div className="form-group">
            <label htmlFor="newPass">Mật khẩu mới</label>
            <input type="password" id="newPass" />
        </div>
        <div className="form-group">
            <label htmlFor="confirmPass">Xác nhận mật khẩu mới</label>
            <input type="password" id="confirmPass" />
        </div>
        <button type="button" className="save-button" style={{ backgroundColor: '#ff9800' }}>Cập nhật Mật khẩu</button>
    </div>
  );

  return (
    <div className="profile-container">
      <h2>Cập nhật thông tin cá nhân</h2>
      
      <div style={{ display: 'flex', borderBottom: '2px solid #e0e0e0', marginBottom: '20px' }}>
        <button 
          className={`tab-button ${activeTab === 'basic' ? 'active' : ''}`} 
          onClick={() => setActiveTab('basic')}
        >
          Thông tin cơ bản
        </button>
        <button 
          className={`tab-button ${activeTab === 'privacy' ? 'active' : ''}`} 
          onClick={() => setActiveTab('privacy')}
        >
          Quyền riêng tư
        </button>
        <button 
          className={`tab-button ${activeTab === 'password' ? 'active' : ''}`} 
          onClick={() => setActiveTab('password')}
        >
          Thay mật khẩu
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'basic' && renderBasicTab()}
        {activeTab === 'privacy' && renderPrivacyTab()}
        {activeTab === 'password' && renderPasswordTab()}
      </div>

    </div>
  );
};

export default ProfileEditor;