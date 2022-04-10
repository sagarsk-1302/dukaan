import './category-item.style.scss';
import { useNavigate } from 'react-router-dom';
const CategoryItem = (props)=>{
    const {imageUrl, title} = props.category;
    const navigate = useNavigate();
    const categoryRedirectHandler = ()=>{
      navigate(`shop/${title.toLowerCase()}`)
    }
    return (
        <div className="category-container" onClick={categoryRedirectHandler}>
          <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
          }}/>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
    )
}

export default CategoryItem;
