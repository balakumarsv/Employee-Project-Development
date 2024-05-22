import { useState } from "react";
// import "./App.css";
import Header from "./Header";
import CustomersTable from "./CustomersTable";
import Analytics from "./Analytics";

function Content() {
  return (
    <>
      <div className="d-flex" style={{width : "1000px", justifyContent : "center"}}>
        <div style={{ width: "100%" }}>
          <Header />
          <Analytics />
          <CustomersTable />
        </div>
      </div>
    </>
  );
}

export default Content;
