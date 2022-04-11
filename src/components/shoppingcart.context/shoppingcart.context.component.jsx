import { createContext, useReducer } from "react"

export const ShoppingCartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { }
})

export const DEFAULT_CART_TYPES = {
    ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
    TOGGLE_IS_CART_OPEN: "TOGGLE_IS_CART_OPEN",
    INCREMENT_CART_ITEM: "INCREMENT_CART_ITEM",
    DECREMENT_CART_ITEM: "DECREMENT_CART_ITEM",
    DELETE_CART_ITEM: "DELETE_CART_ITEM"
}
const INITIAL_VALUES = {
    isCartOpen: false,
    cartItems: [],
}
const cartReducer = (state, action) => {
    const { type, payload } = action
    let cartItems ={}
    switch (type) {
        case DEFAULT_CART_TYPES.ADD_ITEM_TO_CART:
            cartItems = addCartItem(state.cartItems, payload)
            return {
                ...state, cartItems
            }
        case DEFAULT_CART_TYPES.DELETE_CART_ITEM:
            cartItems=  deleteItem(state.cartItems, payload)
            return {
                ...state, cartItems
            }
        case DEFAULT_CART_TYPES.INCREMENT_CART_ITEM:
            cartItems= addCartItem(state.cartItems, payload);
            return {
                ...state, cartItems
            }
        case DEFAULT_CART_TYPES.DECREMENT_CART_ITEM:
            cartItems= decrementCartItem(state.cartItems, payload)
            return {
                ...state, cartItems
            }
        case DEFAULT_CART_TYPES.TOGGLE_IS_CART_OPEN:
            return {
                ...state, isCartOpen:payload
            }
    }
}

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id)
    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem)
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

const decrementCartItem = (cartItems, productItem) => {
    return cartItems.map(cartItem => cartItem.id === productItem.id ? { ...cartItem, quantity: (cartItem.quantity - 1) }
        : cartItem)
}

const deleteItem = (cartItems, productItem) => {
    return cartItems.filter(cartItem => cartItem.id !== productItem.id)
}

export const ShoppingCartProvider = ({ children }) => {
    // const [isCartOpen, setIsCartOpen] = useState(false)
    // const [cartItems, setCartItems] = useState([])

    const [state, dispatcher] = useReducer(cartReducer, INITIAL_VALUES)
    const {isCartOpen, cartItems} = state
    const addItemToCart = (productItem) => {
        // setCartItems(addCartItem(cartItems,productItem));
        dispatcher({ type: DEFAULT_CART_TYPES.ADD_ITEM_TO_CART, payload: productItem })
    }

    const incrementQuantity = (productItem) => {
        // setCartItems(addCartItem(cartItems, productItem));
        dispatcher({ type: DEFAULT_CART_TYPES.INCREMENT_CART_ITEM, payload: productItem })
    }

    const decrementQuantity = (productItem) => {
        // setCartItems(decrementCartItem(cartItems, productItem))
        dispatcher({ type: DEFAULT_CART_TYPES.DECREMENT_CART_ITEM, payload: productItem })
    }

    const removeItem = (productItem) => {
        // setCartItems(deleteItem(cartItems, productItem))
        dispatcher({ type: DEFAULT_CART_TYPES.DELETE_CART_ITEM, payload: productItem })
    }

    const setIsCartOpen = (value)=>{
        dispatcher({type:DEFAULT_CART_TYPES.TOGGLE_IS_CART_OPEN, payload:value})
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, incrementQuantity, decrementQuantity, removeItem };
    return (
        <ShoppingCartContext.Provider value={value}>{children}</ShoppingCartContext.Provider>
    )
}