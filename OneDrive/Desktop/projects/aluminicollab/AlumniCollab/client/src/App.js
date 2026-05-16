import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/signup";
import PostJob from "./pages/PostJob";
import Jobs from "./pages/Jobs";
import Applicants from "./pages/Applicants";
import RoleProtectedRoute
from "./components/RoleProtectedRoute";
import Mentorship from "./pages/Mentorship";
import MentorshipRequests
from "./pages/MentorshipRequests";
import Chat from "./pages/Chat";
import AIAssistant
from "./pages/AIAssistant";
import AdminPanel
from "./pages/AdminPanel";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPanel />}/>
        <Route path="/ai-assistant" element={<AIAssistant />}/>
        <Route path="/chat" element={<Chat />}/>
        <Route
            path="/mentorship-requests"
            element={<MentorshipRequests />}
          />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={ <ProtectedRoute> <Dashboard /> </ProtectedRoute>}
/>
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/post-job" element={
          <RoleProtectedRoute
                      allowedRole="Recruiter"
                    >
                      <PostJob />
                    </RoleProtectedRoute>
                  }
                />
        <Route path="/jobs" element={<Jobs />} />
        <Route
              path="/applicants"
              element={
                <RoleProtectedRoute
                  allowedRole="Recruiter"
                >
                  <Applicants />
                </RoleProtectedRoute>
              }
            />
            <Route path="/profile" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;