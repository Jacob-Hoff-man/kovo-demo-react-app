import { useCoursesContext, useCoursesActionsContext } from '@contexts/Courses/context'
import { useGetCourses } from '@hooks/course/useGetCourses'
import { useEffect } from 'react'

const CoursesList = () => {
    const { courses } = useCoursesContext()
    const { setCourses } = useCoursesActionsContext()

    const { isLoading, data } = useGetCourses()

    useEffect(() => setCourses(data ?? []), [data, setCourses])

    return (
        <div>
            <p>CoursesList</p>
            {
                !isLoading && <ul>
                    {
                        courses.map((course) => <li key={course.id}>
                            <p>{course.name}{' - '}{course.id}</p>
                            <p>description: {course.description}</p>
                            <p>created date: {course.createdDate}</p>
                            <p>modified date: {course.lastModifiedDate}</p>
                        </li>
                        )
                    }
                </ul>
            }
        </div>
    )
}

export default CoursesList