import { useState } from "react";
import time from "../assets/icons/time.svg";
import info from "../assets/icons/bx-user-circle.svg";

function TabData() {
    const [isOn, setIsOn] = useState(true)

  const handleToggle = () => setIsOn(!isOn);
    return (
       <>
            <div className="text-button">
                <p>Assigned Job to  William Sample</p>
                <div className="tab-button-sec">
                    <button className="assign-job-btn">assign to jab</button>
                    <button className="view-all-job">View All Assigned Jobs</button>
                </div>
            </div>
            <div className="main-container">

                <div className="user-icon">
                    <div className="icon">
                        <span>M</span>
                    </div>
                    <div className="position-user">
                        <span className="mainHead">Senior product manager</span>
                        <span className="recruit">Recurter CRM</span>
                    </div>
                </div>
                <div className="other-details">
                    <span> <img src={info} alt className="infoUser" /> william sample</span>
                    <span> <img src={time} alt />jul 10 2023</span>

                </div>
                <div className="assign">
                    <button className="assign-btn">assigned</button>
                </div>
                <div className="view-section">
                    <button className="viewFile-btn">View Files</button>
                </div>
                <div className="switch-btn">
                    <label className="switch">
                        <input type="checkbox" checked={isOn} onChange={handleToggle} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
              <div className="main-container">

                <div className="user-icon">
                    <div className="icon">
                        <span>M</span>
                    </div>
                    <div className="position-user">
                        <span className="mainHead">Senior product manager</span>
                        <span className="recruit">Recurter CRM</span>
                    </div>
                </div>
                <div className="other-details">
                    <span> <img src={info} alt className="infoUser" /> william sample</span>
                    <span> <img src={time} alt />jul 10 2023</span>

                </div>
                <div className="assign">
                    <button className="assign-btn">assigned</button>
                </div>
                <div className="view-section">
                    <button className="viewFile-btn">View Files</button>
                </div>
                <div className="switch-btn">
                    <label className="switch">
                        <input type="checkbox" checked={isOn} onChange={handleToggle} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
              <div className="main-container">

                <div className="user-icon">
                    <div className="icon">
                        <span>M</span>
                    </div>
                    <div className="position-user">
                        <span className="mainHead">Senior product manager</span>
                        <span className="recruit">Recurter CRM</span>
                    </div>
                </div>
                <div className="other-details">
                    <span> <img src={info} alt className="infoUser" /> william sample</span>
                    <span> <img src={time} alt />jul 10 2023</span>

                </div>
                <div className="assign">
                    <button className="assign-btn">assigned</button>
                </div>
                <div className="view-section">
                    <button className="viewFile-btn">View Files</button>
                </div>
                <div className="switch-btn">
                    <label className="switch">
                        <input type="checkbox" checked={isOn} onChange={handleToggle} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        
      
       </>
    )
}

export default TabData;