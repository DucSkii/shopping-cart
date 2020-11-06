import React, {useState, useEffect} from 'react'
import onClickOutside from 'react-onclickoutside'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { Slider } from '@material-ui/core'
import { useStateValue } from '../../../context/StateContext'
import './DropdownPrice.scss'

const DropdownPrice = ({title, min, max, setMin, setMax, difference, addition, setSelectedPrice}) => {

  const [ selected, setSelected ] = useState(false)
  const [{clearAll}, dispatch ] = useStateValue()

  const [ open, setOpen ] = useState(false)
  const [ val, setVal ] = useState([ 0, 100 ])

  useEffect(() => {
    setVal([ 0, 100 ])
    dispatch({type: 'CLEAR_RESET'})
  }, [clearAll])

  const toggle = () => {
    setOpen(!open)
  }

  const handleClickOutside = evt => {
    setOpen(false)
  }

  const updateRange = (e, data) => {
    setMin((data[0] * difference) + addition)
    setMax((data[1] * difference) + addition)
    setVal(data)
  }

  useEffect(() => {
    if (min !== addition || max !== ((difference * 100) + addition)) {
      setSelected(true)
    } else {
      setSelected(false)
    }
  }, [ min, max ])

  useEffect(() => {
    setSelectedPrice(selected)
  }, [selected])

  return (
    <div className="dd-wrapper">
      <div className="dd-header-wrapper">
        <div
          tabIndex={0}
          className={selected ? 'dd-header-selected' : 'dd-header'}
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