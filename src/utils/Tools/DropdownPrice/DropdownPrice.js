import React, {useState} from 'react'
import onClickOutside from 'react-onclickoutside'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { Slider } from '@material-ui/core'
import './DropdownPrice.scss'

const DropdownPrice = ({title, min, max, setMin, setMax}) => {

  const [ open, setOpen ] = useState(false)
  const [ val, setVal ] = useState([ 0, 100 ])

  const toggle = () => {
    setOpen(!open)
  }

  const handleClickOutside = evt => {
    setOpen(false)
  }

  const updateRange = (e, data) => {
    setMin((data[0] * 190) + 1000)
    setMax((data[1] * 190) + 1000)
    setVal(data)
  }

  return (
    <div className="dd-wrapper">
      <div className="dd-header-wrapper">
        <div
          tabIndex={0}
          className='dd-header'
          role="button"
          onKeyPress={toggle}
          onClick={toggle}
        >
          <div className="dd-header__title">
            <p className="dd-header__title--bold">{title}</p>
          </div>
          <div className="dd-header__action">
            <p>{open ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />}</p>
          </div>
        </div>
      </div>
      {open && (
        <div className="slider-container">
          <Slider
            value={val}
            onChange={updateRange}
          />
          <div className="slider-price-range">
            <div className="slider-price">£{min}</div>
            <div className="slider-price">£{max}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DropdownPrice