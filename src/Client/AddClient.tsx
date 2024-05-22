import React, { useState } from "react";
import { ClientDetail } from "../AllDatas";
import axios from 'axios';
type AddClientProps = {
  addClientDetail: (newClient: ClientDetail) => void;
};
function AddClient ({addClientDetail} : AddClientProps){
  const [date, setDate] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newClient, setNewClient] = useState<ClientDetail>({
    photo: "",
    location: "",
    clientName: "",
    compnay: "",
    date: new Date(),
    project: "",
    phoneNumber: 0,
    gender: "",
    email: "",
  });

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value;
    setDate(newDate);
    setNewClient({ ...newClient, date: new Date(newDate) });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewClient({ ...newClient, [name]: value });
  };

  const handleSubmit = () => {
    addClientDetail(newClient);
    setShowModal(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-success"
        onClick={() => setShowModal(true)}
      >
        Add Client
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
                  Add Client Details
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
                <div className="row">
                  <div className="form-group col">
                    <label className="text-secondary">Client Name:</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Client Name"
                      id="clientName"
                      name="clientName"
                      value={newClient.clientName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group col">
                    <label className="text-secondary">Gender:</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="M/F"
                      id="gender"
                      name="gender"
                      value={newClient.gender}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col">
                    <label className="text-secondary">Project Name:</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Project Name"
                      id="project"
                      name="project"
                      value={newClient.project}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col">
                    <label className="text-secondary">Date of Starting:</label>
                    <input
                      type="date"
                      className="form-control form-control-sm"
                      id="dateInput"
                      value={date}
                      onChange={handleDateChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col">
                    <label className="text-secondary">Location:</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Location"
                      id="location"
                      name="location"
                      value={newClient.location}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group col">
                    <label htmlFor="photo" className="text-secondary">Photo Url:</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Enter Image Url.."
                      id="photo"
                      name="photo"
                      value={newClient.photo}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col">
                    <label htmlFor="clientName" className="text-secondary">Email:</label>
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      placeholder="example@123.com"
                      id="email"
                      name="email"
                      value={newClient.email}
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
                      value={newClient.phoneNumber.toString()}
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
};

export default AddClient;
