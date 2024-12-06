import CoursesList from '@components/courses/CoursesList'
import CoursesProvider from '@contexts/Courses/provider'
import { ReactElement } from 'react'

const CoursesPage = (): ReactElement => {
    return (
        <CoursesProvider>
            <CoursesList />
        </CoursesProvider>
    )
}

export default CoursesPage