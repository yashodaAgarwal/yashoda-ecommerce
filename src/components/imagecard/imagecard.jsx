import '../../pages/home-page/home-page.css'
import { NavLink } from 'react-router-dom';

const Imagecard=({ category }) =>{
  const cakecategory=category.category;
  const { categoryName, image, alt } = cakecategory;
  return (
    <section>
      <div className="image-card">   
        <img className="cake" src={image} alt={alt} />
        <NavLink to="/product"><p className='text'>{categoryName}</p></NavLink>
              
      </div>
    </section>
  );
}
export default Imagecard;
