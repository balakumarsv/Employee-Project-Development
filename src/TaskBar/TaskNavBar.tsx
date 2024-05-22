// import { color } from "framer-motion";
import Nav from "react-bootstrap/Nav";
import { FaLayerGroup } from "react-icons/fa";
import { TbSubtask } from "react-icons/tb";
import { TbColumns3 } from "react-icons/tb";
import { IoFilterSharp } from "react-icons/io5";
import { RiUserLine } from "react-icons/ri";
import { LuUsers2 } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import "./TaskNavBar.css";
import SearchInput from "../SearchBox";

function TaskNavbar() {
  // c
  return (
    <div
      className="bg-white d-block row mb-4 mt-4 "
      style={{ fontWeight: "700", width:"1000px" }}
    >
      <Nav variant="tabs" defaultActiveKey="link-1" className=" justify-content-center" style={{fontSize:"13px", width:"100%"}}>
        <Nav.Item className="nav-items rounded-1 p-0">
          <Nav.Link eventKey="">
            <span className="pe-1">
              <FaLayerGroup />
            </span>
            Group: Status
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="hover:bg-sky-200 rounded-2">
          <Nav.Link eventKey="link-1">
            <span className="pe-1">
              <TbSubtask />
            </span>
            Subtasks: Collapse all
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="hover:bg-sky-200 rounded-2">
          <Nav.Link eventKey="disabled">
            <span className="pe-1">
              <TbColumns3 />
            </span>
            Columns
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="hover:bg-sky-200 rounded-2">
          <Nav.Link eventKey="2">
            <span className="pe-1">
              <IoFilterSharp />
            </span>
            Filters
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="hover:bg-sky-200 rounded-2">
          <Nav.Link eventKey="5">
            <span className="pe-1">
              <RiUserLine />
            </span>
            Me Mode
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="hover:bg-sky-200 rounded-2">
          <Nav.Link eventKey="6">
            <span className="pe-1">
              <LuUsers2 />
            </span>
            Assignees
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="hover:bg-sky-200 rounded-2">
          <Nav.Link eventKey="7">
            <span className="pe-1">
              <FaRegCheckCircle />
            </span>
            show Closed
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="hover:bg-sky-200 rounded-2">
          <Nav.Link eventKey="8">Hide</Nav.Link>
        </Nav.Item >
            {/* <input
              type="search"
              placeholder="search tasks.."
              className="ms- rounded-2 border border-light-subtle bg- ms-1"
              style={{width:"10%"}}
            /> */}
            
      </Nav>
    </div>
  );
}

export default TaskNavbar;
