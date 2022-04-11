import { CATEGORY_TYPES } from "./category-types";
import { createAction } from "../../utils/reducer.utils/reducer.utils";

export const setCategoryMap = (data) =>{
    return createAction(CATEGORY_TYPES.SET_CATEGORY_MAP,data)
}