import { useItemsContext } from '@contexts/items/context'

const ItemsList = () => {
    const { items } = useItemsContext()

    return (
        <div>
            <p>ItemsList</p>
            <ul>
                {
                    items.map((item) => <li key={item.id}>
                        <p>{item.name}{' - '}{item.id}</p>
                        <p>description: {item.description}</p>
                        <p>price: {item.price}</p>
                    </li>
                    )
                }
            </ul>
        </div>
    )
}

export default ItemsList