import React, { useState, useRef } from "react";
type EmployeeDetailsProps = {
  details: {
    employeeName: string;
    joiningDate: Date;
    gender: string;
    dateOfBirth: Date;
    email: string;
    phoneNumber: number;
    totalAbsentDays: number;
  };
};
type Employee = {
  table: {
    employeeName: string;
    designation: string;
    date: string;
    shiftTime: string;
    joiningDate: string;
    status: string;
  };
};

function EmployeeDetails(
  { details }: EmployeeDetailsProps,
  { table }: Employee
) {
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
        className="btn bg-primary-subtle text-dark"
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
                  <div className="form-group col">
                    <label className="text-secondary">Name :</label> <br />
                    <label htmlFor=""> {details.employeeName}</label>
                  </div>
                  <div className="form-group col">
                    <label className="text-secondary">Gender :</label> <br />
                    <label htmlFor="">{details.gender}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col mt-4">
                    <label className="text-secondary">Date of Birth :</label>{" "}
                    <br />
                    <label htmlFor="">
                      {details.dateOfBirth.toLocaleDateString()}
                    </label>
                  </div>
                  <div className="form-group col mt-4">
                    <label className="text-secondary">Date of Joining :</label>
                    <br></br>
                    <label htmlFor="">
                      {details.joiningDate.toLocaleDateString()}
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col mt-4">
                    <label className="text-secondary">Email :</label>
                    <br />
                    <label htmlFor="">{details.email}</label>
                  </div>
                  <div className="form-group col mt-4">
                    <label className="text-secondary">Phone Number :</label>{" "}
                    <br />
                    <label htmlFor="">{details.phoneNumber}</label>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col mt-4">
                    <label className="text-secondary">
                      Total Present Days:
                    </label>{" "}
                    <br />
                    <label htmlFor="">
                      {Math.floor(
                        (new Date().getTime() - details.joiningDate.getTime()) /
                          (1000 * 60 * 60 * 24)
                      )}
                    </label>
                  </div>
                  <div className="form-group col mt-4">
                    <label className="text-secondary">Total Absent Days:</label>{" "}
                    <br />
                    <label htmlFor="">{details.totalAbsentDays}</label>
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
export default EmployeeDetails;
