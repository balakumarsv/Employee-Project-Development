import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineExclamationCircle } from "react-icons/ai";

function LogOutPopupMessage() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  return (




    
    <div className="container" style={{ height:"250px", left:"250px", position:"relative", top:"125px" }}>
      <div className="row rounded-4 bg-white" style={{ width: "500px", height: "350px" }}>
        <div className="col-12 d-flex justify-content-center align-items-center " style={{ height: "50%", fontSize: "100px", color:"rgb(255, 176, 19)" }}>
          <AiOutlineExclamationCircle/>
        </div>
        <div className="col-12 text-center fs-1" style={{top:"-35px", position:"relative"}}>
          
          <h1 className="modal-title">Are you sure want to Logout</h1>
        </div>
        <div className="modal-footer justify-content-center gap-3" style={{bottom:"25px", position:"relative"}}>
          <button
            type="button"
            className=" btn btn-outline-secondary p-0 text-center"
            style={{ height: "35px", width: "55px" }}
            onClick={() => {
              navigate(-1);
              // setIsLoggedIn(true);
            }}
          >
            Close
          </button>
          <button
            type="button"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
            className="btn btn-outline-danger"
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogOutPopupMessage;
