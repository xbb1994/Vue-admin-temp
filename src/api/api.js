import http from '../utils/http'

let baseUrl = '/94Frame'

export function login(url, params) {
  console.log('x' + url)
  return http.post(baseUrl + url, params)
}
