import ItemsList from '@components/items/ItemsList'
import ItemsProvider from '@contexts/Items/provider'
import { ReactElement } from 'react'

const ItemsPage = (): ReactElement => {
    return (
        <ItemsProvider>
            <ItemsList />
        </ItemsProvider>
    )
}

export default ItemsPage