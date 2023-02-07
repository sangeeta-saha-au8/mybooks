import React, { type ChangeEvent, type ReactElement, useState, useEffect } from 'react'
import { filterMembers, listMembers } from '../../services/result.services'
import './Home.css'

interface IMember {
  cardNo: number
  firstName: string
  lastName: string
  address: string
  phone: string
  books: number[]
  createdAt: string
}

const HomeComponent = (): ReactElement => {
  const [members, setMembers] = useState<IMember[]>([])
  const [searchStr, setSearchStr] = useState('')

  const getListMembers = (): void => {
    void (async () => {
      const resp = await listMembers()
      if (resp.status === 200) {
        setMembers(resp.data)
      } else {
        alert('Error in fetching members')
      }
    })()
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target as HTMLInputElement
    setSearchStr(value)
  }

  const handleSearch = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    void (async () => {
      const query = encodeURIComponent(searchStr)
      const resp = await filterMembers(query)
      if (resp.status === 200) {
        setMembers(resp.data)
      } else {
        alert('Error in fetching members')
      }
    })()
  }

  useEffect(() => {
    getListMembers()
  }, [searchStr])

  return (
    <>
      <div className='pageWrapper'>
        <div className='contentWrapper'>
      <div className='searchWrapper'>
          <input className='searchText'
            id="search"
            type="text"
            value={searchStr}
            name="search"
            onChange={handleChange}
          />
          <span>
            <button className='search' onClick={handleSearch}> Search </button>
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
              <th> Details </th>
            </tr>
          </thead>
          <tbody>
            {members.map((user, index) => (
              <tr className='userRow' key={user.cardNo}>
                <td>{index + 1}</td>
                <td>{user.cardNo}</td>
                <td>{`${user.firstName} ${user.lastName}`}</td>
                <td>{user.phone}</td>
                <td>
                  <button className='detail'>
                    <img src='http://localhost:3000/detail.svg' alt="detail icon" ></img>
                  </button>
                </td>
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
