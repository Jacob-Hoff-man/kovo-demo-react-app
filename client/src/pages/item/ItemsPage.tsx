import ItemsList from '@components/item/ItemsList'
import ItemsProvider from '@contexts/items/provider'
import { ReactElement } from 'react'

const ItemsPage = (): ReactElement => {
    return (
        <ItemsProvider>
            <ItemsList />
        </ItemsProvider>
    )
}

export default ItemsPage