import constants from '../constants'
import createInstanceWithSessionDetails from './helper'

const apiInstance = createInstanceWithSessionDetails(constants.apiServerUrl)

export const registerUser = async function(newUser) {
  try {
    const url = '/users/register'
    const response = await apiInstance.post(url)
    return response
  } catch (error) {
    return error.response
  }
}

// export const getAllCohorts = async function () {
//     try {
//         const url = `v1/cohort`
//         const response = await careersApiInstance.get(url);
//         return response
//     } catch (error) {
//         return error.response
//     }
// }

// export const getAttributes = async function ({ course_id, type }) {
//     try {
//         const url = `v1/attributes?display_type=${type}`
//         const response = await careersApiInstance.get(url, { headers: { course_id } })
//         return response
//     } catch (error) {
//         return error.response
//     }
// }

// export const addNewAttribute = async function ({ course_id, attr_key, display_type }) {
//     try {
//         const url = 'v1/attributes'
//         const response = await careersApiInstance.post(url, { attr_key, display_type }, { headers: { course_id } })
//         return response
//     } catch (error) {
//         return error.response
//     }
// }

// export const uploadData = async function ({ course_id, display_type, user_data }) {
//     try {
//         var bodyFormData = new FormData();
//         bodyFormData.set('display_type', display_type);
//         bodyFormData.append('user_data', user_data);
//         const url = 'v1/profile'
//         const response = await careersApiInstance.post(
//             url,
//             bodyFormData,
//             { headers: { course_id, 'Content-Type': 'multipart/form-data' } }
//         )
//         return response
//     } catch (error) {
//         return error.response
//     }
// }
