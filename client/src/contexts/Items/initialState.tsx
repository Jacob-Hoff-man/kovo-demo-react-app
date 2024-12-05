import { Item } from '@types-kovo/item'
import { ItemsState } from './types'

const initItem: Item = {
    id: "id-1",
    name: "seed-item",
    description: "seed-desc",
    price: 100
}

export const initialState: ItemsState = {
    items: [initItem],
    filteredItems: [initItem]
}