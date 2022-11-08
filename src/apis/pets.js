import { apiHelper } from '../utils/helpers'

export default {
  getPets() {
    return apiHelper.get(`https://mocki.io/v1/c1687641-e541-49fa-bdba-9e655274f053`)
  }
}