import { Dispatch } from 'react'
import { Item } from '@types-kovo/item'
import { ACTION, ItemsAction, ItemsActions } from './types'

export const getItemsActions = (dispatch: Dispatch<ItemsAction>): ItemsActions => ({
    setItems: (items: Item[]) => {
        dispatch({
            type: ACTION.SET_ITEMS,
            payload: {
                items,
            },
        })
    },
    setFilteredItemsByName: (name: string) => {
        dispatch({
            type: ACTION.SET_FILTERED_ITEMS_BY_NAME,
            payload: {
                name,
            },
        })
    },
})