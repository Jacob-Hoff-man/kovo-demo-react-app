import { Course } from '@types-kovo/course'

export type CoursesState = {
    courses: Course[]
    filteredCourses: Course[]
}

export enum ACTION {
    SET_COURSES,
    SET_FILTERED_COURSES_BY_NAME,
}

export type SetCoursesAction = {
    type: ACTION.SET_COURSES
    payload: {
        courses: Course[]
    }
}

export type SetFilteredCoursesByNameAction = {
    type: ACTION.SET_FILTERED_COURSES_BY_NAME,
    payload: {
        name: string
    }
}

export type CoursesAction = SetCoursesAction | SetFilteredCoursesByNameAction

export type CoursesActions = {
    setCourses: (courses: Course[]) => void
    setFilteredCoursesByName: (name: string) => void
}
