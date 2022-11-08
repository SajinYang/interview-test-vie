import axios from 'axios'

const baseURL = 'https://mocki.io/v1/c1687641-e541-49fa-bdba-9e655274f053'

export const apiHelper = axios.create({
  baseURL
})