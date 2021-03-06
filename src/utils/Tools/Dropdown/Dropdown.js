import React from 'react'
import onClickOutside from 'react-onclickoutside'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare, faSquare } from '@fortawesome/free-regular-svg-icons'
import './Dropdown.scss'

class Dropdown extends React.Component {
  static defaultProps = {
    multiSelect: false,
    selection: [],
  }

  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  toggle = () => {
    this.setState(prevState => ({ open: !prevState.open }))
  }

  handleClickOutside = evt => {
    this.setState({ open: false })
  }

  handleOnClick = item => {
    const { multiSelect, selection, setSelection } = this.props
    if (!selection.some(current => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item])
      } else if (multiSelect) {
        setSelection([ ...selection, item ])
      }
    } else {
      let selectionAfterRemoval = selection
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      )
      setSelection([...selectionAfterRemoval])
    }
  }

  isItemInSelection = (item) => {
    return this.props.selection.some(current => current.id === item.id)
  }

  render() {
    const { open } = this.state
    const { title, items, selection } = this.props
    return (
      <div className="dd-wrapper">
        <div className="dd-header-wrapper">
          <div
            tabIndex={0}
            className={(selection.length) ? 'dd-header-selected' : 'dd-header'} //fix this please
            role="button"
            onKeyPress={this.toggle}
            onClick={this.toggle}
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
            {items.map((item, index) => (
              <div key={index} className="dd-list-item-wrapper">
                <div className="dd-list-item-gap"></div>
                <li className="dd-list-item" key={item.id}>
                  <button className={this.isItemInSelection(item) ? 'dd-list-item-button-selected' : 'dd-list-item-button'} type="button" onClick={() => this.handleOnClick(item)}>
                    <span style={{ textTransform: 'capitalize' }}>{item.value}</span>
                    <span>{this.isItemInSelection(item) ? <FontAwesomeIcon icon={faCheckSquare} size="lg" /> : <FontAwesomeIcon icon={faSquare} size="lg" />}</span>
                  </button>
                </li>
              </div>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default onClickOutside(Dropdown)