import React from 'react';

const Tab = (props) => {
  const { tabsArray, tabIndex, setTabIndex } = props;

  // conditionally styling the tabs with classes in CSS
  const tabStyle = (index) => {
    if (index === tabIndex) {
      return "selectedTab";
    } else {
      return "nonSelectedTab";
    }
  }

  const setSelectedTab = (index) => {
    setTabIndex(index);
  }

  // Using both inline style and css to demonstrate both usage syntax
  return (
    <div style={{ margin: "auto", width: "85%", textAlign: "left"}} >

      {/* we do not actually need to use content, but it MUST be there so we can get the index */}
      {
        tabsArray.map((item, index) => (
          <div className={`tab ${ tabStyle(index) }`} onClick={(e) => setSelectedTab(index) }>
            { item.label }
          </div>
        ))
      }
    </div>
  )
}

export default Tab;