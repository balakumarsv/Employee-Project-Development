import React, { useState } from "react";
import "./CustomersTable.css";
import { Dropdown, Pagination, Table } from "react-bootstrap";
import AddEmployee from "./AddEmployee";
import SearchInput from "../SearchBox";
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
function CustomersTable() {
  const tableHeader = [
    "customerName",
    // "Gender",
    "company",
    "phoneNumber",
    "email",
    "country",
    "status",
  ] as const;
  const [tableData, settableData] = useState<CustomerProps[]>([
    {
      customerName: "Abinash",
      company: "Amazon",
      phoneNumber: 9363149493,
      email: "abinash499@gamil.com",
      country: "India",
      status: "active",
      gender:"male",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002)
    },
    {
      customerName: "Bala",
      company: "TCS",
      phoneNumber: 9080021210,
      email: "bala8907@gamil.com",
      country: "America",
      status: "inactive",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002),
      gender:"Male"
    },
    {
      customerName: "Muthu",
      company: "WIPRO",
      phoneNumber: 7498922309,
      email: "muthu3443@gamil.com",
      country: "UAE",
      status: "active",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002),
      gender:"Male"
    },
    {
      customerName: "Joe",
      company: "HCL",
      phoneNumber: 7979273323,
      email: "joe7856@gamil.com",
      country: "UK",
      status: "active",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002),
      gender:"Female"
    },
    {
      customerName: "Nithish",
      company: "SWOMB",
      phoneNumber: 9712807127,
      email: "nithish293@gamil.com",
      country: "IRAN",
      status: "inactive",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002),
      gender:"male"
    },
    {
      customerName: "Nithish",
      company: "SWOMB",
      phoneNumber: 9712807127,
      email: "nithish293@gamil.com",
      country: "IRAN",
      status: "inactive",
      gender:"male",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002)
    },
    {
      customerName: "John Doe",
      company: "TechCorp",
      phoneNumber: 1234567890,
      email: "john.doe@techcorp.com",
      country: "USA",
      status: "active",
      gender:"male",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002)
    },
    {
      customerName: "Jane Smith",
      company: "InnovateX",
      phoneNumber: 2345678901,
      email: "jane.smith@innovatex.com",
      country: "UK",
      status: "active",
      gender:"male",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002)
    },
    {
      customerName: "Carlos Ruiz",
      company: "Futuro",
      phoneNumber: 3456789012,
      email: "carlos.ruiz@futuro.com",
      country: "Spain",
      status: "inactive",
      gender:"male",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002)
    },
    {
      customerName: "Akira Tanaka",
      company: "NipponTech",
      phoneNumber: 4567890123,
      email: "akira.tanaka@nippontech.jp",
      country: "Japan",
      status: "active",
      gender:"male",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002)
    },
    {
      customerName: "Hans Müller",
      company: "AutoBahn",
      phoneNumber: 5678901234,
      email: "hans.muller@autobahn.de",
      country: "Germany",
      status: "inactive",
      gender:"male",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002)
    },
    {
      customerName: "Emma Johansson",
      company: "Nordic Solutions",
      phoneNumber: 6789012345,
      email: "emma.johansson@nordicsolutions.se",
      country: "Sweden",
      status: "active",
      gender:"male",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002)
    },
    {
      customerName: "Liam O'Connor",
      company: "Celtic Enterprises",
      phoneNumber: 7890123456,
      email: "liam.oconnor@celticenterprises.ie",
      country: "Ireland",
      status: "inactive",
      gender:"male",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002)
    },
    {
      customerName: "Chen Wei",
      company: "GreatWall Ltd.",
      phoneNumber: 8901234567,
      email: "chen.wei@greatwall.cn",
      country: "China",
      status: "active",
      gender:"male",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002)
    },
    {
      customerName: "Isabella Rossi",
      company: "Viva Italia",
      phoneNumber: 9012345678,
      email: "isabella.rossi@vivaitalia.it",
      country: "Italy",
      status: "inactive",
      gender:"male",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002)
    },
    {
      customerName: "Mohammed Ali",
      company: "Desert Ventures",
      phoneNumber: 1123456789,
      email: "mohammed.ali@desertventures.ae",
      country: "UAE",
      status: "active",
      gender:"male",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002)
    },
    {
      customerName: "Pierre Dubois",
      company: "Champs Elysees",
      phoneNumber: 2234567890,
      email: "pierre.dubois@champselysees.fr",
      country: "France",
      status: "inactive",
      gender:"male",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002)
    },
    {
      customerName: "Olga Ivanova",
      company: "Siberian Exports",
      phoneNumber: 3345678901,
      email: "olga.ivanova@siberianexports.ru",
      country: "Russia",
      status: "active",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002),
      gender:"male"
    },
    {
      customerName: "Raj Patel",
      company: "Bollywood Films",
      phoneNumber: 4456789012,
      email: "raj.patel@bollywoodfilms.in",
      country: "India",
      status: "inactive",
      gender:"male",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002)
    },
    {
      customerName: "Lucas Silva",
      company: "SambaTech",
      phoneNumber: 5567890123,
      email: "lucas.silva@sambatech.br",
      country: "Brazil",
      status: "active",
      gender:"male",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002)
    },
    {
      customerName: "Mia Gonzalez",
      company: "Andes Corp",
      phoneNumber: 6678901234,
      email: "mia.gonzalez@andescorp.cl",
      country: "Chile",
      status: "inactive",
      gender:"male",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002)
    },
    {
      customerName: "Ahmed El-Sayed",
      company: "Pyramids Inc.",
      phoneNumber: 7789012345,
      email: "ahmed.elsayed@pyramidsinc.eg",
      country: "Egypt",
      status: "active",
      gender:"male",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002)
    },
    {
      customerName: "Sara Lee",
      company: "Seoul Solutions",
      phoneNumber: 8890123456,
      email: "sara.lee@seoulsolutions.kr",
      country: "South Korea",
      status: "inactive",
      gender:"male",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002)
    },
    {
      customerName: "David Kim",
      company: "Pacific Rim",
      phoneNumber: 9901234567,
      email: "david.kim@pacificrim.hk",
      country: "Hong Kong",
      status: "active",
      gender:"male",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002)
    },
    {
      customerName: "Amina Nasser",
      company: "Sahara Ventures",
      phoneNumber: 1012345678,
      email: "amina.nasser@saharaventures.sa",
      country: "Saudi Arabia",
      status: "inactive",
      gender:"male",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002)
    },
    {
      customerName: "Aasai",
      company: "INFOSYS",
      phoneNumber: 6856584256,
      email: "aasai499@gamil.com",
      country: "IRAQ",
      status: "active",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002),
      gender:"Female"
    },
    {
      customerName: "Vignesh",
      company: "Caterpiller",
      phoneNumber: 8978557365,
      email: "vihema419@gamil.com",
      country: "SAUDI",
      status: "inactive",
      gender:"male",
      dateOfJoining :new Date(15/2/2024),
      dateOfBirth:new Date(28/3/2002)
    },
  ])
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState(tableData);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    const filteredResults = tableData.filter((customer) =>
      customer.customerName.toLowerCase().includes(searchTerm.toLowerCase())||
      customer.phoneNumber.toString().toLowerCase().includes(searchTerm.toLowerCase()) || 
      customer.country.toLowerCase().includes(searchTerm.toLowerCase()) || 
      customer.company.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
    setCurrentPage(1); // Reset to the first page on new search
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(totalPages, page))); // Ensure page is within valid range
  };

  // const handleSearch = (searchTerm: string) => {
  //   setSearchTerm(searchTerm);
  //   setCurrentPage(1); // Reset pagination to first page when search term changes
  // };
  const ITEMS_PER_PAGE = 7;
  // Calculate the current page data
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(searchResults.length / ITEMS_PER_PAGE);
//  the ceil method is used to round of the value to nearest one.....
const [priority, setPriority] = useState<string>('Sort by : Newest');
  const handlePrioritySelect = (value: string) => {
    setPriority(value);
  };
  return (
    <div className="container bg-white rounded-5 mt-5">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <p className="mt-3 fw-bold fs-4 mb-1">All Customer</p>
          <p className="active-members mt-0">Active Members</p>
        </div>
        <div className="bd-search" id="docsearch" data-bd-docs-version="5.3">
    <div className="d-flex align-items-center">
        <SearchInput onSearch={handleSearch}/>
        
        <div className="ms-5 ps-5">
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  {priority}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handlePrioritySelect('Oldest')}>Oldest</Dropdown.Item>
                  <Dropdown.Item onClick={() => handlePrioritySelect('Testing Process')}>Testing Process</Dropdown.Item>
                  <Dropdown.Item onClick={() => handlePrioritySelect('Final Valuation')}>Final Valuation</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
    </div>
</div>
        <AddEmployee  addEmployeeData={(newCustomer) => setSearchResults([...searchResults, newCustomer])}/>
      </div>
      <div style={{height:"500.200px"}}>
        <Table hover>
          <thead className="text-center">
            <tr> 
              <th id="heading-colors">Customer Name</th>
              {/* <th id="heading-colors">Gender</th> */}
              <th id="heading-colors">Company</th>
              <th id="heading-colors">Phone Number</th>
              <th id="heading-colors">Email</th>
              <th id="heading-colors">Country</th>
              <th id="heading-colors">Status</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {currentItems.map((row, idx) => (
              <tr key={idx}>
                {tableHeader.map((key) =>
                  key !== "status" ? (
                    <td className="text-black" key={key}>
                      {row[key]}
                    </td>
                  ) : (
                    <td>
                      <button
                        className={
                          "rounded  " +
                          (row[key] === "active"
                            ? "active-button btn btn-outline-success"
                            : "inactive-button btn btn-outline-danger")
                        }
                      >
                        {row[key][0].toUpperCase() + row[key].slice(1)}
                      </button>
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </Table>
        <div className='p-2'>
      <Pagination className="justify-content-end" style={{ margin: '20px 0px', position:"relative"}}>
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
            // disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
      </div>
    </div>
  );
}

export default CustomersTable;
