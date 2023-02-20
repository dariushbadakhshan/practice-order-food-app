import { FC } from "react";
import AddItem from "./add-item.menu";
import MenuContent from "./item.content.menu";

type props = {
  item: {
    id: string;
    name: string;
    description: string;
    price: number;
    img: string;
  };
};
const MenuItem: FC<props> = ({ item }) => {
  return (
    <div>
      <MenuContent
        title={item.name}
        description={item.description}
        price={item.price}
        url={item.img}
      />
      <AddItem />
    </div>
  );
};
export default MenuItem;
