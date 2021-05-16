import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ( {children} ) => {

    
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeFromCart = (itemId) => {
        const newCart = cart.filter(item => item.id !== itemId)
        setCart(newCart)
    }

    useEffect(() => {
        setQuantity(cart.length)
    }, [cart]
    )
    console.log(quantity);

    

    return (
        <CartContext.Provider value={{quantity , cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}