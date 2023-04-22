import Chat from "pages/Chat";
import Home from "pages/Home";
import Login from "pages/Login";
import PageNotFound from "pages/PageNotFound";
import Schedule from "pages/Schedule";
import Settings from "pages/Settings";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/chats" element={<Chat />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
