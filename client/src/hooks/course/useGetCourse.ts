import { QueryFunction, useQuery } from 'react-query'
import { Course } from '@types-kovo/course'
import { courseQueries, courseQueryKeys } from '@queries/course'

export const useGetCourse = (
    courseId: string,
    query: QueryFunction<Course, any> = courseQueries.getCourse
) => {
    return useQuery(courseQueryKeys.getCourse({ courseId }), query, {
        enabled: !!courseId
    })
}