import React, { useState, useRef } from "react";

import { clientDetails, ClientDetail } from '../AllDatas';
type ClientDetailsProps = {
    clientDetails: ClientDetail[];
  };

  function ClientViewDetails({ client }: { client: ClientDetail }) {
  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModal = () => {
    setShowModal(false);
  };

  //   const handleSubmit = () => {
  //     // Retrieve input values from refs
  //     const formData: { [key: string]: string } = {
  //       "Client ID": clientIdRef.current!.value,
  //       "Gender": genderRef.current!.value,
  //       "Date of Birth": dobRef.current!.value,
  //       "Date of Joining": dojRef.current!.value,
  //       "Email": emailRef.current!.value,
  //       "Phone Number": phoneNumberRef.current!.value
  //     };

  //     // Log the form data to the console
  //     console.log(formData);

  //     // Close the modal
  //     closeModal();
  //   };

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-danger rounded-1 p-0 fw-semibold px-2" style={{fontSize:"14px", height:"22px", width : "75px",textAlign:"center"}}
        onClick={() => setShowModal(true)}
      >
        View
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
                  Employee Information
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
      <div className="form-group col-12 text-center">
        <img src={client.photo} alt="client image"  style={{height:"250px", width:"250px", borderRadius:"250px"}}/>
      </div>
      <hr className="mt-4 text-center ms-4 border border-black" style={{width:"90%"}}/>
     
    </div>
    
    <div className="row mt-3">
    <div className="form-group col-6">
        <label className="text-secondary">Client Name:</label>
        <label htmlFor="" className="ms-2">{client.clientName}</label>
      </div>
      <div className="form-group col-6">
        <label className="text-secondary">Company:</label>
        <label htmlFor="" className="ms-2">{client.compnay}</label>
      </div>
      
    </div>
    <div className="row mt-3">
    <div className="form-group col-6">
        <label className="text-secondary">Location:</label>
        <label htmlFor="" className="ms-2">{client.location}</label>
      </div>
      <div className="form-group col-6">
        <label className="text-secondary">Date:</label> 
        <label htmlFor="" className="ms-2">{client.date.toLocaleDateString()}</label>
      </div>
     
    </div>
    <div className="row mt-3">
    
      <div className="form-group col-6">
        <label className="text-secondary">Email:</label>
        <label htmlFor="">{client.email}</label>
      </div>
      <div className="form-group col-6">
        <label className="text-secondary">Phone Number:</label> 
        <label htmlFor="">{client.phoneNumber}</label>
      </div>
     
    </div>
    <div className="row mt-3 justify-content-center">
      <div className="form-group border border-secondary text-center rounded-1  justify-content-center fw-semibold col-12"style={{height:"32px", width:"90%", backgroundColor:"#f6f6fe"}}>
        <label className="text-secondary">Project:</label>
        <label htmlFor="" className="ms-2">{client.project}</label>
      </div>
      </div>
  </div>

            </div>
          </div>
        </div>
      )}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}
export default ClientViewDetails;
