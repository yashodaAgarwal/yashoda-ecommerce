import "../../pages/home-page/home-page.css";
import { NavLink } from "react-router-dom";
import { useFilter } from "../../context";


const Imagecard = ({ category }) => {
  const { categoryName, image, alt } = category.category;
  const {
    FilterState: { byCategory },
    FilterDispatch,
  } = useFilter();
  return (
    <section>
      <div className="image-card">
      
        <img className="cake" src={image} alt={alt} />
        <NavLink
          to="/product"
          onClick={() =>
            FilterDispatch({ type: "CATEGORY", payload: categoryName })
          }
          checked={byCategory && byCategory === categoryName}
        >
          <p className="text">{categoryName}</p>
        </NavLink>
      </div>
    </section>
  );
};
export default Imagecard;
