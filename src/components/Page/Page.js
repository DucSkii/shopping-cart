import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import './Page.scss'

const Page = ({ className, title, gender, children }) => {

  const [ showScroll, setShowScroll ] = useState(false)

  const checkScrollTop = () => {
    if (window.pageYOffset > 400){
      setShowScroll(true)
    } else if (window.pageYOffset <= 400){
      setShowScroll(false)
    }
  }

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'})
  }
 
  useEffect (() => {
    window.addEventListener('scroll', checkScrollTop)
    return () => {
      window.removeEventListener('scroll', checkScrollTop)
    }
  }, [])

  return (
    <>
      <div className="page-scrollIcon" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}><FontAwesomeIcon icon={faArrowCircleUp} size='4x' /></div>
      <div className={`page ${className}`}>
        <div className="page-title">{title}</div>
        <div className="page-subTitle">{gender}</div>
        <div className="page-count">{children.length} items found</div>
        <div className="page-items">
          {children}
        </div>
      </div>
    </>
  )
}

export default Page