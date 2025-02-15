import React from "react";
import Layout from "./components/layout/layout";
import LogInPage from "./pages/login";
import { RegisterPage, UserList } from "./pages/users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./routes/privateRoute";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<LogInPage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<UserList />} />
              <Route path="/users" element={<RegisterPage />} />
            </Route>
            <Route path="*" element={<LogInPage />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
