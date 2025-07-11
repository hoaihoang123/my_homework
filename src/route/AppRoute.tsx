import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Magazines/layout/Layout";
import LayoutDashboard from "../Dashboard/Layout/Layout";
import Category from "../Magazines/page/Category";
import Overview from "../Dashboard/page/Overview";
import Setting from "../Dashboard/page/Setting";
import Doctor from "../Dashboard/page/Doctor";
import Departments from "../Dashboard/page/Departments";
import Map from "../Dashboard/page/Map";
import History from "../Dashboard/page/History";
import Parents from "../Dashboard/page/Parents";
import WelcomeScreen from "../Form/auth/WelcomeScreen";
import LoginScreen from "../Form/auth/LoginScreen";
import SignUpScreen from "../Form/auth/SignUpScreen";
import RegisterLayout from "../RegisterForm";
import GrovaLoginLayout from "../GrovaLogin";
import UserRegistrationForm from "../UserRegistrationForm";
import DemoNavigation from "../DemoNavigation";
import Login from "../TaskManagement/page/Login";
import Tasks from "../TaskManagement/page/Tasks";
import ProtectedRoute from "../TaskManagement/ProtectedRoute";
import DeniedTask from "../TaskManagement/page/DeniedTask";
import { AuthProvider } from "../TaskManagement/AuthContext";

const AppRoute = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/demo" replace />} /> */}
        <Route path="/demo" element={<DemoNavigation />} />

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
        {/* Routes for task management or other features can be added here */}

        {/* <Route path="/task-management"> */}

        <Route path="/" element={<Login />} />
        <Route
          path="/tasks"
          element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<DeniedTask />} />
      </Routes>
    </AuthProvider>
  );
};

export default AppRoute;
