import BreadCrumb from "../components/Breadcrumb";
import Card from "../components/Card";
import Details from "../components/Details";
import Navbar from "../components/Navbar";
import SecNav from "../components/Sec-nav";
import Sidebar from "../components/Sidebar";
import TabSection from "../components/TabSection";

const Home = () => {
    return (
        <>
            
            <div className="body-section">
                <div className="sidebar-section">
                    <Sidebar />
                </div>
                <div className="body-main-container">
                    <div className="navbar-section">
                <Navbar />
            </div>
                    <div className="main-cantent-section">
                          
                           <div className="rightDetails-section">
                             <BreadCrumb />
                        <div className="details-main">
                             <Details />
                            <TabSection />
                            </div>
                        </div>
                        <div className="sidecard-section">
                            <SecNav/>
                            <Card />
                             <Card />
                              <Card />
                              
                        </div>
                    </div>
                </div>
               
            </div>
        </>
    )
}
export default Home;