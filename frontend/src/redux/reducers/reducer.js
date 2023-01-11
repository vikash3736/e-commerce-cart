const INIT_STATE = {
    carts : []
};

export const cartReducer = (state=INIT_STATE,action) => {
    switch(action.type){
        case "ADD_TO_CART" :

        const IndexItem = state.carts.findIndex((item)=> item.id === action.payload.id);

        if(IndexItem >= 0){
            state.carts[IndexItem].qnty += 1;
        }
        else{
            const temp = {...action.payload,qnty:1};
            return{
                ...state,
                carts:[...state.carts,temp]
            }
        }

        case "REMOVE_FROM_CART" :
            const data = state.carts.filter((ele)=> ele.id !== action.payload)

            return{
                ...state,
                carts:data
            }

        case "DECREASE_CART" :
        const DecItem = state.carts.findIndex((item)=> item.id === action.payload.id);

        if(state.carts[DecItem].qnty >= 1){
            const rmvitems = state.carts[DecItem].qnty -= 1;
            console.log([...state.carts,rmvitems]);

            return{
                ...state,
                carts:[...state.carts]
            }
        }
        else if(state.carts[DecItem].qnty === 1){
            const data = state.carts.filter((ele)=> ele.id !== action.payload)

            return{
                ...state,
                carts:data
            }
        }

        default:
            return state
    }
}