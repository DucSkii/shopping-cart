import React, { useState, useEffect } from 'react';
import onClickOutside from 'react-onclickoutside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import './Dropdown.scss'

function Dropdown({ title, items, multiSelect = false }) {
  const [ open, setOpen ] = useState(false);
  const [ selection, setSelection ] = useState([]);

  useEffect(() => {
    console.log(open)
  }, [ open ])

  const toggle = () => {
    setOpen(!open)
  }
  Dropdown.handleClickOutside = () => setOpen(false);

  const handleOnClick = (item) => {
    if (!selection.some(current => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([ item ])
      } else if (multiSelect) {
        setSelection([ ...selection, item ])
      }
    } else {
      let selectionAfterRemoval = selection
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      );
      setSelection([ ...selectionAfterRemoval ])
    }
  }

  const isItemInSelection = (item) => {
    if (selection.some(current => current.id === item.id)) {
      return true
    }
    return false
  }

  return (
    <div className="dd-wrapper">
      <div className="dd-header-wrapper">
        <div
          tabIndex={0}
          className="dd-header"
          role="button"
          onKeyPress={() => {
            console.log('onKeyPress', open)
            return toggle()
          }
          }
          onClick={() => {
            console.log('onClick', open)
            return toggle()
          }
          }
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
        <ul className="dd-list">
          {items.map(item => (
            <li className="dd-list-item" key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
                <span>{isItemInSelection(item) && 'Selected'}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
}

export default onClickOutside(Dropdown, clickOutsideConfig)