import axios from 'axios'

export const getCurUser = () => {
   return axios.get('/api/getcuruser')
                .then(res => {
                  return res.data
                })
}
