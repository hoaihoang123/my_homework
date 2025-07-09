import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./Magazines/layout/Layout";
import LayoutDashboard from "./Dashboard/Layout/Layout";
import Category from "./Magazines/page/Category";
import Overview from "./Dashboard/page/Overview";
import Setting from "./Dashboard/page/Setting";
import Doctor from "./Dashboard/page/Doctor";
import Departments from "./Dashboard/page/Departments";
import Map from "./Dashboard/page/Map";
import History from "./Dashboard/page/History";
import Parents from "./Dashboard/page/Parents";
import WelcomeScreen from "./Form/auth/WelcomeScreen";
import LoginScreen from "./Form/auth/LoginScreen";
import SignUpScreen from "./Form/auth/SignUpScreen";
import RegisterLayout from "./RegisterForm";
import GrovaLoginLayout from "./GrovaLogin";
import UserRegistrationForm from "./UserRegistrationForm";
// import BigCMarket from "./page/BigCMarket";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/welcome" replace />} />

        {/* Auth Routes */}
        <Route path="/auth">
          <Route path="welcome" element={<WelcomeScreen />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="signup" element={<SignUpScreen />} />
        </Route>

        {/* Legacy auth routes (for backward compatibility) */}
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<SignUpScreen />} />

        {/* Magazine Routes */}
        <Route path="/magazine" element={<Layout />}>
          <Route index element={<Category />} />
          <Route path="category" element={<Category />} />
        </Route>

        {/* Dashboard Routes (Protected) */}
        <Route path="/dashboard" element={<LayoutDashboard />}>
          <Route index element={<Navigate to="overview" replace />} />
          <Route path="overview" element={<Overview />} />
          <Route path="patients" element={<Parents />} />
          <Route path="settings" element={<Setting />} />
          <Route path="doctors" element={<Doctor />} />
          <Route path="departments" element={<Departments />} />
          <Route path="history" element={<History />} />
          <Route path="map" element={<Map />} />
        </Route>

        {/* Other Routes */}
        <Route path="/registerForm" element={<RegisterLayout />} />
        <Route path="/grovia-login" element={<GrovaLoginLayout />} />
        <Route path="/user-register" element={<UserRegistrationForm />} />
        {/* 404 Route */}
        <Route path="*" element={<Navigate to="/welcome" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
