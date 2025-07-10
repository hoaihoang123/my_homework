import { BrowserRouter } from "react-router-dom";
import "./App.css";

import AppRoute from "./route/AppRoute";
import { Authcontext } from "./TaskManagement/context";
// import BigCMarket from "./page/BigCMarket";

function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
