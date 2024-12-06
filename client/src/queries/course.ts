import { GetCoursesParams, GetCourseParams, Course } from '@types-kovo/course'
import { QueryKeyParams } from '@types-kovo/query'
import api from '../api'

export const courseQueryKeys = {
    getCourses: (params: GetCoursesParams) => ['courses', params],
    getCourse: (params: GetCourseParams) => ['course', params],
} as const

export const courseQueries = {
    getCourses: async ({ queryKey: [_, { }], }: QueryKeyParams<'courses', GetCoursesParams>): Promise<Course[]> => {
        const res = await api.courses().get('', {})
        return res.data
    },
    getCourse: async ({ queryKey: [_, { courseId }], }: QueryKeyParams<'course', GetCourseParams>): Promise<Course> => {
        const res = await api.courses().get(courseId, {})
        return res.data
    }
} as const
