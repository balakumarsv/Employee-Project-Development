import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import StarRating from "./StarIcon";
type TaskProps = {
  projectName: string;
  dueDate: string;
  timeEstimate: string;
  assignees : string;
  priority : string;
  status:string;
};
type AddNewTask = {
  addTaskData: (newTask: TaskProps) => void;
};
function TaskAssigningForm ({ addTaskData }: AddNewTask) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [priority1, setPriority1] = useState<string>("Select Anyone");
  const [priority2, setPriority2] = useState<string>("Select Anyone");
  // const [date, setDate] = useState('');
  // const [date2, setDate2] = useState('');
  const handlePrioritySelect = (value: string) => {
    setPriority1(value);
    setNewTask({ ...newTask, priority: value });
  };

  const handlePrioritySelect2 = (value: string) => {
    setPriority2(value);
    setNewTask({ ...newTask, status: value });
  };
  const closeModal = () => {
    setShowModal(false);
  };

  const [newTask, setNewTask] = useState<TaskProps>({
    projectName: "",
    dueDate: "",
    timeEstimate:"",
    assignees: "",
    priority: priority1,
    status : priority2,
  });
  // const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newDate = e.target.value;
  //   setDate(newDate);
  //   setNewTask({ ...newTask, dueDate: new Date(newDate) })
  //   ;
  // };
  // const handleDateChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newDate = e.target.value;
  //   setDate2(newDate);
  //   setNewTask ({...newTask, timeEstimate: new Date(newDate) })
  //   ;
  // };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = () => {
    addTaskData(newTask);
    setShowModal(false);
  };
  return (
    <div>
      <button
        type="button"
        className="btn btn-light"
        onClick={() => setShowModal(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus-circle"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
      </button>

      {showModal && (
        <div
          className="modal fade show"
          tabIndex={-1}
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header justify-content-between bg-light">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Add Task Details
                </h5>
                <StarRating />
                <button
                  type="button"
                  className="close border border-0"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form id="create-client" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="form-group col">
                      <label className="text-secondary">Project Name:</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Ex: EMS_Project"
                        name="projectName"
                        id="projectName"
                        value={newTask.projectName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col">
                      <label className="text-secondary">Assigness:</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder=""
                        name="assignees"
                        id="assignees"
                        value={newTask.assignees}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col">
                      <label className="text-secondary">Due Date:</label>
                      <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="MM-DD-YYYY"
                        name="dueDate"
                        id="dueDate"
                        value={newTask.dueDate}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group col">
                      <label className="text-secondary">Priority:</label>
                      <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                          {priority1}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item onClick={() => handlePrioritySelect("Low Priority")}>Low Priority</Dropdown.Item>
                          <Dropdown.Item onClick={() => handlePrioritySelect("Medium Priority")}>Medium Priority</Dropdown.Item>
                          <Dropdown.Item onClick={() => handlePrioritySelect("High Priority")}>High Priority</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col">
                      <label className="text-secondary">Time Estimate:</label>
                      <input
                        type="date"
                        className="form-control form-control-sm"
                        name="timeEstimate"
                        id="timeEstimate"
                        value={newTask.timeEstimate}
                        onChange={handleChange}

                      />
                    </div>
                    <div className="form-group col">
                      <label className="text-secondary">Status:</label>
                      <div className="dropdown">
                        <Dropdown>
                          <Dropdown.Toggle variant="light" id="dropdown-basic">
                            {priority2}
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1"  onClick={() => handlePrioritySelect2("Developer Review")}>
                              Developer Review
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2" onClick={() => handlePrioritySelect2(" Testing Process")}>
                              Testing Process
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3" onClick={() => handlePrioritySelect2("Final Valuation")}>
                              Final Valuation
                            </Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button
                  form="create-client"
                  type="submit"
                  className="btn btn-primary"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
};

export default TaskAssigningForm;