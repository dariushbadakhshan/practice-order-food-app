import MenuItem from "./menu-item";

import classes from "./menu.module.scss";

const items_list = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
    img: "../../images/sushi.jpg",
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
    img: "../../images/schnitzel.jpg",
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    img: "../../images/burger.jpg",
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    img: "../../images/green-bowl.jpg",
  },
];

const Menu = () => {
  const menuItem = items_list.map((item) => (
    <MenuItem key={item.id} item={item} />
  ));

  return <div className={classes.meals}>{menuItem}</div>;
};

export default Menu;
