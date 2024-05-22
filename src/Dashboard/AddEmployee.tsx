import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
type CustomerProps = {
  customerName: string;
  dateOfBirth: Date;
  email: string;
  gender: String;
  dateOfJoining: Date;
  phoneNumber: number;
  country : string;
  status : string;
  company:string;
};
type AddEmployeeDetail = {
  addEmployeeData: (newCustomer: CustomerProps) => void;
};
function AddEmployee ({addEmployeeData} : AddEmployeeDetail) {
  const [showModal, setShowModal] = useState(false);
  const [priority, setPriority] = useState<string>('Select Gender');
  const [priority2, setPriority2] = useState<string>('Select Status');
  const [date, setDate] = useState('');
  const [date2, setDate2] = useState('');
  const handlePrioritySelect = (value: string) => {
    setPriority(value);
    setNewCustomer({ ...newCustomer, gender: value });
  };

  const handlePrioritySelect2 = (value: string) => {
    setPriority2(value);
    setNewCustomer({ ...newCustomer, status: value });
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const [newCustomer, setNewCustomer] = useState<CustomerProps>({
    customerName: "",
    country: "",
    gender: priority,
    company: "",
    dateOfJoining: new Date(),
    dateOfBirth:new Date(),
    status: priority2,
    phoneNumber: 0,
    email: "",
  });
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setDate(newDate);
    setNewCustomer({ ...newCustomer, dateOfBirth: new Date(newDate) })
    ;
  };
  const handleDateChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setDate2(newDate);
    setNewCustomer ({...newCustomer, dateOfJoining: new Date(newDate) })
    ;
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleSubmit = () => {
    addEmployeeData(newCustomer);
    setShowModal(false);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => setShowModal(true)}
      >
        Add Employee
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
                  Add Employee Details
                </h5>
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
                {/* Insert modal body content here */}
                <div className="row">

                  <div className="form-group col">
                    <label className="text-secondary">Customer Name:</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Ex: 12-abi"
                      id="customerName"
                      name="customerName"
                      value={newCustomer.customerName}
                      onChange={handleChange}
                    />
                  </div>


                  <div className="form-group col">
                    <label className="text-secondary">Gender:</label>
                    <>
                      <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic" className="">
                          {priority}
                        </Dropdown.Toggle >
                        <Dropdown.Menu >
                          <Dropdown.Item onClick={() => handlePrioritySelect('Male')}>Male</Dropdown.Item>
                          <Dropdown.Item onClick={() => handlePrioritySelect('Female')}>Female</Dropdown.Item>
                          {/* <Dropdown.Item onClick={() => handlePrioritySelect('Final Valuation')}>Final Valuation</Dropdown.Item> */}
                        </Dropdown.Menu>
                      </Dropdown>
                      
                    </>

                  </div>
                </div>
                <div className="row">

                  <div className="form-group col">
                    <label className="text-secondary">Date of Birth:</label>
                    <input
                      type="date"
                      className="form-control form-control-sm"
                      placeholder="MM-DD-YYYY"
                      id="dateOfBirth"
                      name="dateOfBirth"
                      value={date}
                      onChange={handleDateChange}
                    />
                  </div>
                  <div className="form-group col">
                    <label className="text-secondary">Date of Joining:</label>
                    <input
                      type="date"
                      className="form-control form-control-sm"
                      placeholder="MM-DD-YYYY"
                      id="dateOfJoining"
                      name="dateOfJoining"
                      value={date2}
                      onChange={handleDateChange2}
                    />
                  </div>
                </div>
                <div className="row">

                  <div className="form-group col">
                    <label className="text-secondary">Email:</label>
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      placeholder="example@123.com"
                      id="email"
                      name="email"
                      value={newCustomer.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col">
                    <label className="text-secondary">Phone Number:</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      maxLength={10}
                      placeholder="000-000-0000"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={newCustomer.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row">

                  <div className="form-group col">
                    <label className="text-secondary">Country:</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="India"
                      id="country"
                      name="country"
                      value={newCustomer.country}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col">
                    <label className="text-secondary">Status</label>
                    {/* <input
    type="text"
    className="form-control form-control-sm"
  > */}
                    <Dropdown>
                      <Dropdown.Toggle variant="light" id="dropdown-basic" className="">
                        {priority2}
                      </Dropdown.Toggle >
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handlePrioritySelect2('active')}>Active</Dropdown.Item>
                        <Dropdown.Item onClick={() => handlePrioritySelect2('inactive')}>Inactive</Dropdown.Item>
                        {/* <Dropdown.Item onClick={() => handlePrioritySelect('Final Valuation')}>Final Valuation</Dropdown.Item> */}
                      </Dropdown.Menu>
                    </Dropdown>
                    {/* </input> */}
                  </div>
                </div>
                <div className="row">

                  <div className="form-group col-6">
                    <label className="text-secondary">Compnay</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Company Name."
                      id="company"
                      name="company"
                      value={newCustomer.company}
                      onChange={handleChange}
                    />
                  </div>
                  </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>
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
}

export default AddEmployee;