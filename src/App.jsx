import React, { useContext } from "react";
import LogInPage from "./pages/login";
import UsersPage from "./pages/users";
import RegisterPage from "./pages/register";
import Layout from "./components/layout/layout";
import PrivateRoute from "./routes/privateRoute";
import { AuthProvider, AuthContext } from "./context/authContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

const AppContent = () => {
  const { token } = useContext(AuthContext);
  return token ? (
    <Layout>
      <Routes>
        <Route path="/login" element={<LogInPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<UsersPage />} />
          <Route path="/users" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<UsersPage />} />
      </Routes>
    </Layout>
  ) : (
    <Routes>
      <Route path="*" element={<LogInPage />} />
    </Routes>
  );
};

export default App;
