import { ReactNode, useMemo, useReducer } from 'react'
import { getCoursesActions } from './actions'
import { CoursesActionsContext, CoursesContext } from './context'
import { initialState } from './initialState'
import { coursesStateReducer } from './reducer'

type CoursesProviderProps = {
    children: ReactNode
}

const CoursesProvider = ({ children }: CoursesProviderProps) => {
    const [coursesState, dispatch] = useReducer(coursesStateReducer, {
        ...initialState,
    })
    const CoursesActions = useMemo(() => getCoursesActions(dispatch), [])

    return (
        <CoursesContext.Provider value={coursesState}>
            <CoursesActionsContext.Provider value={CoursesActions}>{children}</CoursesActionsContext.Provider>
        </CoursesContext.Provider>
    )
}

export default CoursesProvider