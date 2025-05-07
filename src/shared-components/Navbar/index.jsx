import { Link } from "react-router-dom";

export default function Navbar({ scrollToSignUpRef }) {
  return (
    <nav className="shadow-lg bg-black/90 text-white p-8 flex justify-between h-32 items-center font-monte sticky top-0 w-full">
      <Link
        to="/"
        className="text-2xl font-semibold"
        aria-label="MiniProj homepage"
      >
        MiniProj
      </Link>
      <ul className="flex text-3xl items-center">
        <li>
          <Link
            to="/calendar"
            className="calendar-btn"
            aria-label="View Calendar"
          >
            <i className="fa-solid fa-calendar-days" aria-hidden="true"></i>
          </Link>
        </li>
        <li className="tasks-btn">
          <Link to="/tasks" aria-label="View Tasks">
            <i className="fa-solid fa-list-check" aria-hidden="true"></i>
          </Link>
        </li>
        <li className="ai-chat-btn">
          <Link to="/ai-chat" aria-label="Open AI Chat">
            <i className="fa-solid fa-robot" aria-hidden="true"></i>
          </Link>
        </li>
      </ul>

      <ul className="flex justify-between w-46 font-semibold">
        <li>
          <Link to="/login" className="signin-btn mr-4">
            Log In
          </Link>
        </li>
        <li>
          <button onClick={scrollToSignUpRef}>Sign Up</button>
        </li>
      </ul>
    </nav>
  );
}
