import axios from  'axios'
const baseURL = 'https://api.wallex.ir/v1/'
const axiosHandler = {
    // async axiosPost({url, formData}) {
    //     this.checkAxiosConfig();
    //     let response
    //     await axios.post(url, formData)
    //         .then((res) => {
    //             response = {status: 'success', data: res}
    //         })
    //         .catch(error => {
    //             response = {status: 'error', data: error}
    //         })
    //     if (response.status === 'error')
    //         dispatch('errorHandler', response)
    //     return response
    // },
    // async axiosPut({dispatch}, {url, formData}) {
    //     dispatch('checkAxiosConfig')
    //     let response
    //     await axios.put(url, formData)
    //         .then((res) => {
    //             response = {status: 'success'}
    //         })
    //         .catch(error => {
    //             response = {status: 'error', data: error}
    //         })
    //     if (response.status === 'error')
    //         dispatch('errorHandler', response)
    //     return response
    // },
    // async axiosPatch({dispatch}, {url, formData}) {
    //     dispatch('checkAxiosConfig')
    //     let response
    //     await axios.patch(url, formData)
    //         .then((res) => {
    //             response = {status: 'success'}
    //         })
    //         .catch(error => {
    //             response = {status: 'error', data: error}
    //         })
    //     if (response.status === 'error')
    //         dispatch('errorHandler', response)
    //     return response
    // },
    // async axiosDelete({dispatch}, {url, formData}) {
    //     dispatch('checkAxiosConfig')
    //     let response
    //     await axios.delete(url, formData)
    //         .then((res) => {
    //             response = {status: 'success', data: res.data ? res.data : {}}
    //
    //         })
    //         .catch(error => {
    //             response = {status: 'error', data: error}
    //         })
    //     if (response.status === 'error')
    //         dispatch('errorHandler', response)
    //     return response
    // },
    async axiosGet({url}) {
        axiosHandler.checkAxiosConfig();
        let response
        await axios.get(url)
            .then((res) => {
                response = {status: 'success', data: res.data}
            })
            .catch(error => {
                response = {status: 'error', data: error}
            })
        if (response.status === 'error') axiosHandler.errorHandler(response)
        return response
    },
    errorHandler(response) {
        if (response.data.response.status === 401) {
            console.log('no response from server')
        }

    },
    checkAxiosConfig() {
        axios.defaults.baseURL = baseURL
        axios.defaults.headers.common.Accept = 'application/json, text/plain, */*'
        axios.defaults.headers.common['Content-type'] = 'application/json'
    }
}

export default axiosHandler