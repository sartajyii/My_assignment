import profile from "../assets/icons/profile.svg";
import facebook from "../assets/icons/facebook.png";
import twitter from "../assets/icons/twitter.png";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";
import lastIcon from "../assets/icons/last-con.svg";
import star from "../assets/icons/star.svg";
import fire from "../assets/icons/fire.svg";
import pencil from "../assets/icons/pencil.svg";
import Hrdot from "../assets/icons/hr-dot.svg";
import mail from "../assets/icons/envlop-new.svg";
import phone from "../assets/icons/phone.svg";
import time from "../assets/icons/time.svg";
import info from "../assets/icons/bx-user-circle.svg";
import React, { useState } from 'react';
const initialData = [
  { label: "Current Organization", data: "World Bank Group" },
  { label: "Summary", data: "Current Organization" },
  { label: "Skills", data: "HTML, CSS, Javascript" },
  { label: "Current Employment Status", data: "Employed" },
  { label: "Available From", data: "Jul, 14, 2023" },
  { label: "Date of Birth", data: "15 June 1993" },
  { label: "Current Salary", data: "$6000" },
  { label: "Relevent Experience", data: "7 Years" },
  { label: "Notice Period", data: "90 Days" },
  { label: "Salary Expectation", data: "$9000" },
  { label: "Full Address", data: "9400 Ashton Rd, Philadelphia..." },
  { label: "Status", data: "Submitted to Client" },
  { label: "Resume", data: "Resume" },
  { label: "Salary Type", data: "Annual" },
  { label: "Total Experience", data: "5 Years" },
  { label: "Language Skills", data: "English(Elementary proficiency)" },
];

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

function Details(){
  const [formData, setFormData] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);

  const dataChunks = chunkArray(formData, 8);

  const handleChange = (e, index) => {
    const updated = [...formData];
    updated[index].data = e.target.value;
    setFormData(updated);
  };

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);
  const handleCancel = () => {
    setFormData(initialData); 
    setIsEditing(false);
  };




    return(
       <div className="main-card">
        <div className="details-nav-section">
        <div className="user-details">
         <div className="user-icon">
            <img src={profile} alt=""/>
         </div>
         <div className="user-info">
            <div className="name-icon-section">
               
                <div className="social-icon">
                     <h2>william sample</h2>
                <ul>
                <li><a href="#"><img src={facebook} alt="facebook"/></a></li>
                <li><a href="#"><img src={twitter} alt="twitter"/></a></li>
                 <li><a href="#"><img src={linkedin} alt="linkedin" className="github"/></a></li>
                <li><a href="#"><img src={github} alt="github" className="github"/></a></li>
               <li><a href="#"><img src={lastIcon} alt=""/></a></li>
                </ul>
                </div>
                <div className="user-designation">
                    <span>Senior Product Manager</span>
                     <span>United States</span>
                      <span>Dallas</span>
                </div>
            </div>
         </div>
        </div>
        <div className="icon-section">
         <button className="contact-btn">contact linked</button>
          <button className="edit-btn"><img src={star} alt=""/></button>
        <button className="edit-btn"><img src={fire} alt=""/></button>
         <button className="edit-btn" onClick={handleEdit}><img src={pencil} alt=""/></button>
           <button className="edit-btn"><img src={Hrdot} alt=""/></button>
        </div>
        </div>
        <div className="info-section">
         <div className="contact-details">
         <span><img src={mail} alt/>williamsample@gmail.com</span>
         <span><img src={phone} alt/>+91 9021232326</span>
         </div>
         <div className="user-info-sec">
         <span><img src={info} alt className="infoUser"/>Phyllis Yang</span>
          <span><img src={time} alt/>Jul 14, 2023, 4:04 pm</span>
         </div>
        </div>



 <div className="update-info">
      {dataChunks.map((chunk, chunkIndex) => (
        <div
          key={chunkIndex}
          className={chunkIndex === 0 ? "section-one" : "section-two"}
        >
          <div className="label-section">
            {chunk.map((item, idx) => (
               <div className={isEditing ? 'editValue myLabel' : 'myLabel'}>
              <label key={idx}>{item.label}</label>
              </div>
            ))}
          </div>
          <div className="input-section">
            {chunk.map((item, idx) => {
               
              const realIndex = chunkIndex * 8 + idx;
              return isEditing ? (
             
                <input
                  key={idx}
                  type="text"
                  value={formData[realIndex].data}
                  onChange={(e) => handleChange(e, realIndex)}
                />
              ) : (
                 <div className="myInput">
                <span key={idx}>{item.data}</span>
                 </div>
              );
             
            })}
          </div>
        </div>
      ))}

  
     
    </div>
  <div className="Edit_button_section">
        {isEditing && (
          <>
            <button onClick={handleSave} className="Edit_btn">Save</button>
            <button onClick={handleCancel} className="cancel_btn">Cancel</button>
          </>
        ) }
      </div>

      {/* <div className="update-info">
  {dataChunks.map((chunk, index) => (
    <div
      key={index}
      className={index === 0 ? "section-one" : "section-two"}
    >
      <div className="label-section">
        {chunk.map((item, idx) => (
          <label key={idx}>{item.label}</label>
        ))}
      </div>
      <div className="input-section">
        {chunk.map((item, idx) => (
          <span key={idx}>{item.data}</span>
        ))}
      </div>
    </div>
  ))}
</div> */}


      {/* <div className="update-info">
       <div className="section-one">
       <div className="label-section">
       <label>Current Organization</label>
       </div>
       <div className="input-section">
        <span>World Bank Group</span>
       </div>
       </div>
       <div className="section-two">
         <div className="label-section">
       <label>Summary</label>
       </div>
       <div className="input-section">
        <span>Current Organization</span>
       </div>
       </div>
      </div> */}

       </div>
    )
}
export default Details;