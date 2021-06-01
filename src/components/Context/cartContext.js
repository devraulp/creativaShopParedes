import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [cartQuantity, setCartQuantity] = useState(0)

    const addToCart = (item, quantity) => {
        const itemBuy = ([...cart])
        const findItem = isInCart(item);
        if (findItem) {
            itemBuy[itemBuy.findIndex(prod => prod.id === item.id)].quantity += quantity;
            setCart(itemBuy);
            return;
        }
        item.quantity = quantity;
        itemBuy.push(item);
        setCart(itemBuy);
    }

    const isInCart = item => cart.find(product => product.id === item.id)

    const totalPrice = () => {
        let totalPrice = cart.reduce((acc, cv) => (acc += cv.price * cv.quantity), 0)
        return totalPrice
    } 


    const removeFromCart = (itemId, itemQuantity) => {
        const newQuantity = cartQuantity - itemQuantity
        setCartQuantity(newQuantity)
        const newCart = cart.filter(item => item.id !== itemId)
        setCart(newCart)
    }

    const emptyCart = () => {setCart([])}

    useEffect(() => {
        setQuantity(cart.length)
    }, [cart]
    )

    function shopToCart(shopQuantity) {
        setCartQuantity(shopQuantity)
        let shopAdd = cartQuantity + shopQuantity
        setCartQuantity(shopAdd)
    }    

    return (
        <CartContext.Provider value={{ quantity, cart, addToCart, removeFromCart, cartQuantity, shopToCart, totalPrice, emptyCart}}>
            {children}
        </CartContext.Provider>
    )
}