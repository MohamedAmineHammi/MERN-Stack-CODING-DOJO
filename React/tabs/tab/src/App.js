import Tab from './components/tab';
import Content from './components/content';
import React,{useState} from 'react';

function App() {
  const tabsArray = [
    {label: "Tab 1", content: "Tab 1 content is showing here"},
    {label: "Tab 2", content: "Tab 2 content is showing here"},
    {label: "Tab 3", content: "Tab 3 content is showing here"},
  ];
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="App">
      <Tab
      tabsArray = {tabsArray}
      tabIndex = {tabIndex}
      setTabIndex = {setTabIndex}
      />
      <Content 
      tabsArray = {tabsArray} 
      tabIndex = {tabIndex}
      />
    </div>
  );
}

export default App;
