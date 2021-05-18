import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ( {children} ) => {

    
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [cartQuantity, setCartQuantity] = useState(0)

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

    function shopToCart (shopQuantity) {
        setCartQuantity(shopQuantity)
        let shopAdd = cartQuantity + shopQuantity
        setCartQuantity(shopAdd)
    }

    

    return (
        <CartContext.Provider value={{quantity , cart, addToCart, removeFromCart, cartQuantity, shopToCart}}>
            {children}
        </CartContext.Provider>
    )
}