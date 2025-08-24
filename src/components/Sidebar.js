import "../style/style.css"
import dashboard from "../assets/icons/nav1.svg";
import user from "../assets/icons/nav2.svg";
import buildinghouse from "../assets/icons/nav3.svg";
import usersquare from "../assets/icons/nav4.svg";
import briefcase from "../assets/icons/nav5.svg";
import envelope from "../assets/icons/nav6.svg";
import calendar from "../assets/icons/nav7.svg";
import dollar from "../assets/icons/nav8.svg";
import circle from "../assets/icons/nav9.svg";
import credit from "../assets/icons/nav10.svg";
import cog from "../assets/icons/nav11.svg";
import dots from "../assets/icons/nav12.svg";
function Sidebar(){
  return(
    <div className="sidebar">
    <ul>
<li><a href="#"><img src={dashboard} alt="dashboard"/></a></li>
<li><a href="#" className="active"><img src={user} alt="user"/></a></li>
<li><a href="#"><img src={buildinghouse} alt="buildinghouse"/></a></li>
<li><a href="#"><img src={usersquare} alt="usersquare"/></a></li>
<li><a href="#"><img src={briefcase} alt="briefcase"/></a></li>        
<li><a href="#"><img src={envelope} alt="envelope"/></a></li>
<li><a href="#"><img src={calendar} alt="calendar-event"/></a></li>
<div className="divider"></div>
<li><a href="#"><img src={dollar} alt="dollar"/></a></li>
<li><a href="#"><img src={circle} alt="circle"/></a></li>
<li><a href="#"><img src={credit} alt="credit-card-alt"/></a></li>
<li><a href="#"><img src={cog} alt="cog"/></a></li>
<li><a href="#"><img src={dots} alt="dots"/></a></li>
    </ul>
    </div>
  )
}
export default Sidebar;