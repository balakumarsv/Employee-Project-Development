import { useState } from "react";
import "./App.css";
import ProjectTable from "./ProjectTable";
// import CustomersTable from "./Custom

function Projects() {
  return (
    <>
      <div className="d-flex" style={{width : "1000px", justifyContent : "center"}}>
        <div style={{ width: "100%" }}>
          < ProjectTable/>
        </div>
      </div>
    </>
  );
}

export default Projects;
