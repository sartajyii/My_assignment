import cardIcon from "../assets/icons/card-icon.svg";
import bluePhone from "../assets/icons/blue-phone.svg";
import calender from "../assets/icons/calender.svg";
import blueCheck from "../assets/icons/check.svg";
function SecNav(){
    return(
       <div className="nav-icon-list">
        <div className="icon-list">
            <span><img src={cardIcon} alt="cardIcon"/></span>
            <span><img src={bluePhone} alt="bluePhone"/></span>
            <span><img src={calender} alt="calender"/></span>
            <span><img src={blueCheck} alt="blueCheck"/></span>
        </div>
         <div className="tab-sec">
            <ul>
                <li><a href="#" className="active">all</a></li>
                <li><a href="#"> notes & call</a></li>
                <li><a href="#">tasks </a></li>
                <li><a href="#">meeting</a></li>
                <li><a href="#">files</a></li>
            </ul>
        </div>
       </div>
    )
}
export default SecNav;