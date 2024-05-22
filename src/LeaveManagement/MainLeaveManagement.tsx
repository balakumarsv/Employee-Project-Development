import { useState } from "react";
import LeaveManagement from "./LeaveManagement";
// import "./App.css";

function MainLeaveManagement() {
  return (
    <>
      <div className="d-flex" style={{width : "1000px", justifyContent : "center"}}>
        <div style={{ width: "100%" }}>
          
          <LeaveManagement />
        </div>
      </div>
    </>
  );
}

export default MainLeaveManagement;
