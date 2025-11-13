import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CallPage from "./pages/call-page/CallPage";
import VideoCallPage from "./pages/call-video-page/VideoCallPage";
import SignupForm from "./components/SignUpForm/SignUpForm";

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
      </Routes>
    </Router>
  );
}

export default App;
