import './index.css'

const InvoiceForm = props => {
  const {userDetails, deleteUser} = props
  const {invoiceDate, invoiceNumber, invoiceAmount, uniqueNo} = userDetails
  const onDelete = () => {
    deleteUser(uniqueNo)
  }
  return (
    <li className="user-card-container">
      <div className="user-details-container">
        <p className="edit">Invoice Date : {invoiceDate}</p>
        <p className="edit"> Invoice Number : {invoiceNumber} </p>
        <p className="edit"> Invoice Amount :{invoiceAmount} </p>
      </div>
      <button type="submit" className="delete-button" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          alt="cross"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default InvoiceForm
