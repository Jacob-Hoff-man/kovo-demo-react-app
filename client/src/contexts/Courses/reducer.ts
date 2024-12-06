import { ACTION, CoursesAction, CoursesState } from './types'

export const coursesStateReducer = (state: CoursesState, action: CoursesAction): CoursesState => {
    switch (action.type) {
        case ACTION.SET_COURSES: {
            return {
                ...state,
                courses: action.payload.courses,
            }
        }
        case ACTION.SET_FILTERED_COURSES_BY_NAME: {
            const name = action.payload.name.toLowerCase()
            const filteredCourses = name.length
                ? state.courses.filter((course) => course.name.toLowerCase().includes(name))
                : state.courses
            return {
                ...state,
                filteredCourses

            }
        }
        default: {
            return ((x: never) => x)(action)
        }
    }
}