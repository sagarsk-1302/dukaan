import { CategoryContext } from "../../components/category.context/category.context"
import CategoryPreview from "../../components/category-preview.component/category-preview.component"
import { Fragment, useContext } from "react"

const CategoriesPreview = ()=>{
    const { categoryMap } = useContext(CategoryContext)
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