import { useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import './ClientData.css';
import { SlLocationPin } from "react-icons/sl";
import { LuCalendarDays } from "react-icons/lu";

import { clientDetails, ClientDetail } from '../AllDatas';
import ClientViewDetails from "./ViewComponent";

type ClientDetailsProps = {
  clientDetails: ClientDetail[];
};

function ClientData({ clientDetails }: ClientDetailsProps) {
    
  return (

    <div className="container">
      <div className="row grid gap-1">
        {clientDetails.map((client ,key)=> (
          <div className="col-3 rounded-3 mt-3 ms-3 p-1 card_div"  style={{    width: "305px",
          height: "137px"}} >
            <div className="d-flex gap-3">
              <div className="row" style={{width: "140px",marginLeft: "5px",marginTop: "10px"}}>
                <div className="d-flex mt-1">
                  <div><img src={client.photo} className="style "/></div>
                  <h6 className="fw-semibold ms-2" style={{fontSize:"14px",left: "-2px", position: "relative"}}>{client.clientName}</h6>
                </div>
              <div className="ms-5 col-5 me-0 d-flex " style={{left:"5px", position:"relative", top:"-24px", fontSize:"14.5px",right: "0px",width: "89px",height: "12px",paddingRight: "02px"}}>
                <p className="ms-6 mt-" style={{fontSize:"13px"}}><span className="be-1"><SlLocationPin/></span>{client.location}</p>
              </div>
            </div>
            <div className="col-5 ms-2 mt-2">
              <p className="mb-0 fw-medium" style={{fontSize:"14px"}}><span className="pb-1 fw-medium"><LuCalendarDays/></span>{client.date.toLocaleDateString()}</p>
              <p className="text-success fw-">Active</p>
            </div>
          </div>
          <div className="col-12 text-center mb-0">
              <p className="fw-semibold" style={{fontSize:"16px"}}>{client.project}</p>
          </div>
          <div className="col-11 d-flex justify-content-end mt-3" key={`details-${key}`} style={{bottom: "15px", position: "relative"}}>
            <a> <ClientViewDetails client={clientDetails[key]} /></a>
          </div>
            </div>
            
          
        ))
          
          }
        
      </div>      
    </div>
//     <div className="container justify-content-center">
//       <div className="row justify-content-cente" style={{gap: "15px", width: "950px", left:"112px",position:"relative"}}>
//         {data.map((client) => (
//           <div className="col-3 text-center">
//             <Card
//               key={client.clientName}
//               className={"align-items-center carddiv"}
//               style={{
//                 height: "292px",

//             }}
//             >
//               <img className={"align-self-center"} style={{width:"60%", height:"45%"}} src={image} />
//               <Card.Body className="p-0" style={{width: "195px"
// }}>
//                 <Card.Title className="m-0">{client.clientName}</Card.Title>
//                 <p className="fw-normal p-0 m-1"><span className="me-1"><SlLocationPin/></span>{(client.location)}</p>
//                 <Card.Text className="m-1 fw-medium  fs-7 lh-sm mb-2">{client.compnay}</Card.Text>
//                 <a href="#" className={
//                           "rounded  " +
//                           (client.status === "Active"
//                             ? "active-button btn btn-outline-success"
//                             : "inactive-button btn btn-outline-danger")
//                         } style={{width:"50%"}}>
//                   {client.status}
//                 </a>
                
//                 <p className="fw-normal mt-0 text-body-secondary fw-normal">{client.activeState}</p>
//               </Card.Body>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </div>




    




















  );
}
export default ClientData;
