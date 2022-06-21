import axios from 'axios'

export const getCategory = (params) => axios.post('https://yangzhiyuan.top/tp5/public/getCategory', { 
    data: params 
});