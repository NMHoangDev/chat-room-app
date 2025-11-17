import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CallPage from "./pages/call-page/CallPage";
import VideoCallPage from "./pages/call-video-page/VideoCallPage";
import SignupForm from "./components/SignUpForm/SignUpForm";
import ProfilePage from "./pages/profile/ProfilePage";
import ChatBoxPage from "./pages/chatbox/Chatbox";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Signup */}
        <Route path="/signup" element={<SignupForm />} />

        {/* Cuộc gọi */}
        <Route path="/call" element={<CallPage />} />

        {/* Cuộc họp (Video Call) */}
        <Route path="/video-call" element={<VideoCallPage />} />

        {/* Profile Page */}
        <Route path="/profile" element={<ProfilePage />} />

        {/* Chatbox Page */}
        <Route path="/chatbox" element={<ChatBoxPage />} />
      </Routes>
    </Router>
  );
}

export default App;
