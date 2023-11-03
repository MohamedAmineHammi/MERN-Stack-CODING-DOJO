import React from 'react'

const Content = (props) => {
    const {tabsArray, tabIndex} = props;
  return (
    <div className='content'>
      {tabsArray[tabIndex].content}
    </div>
  )
}

export default Content