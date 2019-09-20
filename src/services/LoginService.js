import Api from '../commons/services/Api'

export default {
  async login (username, password) {
    const response = await Api.post('login', { username, password })
    const authorization = response.headers['authorization']
    localStorage.setItem('authToken', authorization)
  }
}
