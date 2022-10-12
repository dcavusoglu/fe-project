import React from 'react'

const SuperMenuContent = ({id, activeTab, children}) => {
  return (
    activeTab === id ? <div className="TabContent">
      { children }
    </div>
    : null
  )
}

export default SuperMenuContent
