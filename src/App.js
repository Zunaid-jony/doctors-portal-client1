import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home/Home";

import Appointment from "./Home/Appointment/Appointment/Appointment";
import Login from "./Home/Login/Login";
import Register from "./Home/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Navigation from "./Shared/Navigation/Navigation";
import PrivetRoute from "./Home/Login/PrivetRoute/PrivetRoute";
import Dashboard from './Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Dashboard/MakeAdmin/MakeAdmin';
import DashboardHome from './Dashboard/DashboardHome/DashboardHome';
import AddDoctor from "./Dashboard/AddDoctor/AddDoctor";
import AdminRoute from './Home/Login/AdminRoute/AdminRoute';
import Payment from "./Dashboard/Payment/Payment";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route
              path="/appointment"
              element={
                <PrivetRoute>
                  <Appointment></Appointment>
                </PrivetRoute>
              }
            ></Route>
              <Route
                path="/dashboard"
                element={
                  <PrivetRoute>
                    <Dashboard />
                  </PrivetRoute>
                }
                >
                      <Route index element={<DashboardHome></DashboardHome>} />
                      <Route path="makeadmin" element={ <AdminRoute> <MakeAdmin /></AdminRoute> }  />
                      <Route path="addDoctor" element={ <AdminRoute> <AddDoctor></AddDoctor></AdminRoute>}  />
                      <Route path="drafts" element={<h1>this is drafts</h1>}  />
                      {/* payment/:appointmentId ata akto spesell */}
                       <Route path="payment/:appointmentId" element={<Payment></Payment>}  />

              </Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
