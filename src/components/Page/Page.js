import React from 'react'

import './Page.scss'

const Page = ({ className, title, gender, children }) => {
  return (
    <div className={`page ${className}`}>
      <h1 className="page-title">{title}</h1>
      <h2 className="page-subTitle">{gender}</h2>
      <div className="page-items">
        {children}
      </div>
    </div>
  )
}

export default Page