import Chat from "pages/Chat";
import PageNotFound from "pages/PageNotFound";
import Schedule from "pages/Schedule";
import Settings from "pages/Settings";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/schedules" element={<Schedule />} />
        <Route path="/chats" element={<Chat />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
