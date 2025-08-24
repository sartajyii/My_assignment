import "../style/style.css";
import logo from "../assets/icons/RCRM-Logo-Watermark.svg";
import giftBox from "../assets/icons/giftcard.svg";
import grayEnvlop from "../assets/icons/gray-envlop.svg";
import grayBell from "../assets/icons/grayBell.svg";
import plus from "../assets/icons/plus.svg";
import Circle from "../assets/icons/Circle.png";
import mobileLogo from "../assets/icons/mobileLogo.png";
export default function Navbar(){
    return(
        <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id="chek"/>
            <div className="search-sec">
                <input type="text" placeholder="Search Pipedrive"/>
            </div>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="#" className="nav-plus-icon"><img src={plus} alt=""/></a></li>
              
                 <li><a href="#" className="nav-other-icon"><img src={giftBox} alt=""/></a></li>
                <li><a href="#" className="nav-other-icon"><img src={grayEnvlop} alt=""/></a></li>
                  <li><a href="#" className="nav-other-icon"><img src={grayBell} alt=""/></a></li>
                <li></li>
                <div className="Profile">
                <div className="profile-img">
                    <a href="#"><img src={Circle} alt=""/></a>
                </div>
                <div className="profileName">
                    <p>Phyllis Yang</p>
                    <span>Silicon Links Inc</span>
                </div>
                </div>
            </ul>
            <h1 class="logo"><a href="#"><img src={logo} alt="" className="webLogo"/><img src={mobileLogo} alt="" className="mobileLogo"/></a></h1>
            
        </div>
    </nav>
    )
}