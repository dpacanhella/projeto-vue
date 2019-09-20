import axios from 'axios'

const http = () => {
  let _axios = axios.create({
    baseURL: process.env.VUE_APP_URL,
    withCredentials: true,
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
      'Authorization': localStorage.getItem('authToken')
    }
  })
  return _axios
}

export default {
  get (url, options) {
    return http().get(url)
  },
  post (url, data, options) {
    return http().post(url, data)
  }
}
