import CoursesList from '@components/course/CoursesList'
import CoursesProvider from '@contexts/courses/provider'
import { ReactElement } from 'react'

const CoursesPage = (): ReactElement => {
    return (
        <CoursesProvider>
            <CoursesList />
        </CoursesProvider>
    )
}

export default CoursesPage