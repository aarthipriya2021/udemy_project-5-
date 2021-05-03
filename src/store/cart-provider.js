import React from 'react';
import { cartContext} from './cart-context';

export const cartProvider = (props) => {

    const addItemToCartHandler = (item) => {}

    const removeItemFromCartHandler = (id) => {}
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return <cartContext.Provider value={cartContext}>
        {props.children}
        </cartContext.Provider>
}

export default cartProvider
