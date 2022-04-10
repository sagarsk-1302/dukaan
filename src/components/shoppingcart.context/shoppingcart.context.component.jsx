import { createContext, useState } from "react"

export const ShoppingCartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { }
})

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)
    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem)
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const decrementCartItem = (cartItems,productItem)=>{
    return cartItems.map(cartItem => cartItem.id===productItem.id? {...cartItem,quantity:(cartItem.quantity-1)}
    :cartItem)
}

const deleteItem= (cartItems, productItem) =>{
    return cartItems.filter(cartItem=> cartItem.id!==productItem.id)
}

export const ShoppingCartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const addItemToCart = (productItem)=>{
        setCartItems(addCartItem(cartItems,productItem));
    }
    const incrementQuantity = (productItem)=>{
        setCartItems(addCartItem(cartItems,productItem));
    }
    const decrementQuantity = (productItem)=>{
        setCartItems(decrementCartItem(cartItems,productItem))
    }
    const removeItem = (productItem)=>{
        setCartItems(deleteItem(cartItems,productItem))
    }
    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, incrementQuantity, decrementQuantity, removeItem  };
    return (
        <ShoppingCartContext.Provider value={value}>{children}</ShoppingCartContext.Provider>
    )
}