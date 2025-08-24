import { useState } from "react";
import TabData from "../util/TabBody";
function TabSection(){
    const [activeTab, setActiveTab] = useState('Tab2');
     const renderContent = () => {
    switch (activeTab) {
      case 'Tab1':
        return <p>This is content for Tab 2.</p>;
      case 'Tab2':
        return <TabData/>;
      case 'Tab3':
        return <p>This is content for Tab 3.</p>;
      default:
        return null;
    }
  };
    return(
      <div className="tabs-container">
        <div className="tab-buttons">
          <ul>
            <li
              className={activeTab === 'Tab1' ? 'tab-button active' : 'tab-button'}
              onClick={() => setActiveTab('Tab1')}>
              all details
            </li>
            <li
              className={activeTab === 'Tab2' ? 'tab-button active' : 'tab-button'}
              onClick={() => setActiveTab('Tab2')}>
              assigned jobs
            </li>
            <li className={activeTab === 'Tab3' ? 'tab-button active' : 'tab-button'}
              onClick={() => setActiveTab('Tab3')} >
              related emails  </li>
            <li  className={activeTab === 'Tab4' ? 'tab-button active' : 'tab-button'}
              onClick={() => setActiveTab('Tab4')}
            >
              candidate questions

            </li>
            <li
              className={activeTab === 'Tab5' ? 'tab-button active' : 'tab-button'}
              onClick={() => setActiveTab('Tab5')}
            >
              hotlists

            </li>
            <li
              className={activeTab === 'Tab6' ? 'tab-button active' : 'tab-button'}
              onClick={() => setActiveTab('Tab6')}
            >
              related deals

            </li>
            <li
              className={activeTab === 'Tab7' ? 'tab-button active' : 'tab-button'}
              onClick={() => setActiveTab('Tab7')}
            >
              contact(s) pitched
            </li>
          </ul>
        </div>
        <div className="tab-content">
          {renderContent()}
        </div>
      </div>
    )
}
export default TabSection;