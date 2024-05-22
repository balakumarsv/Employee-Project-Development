import TaskBar from "./TaskBar";
import TaskNavbar from "./TaskNavBar";

export default function MainTaskBar() {
    return (
        <>
        <div className="d-flex container bg-white rounded-5 mt-5" style={{width : "1000px", justifyContent : "center", height:"94vh"}}>
        <div style={{ width: "100%" }}>
          <TaskNavbar/>
          <TaskBar />
         
        </div>
      </div>
        </>
    );
}