import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function LogOut 
() {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(true);
  };
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  return (
    <div>
      <button
        
        onClick={() => setShowModal(true)}
      >
        LogOut
      </button>

      {showModal && (
        <div
          className="modal fade show"
          tabIndex={-1}
          role="dialog"
          style={{ display: "block" }}
        >
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
              navigate(-1),
              {closeModal}
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
              {/* <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Submit
                </button> */}
              </div>
            // </div>
        //   </div>
        // </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
    // <div className="container" style={{ height:"250px", left:"250px", position:"relative", top:"125px" }}>
    //   <div className="row rounded-4 bg-white" style={{ width: "500px", height: "350px" }}>
    //     <div className="col-12 d-flex justify-content-center align-items-center " style={{ height: "50%", fontSize: "100px", color:"rgb(255, 176, 19)" }}>
    //       <AiOutlineExclamationCircle/>
    //     </div>
    //     <div className="col-12 text-center fs-1" style={{top:"-35px", position:"relative"}}>
          
    //       <h1 className="modal-title">Are you sure want to Logout</h1>
    //     </div>
    //     <div className="modal-footer justify-content-center gap-3" style={{bottom:"25px", position:"relative"}}>
    //       <button
    //         type="button"
    //         className=" btn btn-outline-secondary p-0 text-center"
    //         style={{ height: "35px", width: "55px" }}
    //         onClick={() => {
    //           navigate(-1);
    //           // setIsLoggedIn(true);
    //         }}
    //       >
    //         Close
    //       </button>
    //       <button
    //         type="button"
    //         onClick={() => {
    //           localStorage.removeItem("token");
    //           navigate("/login");
    //         }}
    //         className="btn btn-outline-danger"
    //       >
    //         Yes
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}

export default LogOut   
;