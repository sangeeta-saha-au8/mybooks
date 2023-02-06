import axios, { type AxiosResponse } from 'axios'

interface IUser {
  email: string
  password: string
}

export const login = async (payload: IUser): Promise<AxiosResponse> => {
  return await axios.post('/api/login', payload)
}

export const listMembers = async (): Promise<AxiosResponse> => {
  return await axios.get('/api/member/list')
}

export const filterMembers = async (payload: string): Promise<AxiosResponse> => {
  return await axios.get(`/api/member/filter?query=${payload}`)
}
