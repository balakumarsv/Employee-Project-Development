import React, { useState } from 'react'
import { Pagination, Table } from 'react-bootstrap'
import './Project.css'
function ProjectTable() {

    const [projectData,setProjectData] = useState(
        [
            {
                task: "L&T",
                fromDate: "20-04-2023",
                toDate: "30-05-2024",
                status: "Completed"
            },
            {
                task: "EOC App",
                fromDate: "10-03-2021",
                toDate: "",
                status: ""
            },
            {
                task: "Meta Web",
                fromDate: "05-01-2020",
                toDate: "16-05-2020",
                status: "Completed"
            },
            {
                task: "MicroSoft API",
                fromDate: "20-04-2019",
                toDate: "29-04-2023",
                status: "Completed"
            },
            {
                task: "SWOMB",
                fromDate: "15-02-2019",
                toDate: "30-05-2023",
                status: "Completed"
            },
            {
                task: "EMS",
                fromDate: "02-05-2024",
                toDate: "",
                status: ""
            },
            {
                task: "Think",
                fromDate: "20-04-2023",
                toDate: "10-02-2024",
                status: "Completed"
            },
            {
                task: "Mobile App",
                fromDate: "29-04-2023",
                toDate: "17-05-2024",
                status: "Completed"
            },
            
        ]
    )
    
    return (
<div className='overAll container rounded-5 mt-5 justify-content-center align-items-center border border-start-0' style={{width:"1000px"}}>

  <div className='HeadContent container ms-5 pt-5 pb-4'>
<h2>Project Completion</h2>
  </div>
  <div className='bg-body-tertiary'>
  <Table hover >
    
          <thead className="text-center">
            <tr id='table-head'>         
              <th className='text-secondary bg-body-tertiary'>Task</th>
              <th className='text-secondary bg-body-tertiary'>From Date</th>
              <th className='text-secondary bg-body-tertiary'>To Date</th>
              <th className='text-secondary bg-body-tertiary'>Status</th>
            </tr>
          </thead>
          <tbody className='text-center bg-body-tertiary'>
          {projectData.map((project) => (
    <tr key={project.task}>
        <th scope="row" className=' bg-body-tertiary'>{project.task}</th>
        <td className='text-light-emphasis bg-body-tertiary'>{project.fromDate}</td>
        <td className='text-light-emphasis bg-body-tertiary'>
            {project.status === 'Completed' ? project.toDate : '-'}
        </td>
        <td id='projects-status' className={project.status === 'Completed' ? ' bg-body-tertiary' : 'text-warning  bg-body-tertiary'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
            </svg>  
            {project.status === 'Completed' ? project.status : 'In Progress'}
        </td>
    </tr>
))}
  </tbody>
        </Table>
        <Pagination className="justify-content-end">
          {/* <Pagination.First /> */}
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>

          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Item>{4}</Pagination.Item>
          <Pagination.Item>{5}</Pagination.Item>
          {/* <Pagination.Ellipsis /> */}
          {/* <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item> */}

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          {/* <Pagination.Last /> */}
        </Pagination>      
  </div>
  
     </div>
    )
}

export default ProjectTable;