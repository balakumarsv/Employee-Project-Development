import React, { useState } from 'react';
import './ClientTable.css';
import { Dropdown, Pagination } from 'react-bootstrap';
import AddClient from './AddClient';
import ClientData from './ClientData';
import { clientDetails } from '../AllDatas';
import SearchInput from '../SearchBox';
function ClientTable() {
  const [priority, setPriority] = useState<string>('Sort by : Newest');
  const handlePrioritySelect = (value: string) => {
    setPriority(value);
  };
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState(clientDetails);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    const filteredResults = clientDetails.filter((client) =>
      client.clientName.toLowerCase().includes(searchTerm.toLowerCase())||
      client.location.toLowerCase().includes(searchTerm.toLowerCase()) || 
      client.project.toLowerCase().includes(searchTerm.toLowerCase()) || 
      client.compnay.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredResults);
    setCurrentPage(1); // Reset to the first page on new search
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const ITEMS_PER_PAGE = 12;
  // Calculate the current page data
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(searchResults.length / ITEMS_PER_PAGE);
//  the ceil method is used to round of the value to nearest one.....
  return (
    <div className="container bg-white rounded-5 mt-5">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <p className="mt-3 fw-bold fs-4 mb-1">All Clients</p>
          <p className="active-members mt-0">Active Members</p>
        </div>
        <div className="bd-search" id="docsearch" data-bd-docs-version="5.3">
          <div className="d-flex align-items-center">
            <SearchInput onSearch={handleSearch} />
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
        <AddClient addClientDetail={(newClient) => setSearchResults([...searchResults, newClient])} />
      </div>
      <div style={{height:"624px"}}>
        <ClientData clientDetails={currentItems}/>
        
      </div>
      <div className='p-2'>
      <Pagination className="justify-content-end" style={{ margin: '20px 0px',}}>
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
  );
}

export default ClientTable;
