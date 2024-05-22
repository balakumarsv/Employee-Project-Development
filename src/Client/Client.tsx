import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Analytics from "./Analytics";
import ClientTable from "./ClientTable";
import ClientData from "./ClientData";
// import CustomersTable from "./Custom

function Client() {
  return (
    <>
      <div className="d-flex" style={{width : "1000px", justifyContent : "center"}}>
        <div style={{ width: "100%" }}>
        
          < ClientTable/>
        </div>
      </div>
    </>
  );
}

export default Client;
