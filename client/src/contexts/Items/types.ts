import { Item } from '@types-kovo/item'

export type ItemsState = {
    items: Item[]
    filteredItems: Item[]
}

export enum ACTION {
    SET_ITEMS,
    SET_FILTERED_ITEMS_BY_NAME,
}

export type SetItemsAction = {
    type: ACTION.SET_ITEMS
    payload: {
        items: Item[]
    }
}

export type SetFilteredItemsByNameAction = {
    type: ACTION.SET_FILTERED_ITEMS_BY_NAME,
    payload: {
        name: string
    }
}

export type ItemsAction = SetItemsAction | SetFilteredItemsByNameAction

export type ItemsActions = {
    setItems: (items: Item[]) => void
    setFilteredItemsByName: (name: string) => void
}
