import { QueryFunction, useQuery } from 'react-query'
import { Course } from '@types-kovo/course'
import { courseQueries, courseQueryKeys } from '@queries/course'

export const useGetCourses = (
    query: QueryFunction<Course[], any> = courseQueries.getCourses
) => {
    return useQuery(courseQueryKeys.getCourses({}), query, {})
}