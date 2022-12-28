import './index.css'

const TabItem = props => {
  const {eachItem, fun, status} = props
  const {tabId, displayText} = eachItem

  const funcall = () => {
    fun(tabId)
  }

  return (
    <li className="lii">
      <button
        type="button"
        className={`btn ${status ? 'btn-styyy' : ''}`}
        onClick={funcall}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
