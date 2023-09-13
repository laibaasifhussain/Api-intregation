import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Post from "../pages/post";
import Update from "../pages/update";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="post" element={<Post />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </Router>
  );
}
