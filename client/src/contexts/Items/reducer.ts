import { ACTION, ItemsAction, ItemsState } from './types'

export const itemsStateReducer = (state: ItemsState, action: ItemsAction): ItemsState => {
    switch (action.type) {
        case ACTION.SET_ITEMS: {
            return {
                ...state,
                items: action.payload.items,
            }
        }
        case ACTION.SET_FILTERED_ITEMS_BY_NAME: {
            const name = action.payload.name.toLowerCase()
            const filteredItems = name.length
                ? state.items.filter((item) => item.name.toLowerCase().includes(name))
                : state.items
            return {
                ...state,
                filteredItems

            }
        }
        default: {
            return ((x: never) => x)(action)
        }
    }
}