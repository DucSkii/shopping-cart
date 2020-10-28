import React from 'react'

import './Page.scss'

const Page = ({ className, title, gender, children }) => {
  return (
    <div className={`page ${className}`}>
      <div className="page-title">{title}</div>
      <div className="page-subTitle">{gender}</div>
      <div className="page-items">
        {children}
      </div>
    </div>
  )
}

export default Page