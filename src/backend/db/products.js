import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    image: "https://d3cif2hu95s88v.cloudfront.net/live-site-2016/product-image/010/1-Fathers-Day-Cake-web-600x600.jpg",
    alt: "Kitkat Gems Cake",
    name: "Kitkat Gems Cake",
    description: "A Perfect Cake created for Celebrations and Chocolate Lovers",
    price: 1800,
    originalPrice: 2400.00 ,
    discount: 25,
    latest: true,
    categoryName: "Chocolate",
    rating: 4,
  },
  {
    _id: uuid(),
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ919YawDSyksI3t3RjgNnib5nfisk-N3hPmg&usqp=CAU",
    alt: "Chocolate Truffle Cake",
    name: "Chocolate Truffle Cake",
    description: "Eggless moist chocolate sponge with silky dark chocolate ganache",
    price: 800,
    originalPrice: 1000.00 ,
    discount: 20,
    latest: true,
    categoryName: "Chocolate",
    rating: 3,
  },
  {
    _id: uuid(),
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwCCVVMQ3aSTgt7iUGlWNFAvqTrcQjygNBcJX2As2HW1ndxvSFhkeAgbonI0uWyGAGer4&usqp=CAU",
    alt: "Chocolate strawberry Cake",
    name: "Choco strawberry Cake",
    description: "Rich dark chocolate cake layers with strawberry buttercream and chocolate ganache",
    price: 900,
    originalPrice: 1800.00 ,
    discount: 50,
    latest: true,
    categoryName: "Chocolate",
    rating: 2,
  },
  {
    _id: uuid(),
    image: "https://veenaazmanov.com/wp-content/uploads/2019/09/Homemade-Vanilla-Birthday-Cake21.jpg",
    alt: "Vanilla Cake",
    name: "Vanilla Cake",
    description: "BEST Vanilla Birthday Cake with Vanilla Buttercream",
    price: 700,
    originalPrice: 1000.00 ,
    discount: 30,
    latest: true,
    categoryName: "Vanilla",
    rating: 3,
  },
  {
    _id: uuid(),
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR71ONotSaaVjC5fnhLpvmEIxViK3GdShgTwQ&usqp=CAU",
    alt: "Red Velvet Cake",
    name: "Red Velvet Cake",
    description: "This delectable, scarlet-hued cake is a classic for a reason.",
    price: 1800,
    originalPrice: 2000.00 ,
    discount: 10,
    latest: true,
    categoryName: "Red Velvet",
    rating: 4,
  },
];
