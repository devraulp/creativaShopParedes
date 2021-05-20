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
            itemBuy[itemBuy.findIndex(prod => prod.id === item.id)].quantity += quantity; //o .quantity++
            setCart(itemBuy);
            return;
        }
        item.quantity = quantity;
        itemBuy.push(item);
        setCart(itemBuy);
    }

    const isInCart = item => cart.find(product => product.id === item.id)


    const removeFromCart = (itemId, itemQuantity) => {
        const newQuantity = cartQuantity - itemQuantity
        setCartQuantity(newQuantity)
        const newCart = cart.filter(item => item.id !== itemId)
        setCart(newCart)
        console.log(newQuantity);
    }

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
        <CartContext.Provider value={{ quantity, cart, addToCart, removeFromCart, cartQuantity, shopToCart }}>
            {children}
        </CartContext.Provider>
    )
}


// export default function Cart() {
//     const [cart, setCart] = useState([]);
//     const addToCart = (item, quantity) => {
//         const newCart = [...cart]
//         //Verificar si existe en el carrito
//         const findItem = isInCart(item);
//         //Si existe en el carrito
//         if(findItem) {
//             newCart[newCart.findIndex(prod => prod.id === item.id)].quantity += quantity; //o .quantity++
//             setCart(newCart);
//             return;
//         }
//         //Si no esta en el carrito
//         item.quantity = quantity;
//         newCart.push(item);
//         setCart(newCart);
//     }
//     const isInCart = item => cart.find(product => product.id === item.id)
    // useEffect(()=> {
    //   console.log(cart)
    // }, [cart])
    // return (
    //     <div>Render del carrito</div>
    // )
// }