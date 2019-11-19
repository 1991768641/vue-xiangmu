import axios from 'axios';

export const get=({
    url
})=>{
    return axios({
        url
    })
    .then((result)=>{
        return result.data
    })
    .catch((err)=>{
        return err.message
    })
}

export const get1=({
    url
})=>{
    return axios({
        url
    })
    .then((result)=>{
        return result.data.obj
    })
    .catch((err)=>{
        return err.message
    })
}
