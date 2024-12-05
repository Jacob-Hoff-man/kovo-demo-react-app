import { createContext, useContext } from 'react'
import { ItemsActions, ItemsState } from './types'

export const ItemsContext = createContext<ItemsState | null>(null)
export const ItemsActionsContext = createContext<ItemsActions | null>(null)

export const useItemsContext = () => useContext(ItemsContext)
export const useItemsActionsContext = () => useContext(ItemsActionsContext)