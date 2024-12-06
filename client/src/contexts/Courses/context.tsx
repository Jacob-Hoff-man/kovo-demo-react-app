import { createContext, useContext } from 'react'
import { CoursesActions, CoursesState } from './types'

export const CoursesContext = createContext<CoursesState>({} as CoursesState)
export const CoursesActionsContext = createContext<CoursesActions>({} as CoursesActions)

export const useCoursesContext = () => useContext(CoursesContext)
export const useCoursesActionsContext = () => useContext(CoursesActionsContext)