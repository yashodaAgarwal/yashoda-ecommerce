import { v4 as uuid } from "uuid";
// import {ButterScotch , Chocolate , RedVelvet , Vanilla} from "../../assets";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Chocolate",
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1989&q=80',
    alt:"Chocolate"
  },
  {
    _id: uuid(),
    categoryName: "Vanilla",
    image: "https://images.unsplash.com/photo-1568051243857-068aa3ea934d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    alt:"Vanilla"
  },
  {
    _id: uuid(),
    categoryName: "Red Velvet",
    image : "https://images.unsplash.com/photo-1635117492718-695a17a5977a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    alt:"Red Velvet"
  },
  {
    _id: uuid(),
    categoryName: "Butterscotch",
    image : "https://media.istockphoto.com/photos/butterscotch-cake-picture-id1265436356?b=1&k=20&m=1265436356&s=170667a&w=0&h=9_vndWCfpRh9ccY_dprZ7c6-KhlmqXFKNdZADYFrgkw=",
    alt: "Butter Scotch"
  },
];
