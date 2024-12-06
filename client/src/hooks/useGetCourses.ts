import api from '../api'

export const useGetCourses = async () => {
    const res = await api.courses().get('', {})
    console.log('@', res.data)
    return res.data
}