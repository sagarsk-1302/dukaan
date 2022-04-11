import { CATEGORY_TYPES } from "./category-types"
const INITIAL_VALUES ={
    categoryMap : []
}
export const categoryReducer = (state=INITIAL_VALUES,action={})=>{
    const {type,payload} = action
    switch(type){
        case CATEGORY_TYPES.SET_CATEGORY_MAP:
            return {
                categoryMap:payload
            }
        default:
            return state
    }
}