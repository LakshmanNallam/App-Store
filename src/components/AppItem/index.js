import './index.css'

const AppItem = props => {
  const {eachItem} = props
  const {appName, imageUrl} = eachItem

  return (
    <li className="listItem">
      <img src={imageUrl} className="ditemIMGaS" alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
