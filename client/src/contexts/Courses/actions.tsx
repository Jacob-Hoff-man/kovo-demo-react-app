import { Dispatch } from 'react'
import { Course } from '@types-kovo/course'
import { ACTION, CoursesAction, CoursesActions } from './types'

export const getCoursesActions = (dispatch: Dispatch<CoursesAction>): CoursesActions => ({
    setCourses: (courses: Course[]) => {
        dispatch({
            type: ACTION.SET_COURSES,
            payload: {
                courses,
            },
        })
    },
    setFilteredCoursesByName: (name: string) => {
        dispatch({
            type: ACTION.SET_FILTERED_COURSES_BY_NAME,
            payload: {
                name,
            },
        })
    },
})