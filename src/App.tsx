import { BrowserRouter, Routes, Route } from "react-router-dom";
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
// import BigCMarket from "./page/BigCMarket";

function App() {
  return (
    // <div>
    //   {/* <WeatherApp /> */}
    //   {/* <BigCMarket /> */}
    //   {/* <UseEffectExample /> */}
    //   {/* <Customer /> */}
    //   {/* <Update productId={1} /> */}
    // </div>
    <BrowserRouter>
      {/* Add your routes or components here */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Category />} />
          <Route path="category" element={<Category />} />
        </Route>
        <Route path="/dashboard" element={<LayoutDashboard />}>
          <Route index element={<h1>Dashboard Overview</h1>} />
          <Route path="overview" element={<Overview />} />
          {/* Add more dashboard routes as needed */}
          <Route path="settings" element={<Setting />} />
          <Route path="doctors" element={<Doctor />} />
          <Route path="departments" element={<Departments />} />
          <Route path="history" element={<History />} />
          <Route path="map" element={<Map />} />
        </Route>
        {/* <Router path="/weather" element={<WeatherApp />} /> */}
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
