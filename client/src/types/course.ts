export type Course = {
    id: string
    name: string
    description: string
    createdDate: string
    lastModifiedDate: string
}

export type GetCoursesParams = {

}

export type GetCourseParams = {
    courseId: string
}