import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./component/ErrorPage";
import  LoginPage  from "./component/LoginPage";
import  OrderPage  from "./component/OrderPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/order/:username" element={<OrderPage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
