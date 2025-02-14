import React from "react";
import Layout from "./components/layout/layout";
import { RegisterPage, UserList } from "./pages/users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users" element={<RegisterPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
