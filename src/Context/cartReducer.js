export const cartReducer = (state, action)=>{
    switch (action.type) {
        case  "ADD_PRODUCTS":
            return {...state, products: action.payload}
        case "ADD_TO_CART":
            return {...state, cart:[...state.cart, {...action.payload}]}
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart:state.cart.filter((c)=> c.id!== action.payload.id),
            }
        case "CHANGE_CART_QTY" :
                return {
                    ...state, 
                    cart:state.cart.filter(c=>c.id === action.payload.id?(c.quantity=action.payload.quantity):c.quantity)
                }
        default:
            return state;
    }
}


export const productReducer = (state, action)=>{
    switch (action.type) {
        case "SORT_BY_PRICE":
            return { ...state, sort: action.payload };
        case "FILTER_BY_SEARCH": 
        return {...state, searchQuery: action.payload}
        case "FILTER_BY_COLOR_RED":
            return {...state, byColorRed: action.payload}
        case "FILTER_BY_COLOR_BLUE":
            return {...state, byColorBlue: action.payload}
        case "FILTER_BY_COLOR_GREEN":
            return {...state, byColorGreen: action.payload}
        case "FILTER_BY_GENDER_MEN":
            return {...state, bygenderMen: action.payload}
        case "FILTER_BY_GENDER_WOMEN":
            return {...state, bygenderWomen: action.payload}
        case "FILTER_BY_TYPE_POLO":
            return {...state, checkTypePolo: action.payload}
        case "FILTER_BY_TYPE_HOODIE":
            return {...state, checkTypeHoodie: action.payload}
        case "FILTER_BY_TYPE_BASIC":
            return {...state, checkTypeBasic: action.payload}
    
        default:
            return state;
    }
}