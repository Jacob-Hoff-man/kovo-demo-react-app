
import axios, { AxiosInstance, AxiosHeaders } from 'axios'

const createAxiosInstance = (baseURL: string, headers?: AxiosHeaders): AxiosInstance => axios.create({
    baseURL,
    headers
})

const documentLabelingBaseUrl = `http://localhost:8080/api/v1`

const paths = {
    COURSES: `${documentLabelingBaseUrl}/courses`
}

const api = {
    courses: (): AxiosInstance => createAxiosInstance(paths.COURSES)
}

export default api
