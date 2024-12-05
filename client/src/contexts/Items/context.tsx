import { createContext, useContext } from 'react'
import { ItemsActions, ItemsState } from './types'

export const ItemsContext = createContext<ItemsState>({} as ItemsState)
export const ItemsActionsContext = createContext<ItemsActions>({} as ItemsActions)

export const useItemsContext = () => useContext(ItemsContext)
export const useItemsActionsContext = () => useContext(ItemsActionsContext)