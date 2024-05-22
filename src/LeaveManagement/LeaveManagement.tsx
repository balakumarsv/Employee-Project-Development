import React, { useState } from "react";
import "./CustomersTable.css";
import { Dropdown, Pagination, Table } from "react-bootstrap";
import EmployeeDetails from "./EmployeeDetails";
import { CiSearch } from "react-icons/ci";
import { Autocomplete, TextField } from "@mui/material";
import SearchInput from "../SearchBox";
type EmployeeDetail = {
  employeeName: string;
  designation: string;
  date: string;
  shiftTime: string;
  joiningDate: Date;
  status: string;
  gender: string;
  dateOfBirth: Date;
  email: string;
  phoneNumber: number;
  totalAbsentDays: number;
};

const tableHeader = [
  "employeeName",
  "designation",
  "date",
  "shiftTime",
  "joiningDate",
  "status",
] as const;

function LeaveManagement() {
  const currentDate = new Date().toLocaleDateString();
  const [priority, setPriority] = useState<string>("Sort by : Newest");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const handlePrioritySelect = (value: string) => {
    setPriority(value);
  };

  const [viewDetails, setViewDetails] = useState<EmployeeDetail[]>([
    {
      employeeName: "Abinash",
      email: "abinash49920@gmail.com",
      phoneNumber: 7894563201,
      totalAbsentDays: 10,
      gender: "male",
      dateOfBirth: new Date("2002-04-29"),
      designation: "Software Engineer",
      date: currentDate,
      shiftTime: "General",
      joiningDate: new Date("2021-08-25"),
      status: "present",
    },
    {
      employeeName: "Bala Kumar",
      email: "balakumr@gmail.com",
      phoneNumber: 7894563201,
      totalAbsentDays: 22,
      gender: "male",
      dateOfBirth: new Date("2002-07-22"),
      designation: "Software Engineer",
      date: currentDate,
      shiftTime: "General",
      joiningDate: new Date("2023-02-01"),
      status: "absent",
    },
    {
      employeeName: "Muthu",
      designation: "Full Stack Developer",
      date: currentDate,
      shiftTime: "General",
      joiningDate: new Date("2022-05-22"),
      status: "present",
      dateOfBirth: new Date("1998-09-14"),
      totalAbsentDays: 11,
      gender: "male",
      email: "muthukumar@gmail.com",
      phoneNumber: 7894563201,
    },
    {
      employeeName: "Nithish",
      designation: "Business Analyst",
      date: currentDate,
      shiftTime: "General",
      joiningDate: new Date("2023-09-06"),
      status: "absent",
      dateOfBirth: new Date("2005-05-19"),
      totalAbsentDays: 32,
      gender: "male",
      email: "nithishmeow@gmail.com",
      phoneNumber: 7894563201,
    },
    {
      employeeName: "Joe",
      designation: "Backend Developer",
      date: currentDate,
      shiftTime: "General",
      joiningDate: new Date("2021-12-12"),
      status: "present",
      dateOfBirth: new Date("1999-10-29"),
      totalAbsentDays: 12,
      gender: "male",
      email: "joesph@gmail.com",
      phoneNumber: 7894563201,
    },
    {
      employeeName: "Aasai",
      designation: "Tester",
      date: currentDate,
      shiftTime: "General",
      joiningDate: new Date("2021-12-12"),
      status: "present",
      dateOfBirth: new Date("1999-10-12"),
      totalAbsentDays: 32,
      gender: "male",
      email: "aasai69@gmail.com",
      phoneNumber: 7894563201,
    },
    {
      employeeName: "Vignesh",
      designation: "Devops",
      date: currentDate,
      shiftTime: "General",
      joiningDate: new Date("2021-12-12"),
      status: "present",
      dateOfBirth: new Date("1999-10-29"),
      totalAbsentDays: 26,
      gender: "male",
      email: "vigma23@gmail.com",
      phoneNumber: 7894563201,
    }, {
      employeeName: "John Doe",
      designation: "Manager",
      date: currentDate,
      shiftTime: "General",
      joiningDate: new Date("2020-01-15"),
      status: "present",
      dateOfBirth: new Date("1985-07-10"),
      totalAbsentDays: 5,
      gender: "male",
      email: "johndoe@example.com",
      phoneNumber: 1234567890,
    },
    {
      employeeName: "Jane Smith",
      designation: "Developer",
      date: currentDate,
      shiftTime: "General",
      joiningDate: new Date("2019-03-20"),
      status: "present",
      dateOfBirth: new Date("1990-11-25"),
      totalAbsentDays: 8,
      gender: "female",
      email: "janesmith@example.com",
      phoneNumber: 2345678901,
    },
    {
      employeeName: "Alice Johnson",
      designation: "Tester",
      date: currentDate,
      shiftTime: "General",
      joiningDate: new Date("2020-08-05"),
      status: "present",
      dateOfBirth: new Date("1988-04-15"),
      totalAbsentDays: 3,
      gender: "female",
      email: "alicejohnson@example.com",
      phoneNumber: 3456789012,
    },
    {
      employeeName: "Bob Brown",
      designation: "Analyst",
      date: currentDate,
      shiftTime: "General",
      joiningDate: new Date("2021-02-10"),
      status: "present",
      dateOfBirth: new Date("1983-09-30"),
      totalAbsentDays: 12,
      gender: "male",
      email: "bobbrown@example.com",
      phoneNumber: 4567890123,
    },
    {
      employeeName: "Eva Martinez",
      designation: "Designer",
      date: currentDate,
      shiftTime: "General",
      joiningDate: new Date("2018-11-18"),
      status: "present",
      dateOfBirth: new Date("1995-06-20"),
      totalAbsentDays: 7,
      gender: "female",
      email: "evamartinez@example.com",
      phoneNumber: 5678901234,
    },
    {
      employeeName: "Alex Rodriguez",
      designation: "Manager",
      date: currentDate,
      shiftTime: "General",
      joiningDate: new Date("2017-07-30"),
      status: "present",
      dateOfBirth: new Date("1978-03-05"),
      totalAbsentDays: 15,
      gender: "male",
      email: "alexrodriguez@example.com",
      phoneNumber: 6789012345,
    },
    {
      employeeName: "Maria Garcia",
      designation: "Developer",
      date: currentDate,
      shiftTime: "General",
      joiningDate: new Date("2016-04-22"),
      status: "present",
      dateOfBirth: new Date("1986-12-12"),
      totalAbsentDays: 9,
      gender: "female",
      email: "mariagarcia@example.com",
      phoneNumber: 7890123456,
    },
    {
      employeeName: "David Lee",
      designation: "Tester",
      date: currentDate,
      shiftTime: "General",
      joiningDate: new Date("2015-09-14"),
      status: "present",
      dateOfBirth: new Date("1992-05-18"),
      totalAbsentDays: 4,
      gender: "male",
      email: "davidlee@example.com",
      phoneNumber: 8901234567,
    },
    {
      employeeName: "Sarah White",
      designation: "Analyst",
      date: currentDate,
      shiftTime: "General",
      joiningDate: new Date("2014-06-27"),
      status: "present",
      dateOfBirth: new Date("1981-01-08"),
      totalAbsentDays: 6,
      gender: "female",
      email: "sarahwhite@example.com",
      phoneNumber: 9012345678,
    },
    {
      employeeName: "Michael Clark",
      designation: "Designer",
      date: currentDate,
      shiftTime: "General",
      joiningDate: new Date("2013-03-09"),
      status: "present",
      dateOfBirth: new Date("1997-08-23"),
      totalAbsentDays: 11,
      gender: "male",
      email: "michaelclark@example.com",
      phoneNumber: 1234567890,
    },
    {
      employeeName: "Linda Young",
      designation: "Manager",
      date: currentDate,
      shiftTime: "General",
      joiningDate: new Date("2012-08-02"),
      status: "present",
      dateOfBirth: new Date("1980-02-28"),
      totalAbsentDays: 2,
      gender: "female",
      email: "lindayoung@example.com",
      phoneNumber: 2345678901,
    },
    {
      employeeName: "James Thomas",
      designation: "Developer",
      date: currentDate,
      shiftTime: "General",
      joiningDate: new Date("2011-05-16"),
      status: "present",
      dateOfBirth: new Date("1994-09-10"),
      totalAbsentDays: 7,
      gender: "male",
      email: "jamesthomas@example.com",
      phoneNumber: 3456789012,
    },
    {
      employeeName: "Karen Hill",
      designation: "Tester",
      date: currentDate,
      shiftTime: "General",
      joiningDate: new Date("2010-02-28"),
      status: "present",
      dateOfBirth: new Date("1984-07-15"),
      totalAbsentDays: 3,
      gender: "female",
      email: "karenhill@example.com",
      phoneNumber: 4567890123,
    },
    {
      employeeName: "Ryan Martinez",
      designation: "Analyst",
      date: currentDate,
      shiftTime: "General",
      joiningDate: new Date("2009-09-10"),
      status: "present",
      dateOfBirth: new Date("1977-04-01"),
      totalAbsentDays: 10,
      gender: "male",
      email: "ryanmartinez@example.com",
      phoneNumber: 5678901234,
    },
    {
      employeeName: "Julia Walker",
      designation: "Designer",
      date: currentDate,
      shiftTime: "General",
      joiningDate: new Date("2008-06-23"),
      status: "present",
      dateOfBirth: new Date("1993-11-05"),
      totalAbsentDays: 5,
      gender: "female",
      email: "juliawalker@example.com",
      phoneNumber: 6789012345,
    },
  ]);
  const filteredDetails = viewDetails.filter((detail) =>
    detail.employeeName.toLowerCase().includes(searchTerm.toLowerCase())||
    detail.designation.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // const [searchResults, setSearchResults] = useState<EmployeeDetail[]>([]);
 
  
  const [currentPage, setCurrentPage] = useState<number>(1);
  const ITEMS_PER_PAGE = 7;

  // Calculate the total number of pages after applying search
  const totalPages = Math.ceil(filteredDetails.length / ITEMS_PER_PAGE);

  // Slice the data based on pagination
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredDetails.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(totalPages, page))); // Ensure page is within valid range
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    setCurrentPage(1); // Reset pagination to first page when search term changes
  };

  return (
    <div className="container bg-white rounded-5 mt-5">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <p className="mt-3 fw-bold fs-4 mb-1">Leave Management</p>
          <p className="active-members mt-0">Active Members</p>
        </div>
        <div className="bd-search" id="docsearch" data-bd-docs-version="5.3">
          <div className="d-flex align-items-center">
            
                <div className="row">
                  <SearchInput onSearch={handleSearch} />
                  {/* <Autocomplete
                  className="col-12"
                  style={{width:"222px"}}
                    freeSolo
                    disableClearable
                    options={viewDetails.map((option) => option.employeeName)}
                    value={searchTerm}
                    onChange={(event, newValue) => setSearchTerm(newValue)}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Search input"
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                        }}
                      />
                    )}
                  /> */}


                  {/* <span className="fs-5 text-dark fw-bold">
                    <CiSearch />
                  </span> */}
               
              </div>
            
            <div className="ms-5 ps-5">
              <div className="dropdown">
                <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    {priority}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      href="#/action-1"
                      onClick={() => handlePrioritySelect("Oldest")}
                    >
                      Oldest
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      onClick={() => handlePrioritySelect(" Testing Process")}
                    >
                      Testing Process
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-3"
                      onClick={() => handlePrioritySelect("Final Valuation")}
                    >
                      Final Valuation
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            {/* <div className="ms-3">
              <button
                className="dropDown-shortby sort-dropdown btn btn-light dropdown-toggle rounded"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="text-secondary">sort by :</span>
                <span className="fw-bold"> Newest</span>
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div style={{height:"500.200px"}}>
        <Table hover>
          <thead className="text-center">
            <tr>
              <th id="heading-colors">Employee Name</th>
              <th id="heading-colors">Designation</th>
              <th id="heading-colors">Date</th>
              <th id="heading-colors">Shift Time</th>
              <th id="heading-colors">Joining Date</th>
              <th id="heading-colors">Status</th>
              <th id="heading-colors">Details</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {currentItems.map((row, idx) => (
              <tr key={idx}>
                {tableHeader.map((key) =>
                  key !== "status" ? (
                    <td className="text-black" key={key}>
                      {key === "joiningDate"
                        ? row[key].toLocaleDateString() 
                        : row[key]}
                    </td>
                  ) : (
                    <td key={key}>
                      <button
                        className={
                          "rounded " +
                          (row[key] === "present"
                            ? "active-button btn btn-outline-success"
                            : "inactive-button btn btn-outline-danger")
                        }
                      >
                        {row[key][0].toUpperCase() + row[key].slice(1)}
                      </button>
                    </td>
                  )
                )}

                <td key={`details-${idx}`}>
                  <EmployeeDetails details={row} />
                </td>
              </tr>
            ))}
          </tbody>

        </Table>
        <div className="m-2" style={{position:"fixed", bottom:"0px", right:"120px"}}>
        <Pagination className="justify-content-end" style={{ margin: '20px 0px'}}>
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        />
      </Pagination>
      </div>
      </div>
    </div>
  );
}

export default LeaveManagement;
