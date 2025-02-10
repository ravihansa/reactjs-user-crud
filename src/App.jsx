import React from "react";
import { RegisterPage, UserList } from "./pages/users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
