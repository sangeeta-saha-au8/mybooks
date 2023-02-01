import React from 'react'
import './Home.css'

const users = [
  {
    cardNo: 145,
    firstName: 'Amit',
    lastName: 'Kumar',
    address: '123, Kamanhalli Road',
    phone: '8765554332',
    books: [123, 23],
    createdAt: '2021-07-28 01:39:28'
  },
  {
    cardNo: 147,
    firstName: 'Biren',
    lastName: 'C',
    address: 'BVG Circle',
    phone: '8765554332',
    books: [181],
    createdAt: '2021-07-28 01:39:28'
  },
  {
    cardNo: 150,
    firstName: 'Shriya',
    lastName: 'Bhat',
    address: '14, Royal Residency',
    phone: '8765554332',
    books: [],
    createdAt: '2021-07-28 01:39:28'
  },
  {
    cardNo: 155,
    firstName: 'Meena',
    lastName: 'Joseph',
    address: 'Rose Apartments',
    phone: '8765554332',
    books: [14],
    createdAt: '2021-07-28 01:39:28'
  },
  {
    cardNo: 160,
    firstName: 'Uday',
    lastName: 'Joshey',
    address: 'BVG Circle',
    phone: '8765554332',
    books: [198],
    createdAt: '2021-07-28 01:39:28'
  }
]

const HomeComponent = () => {
  return (
    <>
      <div className='pageWrapper'>
        <div className='contentWrapper'>
      <div className='searchWrapper'>
          <input className='searchText'
            id="search"
            type="text"
            // value={user.password}
            name="search"
          />
          <span>
            <button className='search'> Search </button>
          </span>
      </div>
      <div className='tableWrapper'>
        <table>
          <thead>
            <tr>
              <th> No. </th>
              <th> Card No. </th>
              <th> Name </th>
              <th> Phone </th>
              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className='userRow' key={user.cardNo}>
                <td>{index + 1}</td>
                <td>{user.cardNo}</td>
                <td>{`${user.firstName} ${user.lastName}`}</td>
                <td>{user.phone}</td>
                <td>action</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
      </div>
      </div>
    </>
  )
}

export { HomeComponent }
