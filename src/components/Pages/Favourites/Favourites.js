import React, {useState, useEffect} from 'react'
import Page from '../../Page/Page'
import FavouriteItems from '../../Items/FavouriteItems/FavouriteItems'
import Navigation from '../../Navigation/Navigation'
import { useStateValue } from '../../../context/StateContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import './Favourites.scss'

const Favourites = () => {

  const [ showScroll, setShowScroll ] = useState(false)

  const [{favouritesList}, dispatch ] = useStateValue()
  const renderList = () => {
    return favouritesList.map((favourites, index) => {
      return <FavouriteItems
        key={index}
        id={favourites.id}
        subTotal={favourites.subTotal}
        quantity={favourites.quantity}
        name={favourites.name}
        cost={favourites.cost}
        image={favourites.image}
        colour={favourites.color}
        desc1={favourites.desc1}
        desc2={favourites.desc2}
        desc3={favourites.desc3}
        gender={favourites.gender}
      />
    })
  }

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
    <div>
      <div className="page-scrollIcon" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}><FontAwesomeIcon icon={faArrowCircleUp} size='4x' /></div>
      <Navigation />
      <Page className='favouriteList' title="Favourites">
        {renderList()}
      </Page>
    </div>
  )
}

export default Favourites