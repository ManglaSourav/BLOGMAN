import axios from 'axios'
import { storeConfig } from '../store'

const createInstanceWithSessionDetails = url => {
  let apiInstance = axios.create({
    baseURL: url
  })

  apiInstance.interceptors.request.use(
    config => {
      let userInfo = storeConfig().getState().userInfo
      //isAuth is true than add header and check token
      // config.headers.common[''Authorization] = userInfo.authToken
      // config.headers['sessionId'] = userInfo.sessionId;
      if (token != null) {
        config.headers.Authorization = `Bearer ${token}`
      }
      config.defaults.timeout = 2500
      return config
    },
    function(err) {
      return Promise.reject(err)
    }
  )
  return apiInstance
}

export default createInstanceWithSessionDetails
