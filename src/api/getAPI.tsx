import axios from 'axios'

const api = axios.create({
  baseURL: 'https://9372c396-390a-49c9-8db2-3b804b443274.mock.pstmn.io',

  headers: {
    Authorization: `Bearer token`,
  },
})

export function getUserInfoAPI() {
  return api.get('/user-info')
}

export function getResumeAPI() {
  return api.get('/resume')
}
