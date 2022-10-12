import React from 'react'

const SuperMenuItem = ({id, activeTab, setActiveTab, children}) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <div>
      <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
        {children}
      </li>
    </div>
  )
}

export default SuperMenuItem
