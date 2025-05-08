import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import CalendarPage from "./components/CalendarPage";
import TaskPage from "./components/TaskPage";
import SignIn from "./components/AuthForm/SignIn";
import SignUp from "./components/AuthForm/SignUp";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/tasks" element={<TaskPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
