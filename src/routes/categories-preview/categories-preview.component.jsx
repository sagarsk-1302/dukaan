import CategoryPreview from "../../components/category-preview.component/category-preview.component"
import { Fragment} from "react"
import { useSelector } from "react-redux"
import {getCategoryMap} from "../../store/category/category-selector"

const CategoriesPreview = ()=>{
    const  categoryMap  = useSelector(getCategoryMap)
    console.log(categoryMap)
    return (
        <Fragment>
            {
                Object.keys(categoryMap).map(title => {
                    return (
                        <CategoryPreview title={title} products={categoryMap[title]} key={title}/>
                    )
                })
            }
        </Fragment>
    )
}

export default CategoriesPreview;