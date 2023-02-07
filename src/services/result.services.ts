import axios, { type AxiosResponse } from 'axios'

interface IUser {
  email: string
  password: string
}

interface IMember {
  cardNo: number
  firstName: string
  lastName: string
  address: string
  phone: string
  books: number[]
  createdAt: string
}

interface ILoginData {
  token: string
}

interface ILoginResponse {
  status: number
  data: ILoginData
}

interface IListMemberResponse {
  status: number
  data: IMember[]
}

export const login = async (payload: IUser): Promise<ILoginResponse> => {
  try {
    const resp = await axios.post('/api/login', payload)
    return { status: resp.status, data: resp.data }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message)
      if (error.response != null) { return { status: error.response.status, data: error.response.data } }
    }
  }
  return { status: 500, data: { token: '' } }
}

export const listMembers = async (): Promise<IListMemberResponse> => {
  try {
    const resp = await axios.get('/api/member/list')
    return { status: resp.status, data: resp.data }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message)
      if (error.response != null) { return { status: error.response.status, data: error.response.data } }
    }
  }
  return { status: 500, data: [] }
}

// export const filterMembers = async (payload: string): Promise<AxiosResponse> => {
//   return await axios.get(`/api/member/filter?query=${payload}`)
// }

export const filterMembers = async (payload: string): Promise<IListMemberResponse> => {
  try {
    const resp = await axios.get(`/api/member/filter?query=${payload}`)
    return { status: resp.status, data: resp.data }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message)
      if (error.response != null) { return { status: error.response.status, data: error.response.data } }
    }
  }
  return { status: 500, data: [] }
}
