import {Component} from 'react'
import InvoiceForm from './components/InvoiceForm'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    invoiceDate: '3rd july 2022',
    invoiceNumber: '1',
    invoiceAmount: '5000',
  },
  {
    uniqueNo: 2,
    invoiceDate: '4rd july 2022',
    invoiceNumber: '2',

    invoiceAmount: '6000',
  },
  {
    uniqueNo: 3,
    invoiceDate: '5rd july 2022',
    invoiceNumber: '3',
    invoiceAmount: '7000',
  },
  {
    uniqueNo: 4,
    invoiceDate: '6rd july 2022',
    invoiceNumber: '4',
    invoiceAmount: '8000',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    usersDetailsList: initialUserDetailsList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteUser = uniqueNo => {
    const {usersDetailsList} = this.state
    const filteredUsersData = usersDetailsList.filter(
      each => each.uniqueNo !== uniqueNo,
    )
    this.setState({
      usersDetailsList: filteredUsersData,
    })
  }

  render() {
    const {searchInput, usersDetailsList} = this.state
    const searchResults = usersDetailsList.filter(eachUser =>
      eachUser.invoiceDate.includes(searchInput),
    )
    return (
      <div className="app-container">
        <h1 className="title">Invoice Form</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <InvoiceForm
              userDetails={eachUser}
              key={eachUser.uniqueNo}
              deleteUser={this.deleteUser}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
