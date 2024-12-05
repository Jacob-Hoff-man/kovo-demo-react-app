import { ReactNode, useMemo, useReducer } from 'react'
import { getItemsActions } from './actions'
import { ItemsActionsContext, ItemsContext } from './context'
import { initialState } from './initialState'
import { itemsStateReducer } from './reducer'

type ItemsProviderProps = {
    children: ReactNode
}

const ItemsProvider = ({ children }: ItemsProviderProps) => {
    const [itemsState, dispatch] = useReducer(itemsStateReducer, {
        ...initialState,
    })
    const ItemsActions = useMemo(() => getItemsActions(dispatch), [])

    return (
        <ItemsContext.Provider value={itemsState}>
            <ItemsActionsContext.Provider value={ItemsActions}>{children}</ItemsActionsContext.Provider>
        </ItemsContext.Provider>
    )
}

export default ItemsProvider