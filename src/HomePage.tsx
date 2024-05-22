import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Content from "./Dashboard/Content";
import { RiDashboard2Line } from "react-icons/ri";
import { AiOutlineProject } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { MdTask } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import Client from "./Client/Client";
import Projects from "./Project/ProjectTable";
import TaskBar from "./TaskBar/MainTaskBar";
import LogOutPopupMessage from "./Login-Page/LogoutMessage";
import Loader from "./Loader";
import LeaveManagement from "./LeaveManagement/LeaveManagement";
import MainLeaveManagement from "./LeaveManagement/MainLeaveManagement";
function HomePage() {
  const [navOpen, setNavOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate(); 
  const toggle = () => {
    setNavOpen(!navOpen);
  };
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setTimeout(() => {
        setIsLoggedIn(false);
        navigate('/login');
      }, 1000); // Delay of 1 second before setting isLoggedIn to false
    } else {
      setTimeout(() => {
        setIsLoggedIn(true);
        navigate(-2);
      }, 1000); // Delay of 1 second before setting isLoggedIn to true
    }
  }, []);
  if (isLoggedIn === null) {
    return (
      <main style={{ width: '100%', display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <Loader />
    </main>
    );
  }
  return (
    <>
      <div className="main_div d-flex">
        {!navOpen && (
          <div>
            <div className="top_barbefore" style={{ flex: 2 }}>
              <button onClick={toggle} className="menu_bar">
                <IoMenu />
              </button>
            </div>
          </div>
        )}

        <div className={`sidenav ${navOpen ? "open" : ""}`}>
          {navOpen && (
            <>
              <div className="top_bar">
                <h1>EMS</h1>
                <button onClick={toggle} className="cross_bar">
                  <RxCross2 />
                </button>
              </div>
              <div className="sticky d-flex-col" style={{ flexGrow: 1 }}>
                <Link to="/customer"><span><RiDashboard2Line /></span>DashBoard</Link>
                <Link to="/project"> <span><AiOutlineProject/></span>Projects</Link>
                <Link to="/client"><span><IoIosPeople/></span>Client</Link>
                <Link to="/task_bar"><span><MdTask/></span>TaskBar</Link>
                <Link to="/leave_management"><span><FaCalendarAlt/></span>Leave Management</Link>
                <div style={{position:"relative", top:"230px"}}>
                <Link to="/logoutmessage"><span><CiLogout/></span>LogOut</Link>
              </div>
              </div>
            </>
          )}
        </div>
        <div className="content justify-content-center" style={{ flex: 0, top:"150px", justifyContent:"center" }}>
          <Routes>
            <Route path="/customer" element={<Content />} />
            <Route path="/task_bar" element={<TaskBar />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/client" element={<Client />} />
            <Route path="/leave_management" element={<MainLeaveManagement />} />
            <Route path="/logoutmessage" element={<LogOutPopupMessage />}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default HomePage;
