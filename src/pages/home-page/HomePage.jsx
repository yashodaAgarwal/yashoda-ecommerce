import React, { useEffect } from "react";
import axios from "axios";
import { Imagecard, Navigation } from "../../components";
import "./home-page.css";
import { Link } from "react-router-dom";
import { useServer,useFilter } from "../../context";

export default function HomePage() {
  const { state, dispatch } = useServer();
  const {
    FilterDispatch,
  } = useFilter();
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        dispatch({ type: "savedata", payload: response.data.categories });
      } catch (error) {
        console.log(error, "Could not load data");
      }
    })();
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      {/* <div>
        <Link to="/product"><img onClick={() => {
                  FilterDispatch({ type: "Clear_Filter" });
                }}
          className="template"
          alt="template"
          src="https://assets.winni.in/sf-img/live/visuals/home/desktop/2022/4/1649652860648.jpeg"
          
        /></Link>
      </div> */}
      <h1 className="center category-title">Shop By Category</h1>
      <section>
        <ul className="flex no-bullet-list flex-wrap">
          {state.categorydata.map((category) => (
            <li key={category.id}>
              <Imagecard category={{ category }} />
            </li>
          ))}
        </ul>
      </section>
      <div className="body-cart">
        <div className="body-cart-container flex">
          <div className="">
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt10prodlp/products/p-choc-o-nuts-deluxe-hamper-122930-m.jpg"
              className="body-cart-image"
              alt="Cake"
            />
          </div>
          <div className="body-cart-description">
            <h4 className="body-cart-heading">HIM</h4>
            <p className="para-description">
              Gifts for him to make him feel special
            </p>
            <div className="btn-class">
            <Link to="/product"><button className="btn-round-1 " onClick={() => {
                  FilterDispatch({ type: "Clear_Filter" });
                }}>Click here</button></Link>
            </div>
          </div>
        </div>
        <div className="body-cart-container flex">
          <div className="body-cart-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbdubFRl1Drxxi0kmq2yGLLaq980iAvfYh9QgLY0fWCOECz0YSynTIkgKjTVT4zQbZTCA&usqp=CAU"
              className="body-cart-image"
              alt="Cake"
            />
          </div>
          <div className="body-cart-description">
            <h4 className="body-cart-heading">HER</h4>
            <p className="para-description"> 
              Gifts for HER that works like a charm
            </p>
            <div className="btn-class">
            <Link to="/product"><button className="btn-round-1" onClick={() => {
                  FilterDispatch({ type: "Clear_Filter" });
                }}>Click Here</button></Link>  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}