import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onTabIdClick = () => {
    onClickTabId(tabId)
  }

  const active = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`${active} tab-btn`}
        onClick={onTabIdClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
