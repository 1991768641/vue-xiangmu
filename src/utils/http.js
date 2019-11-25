import axios from 'axios';
import qs from 'qs'

export const get=({
    url,
    params
})=>{
    return axios({
        url,
        params
    })
    .then((result)=>{
        return result.data
    })
    .catch((err)=>{
        return err.message
    })
}


export const get1=({
    url,
    params
})=>{
    return axios({
        url,
        params
    })
    .then((result)=>{
        return result.data.obj
    })
    .catch((err)=>{
        return err.message
    })
}
