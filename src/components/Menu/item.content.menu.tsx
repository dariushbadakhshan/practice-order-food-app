import { FC } from "react";

import classes from "./item.content.menu.module.scss";
import Image from "./UI/image-item.menu";

type props = {
  title: string;
  description: string;
  price: number;
  url: string;
};

const MenuContent: FC<props> = ({ url, title, description, price }) => {
  return (
    <div className={classes.content}>
      <Image url={url} />
      <h2>{title} </h2>
      <p>{description} </p>
      <h3>{price}</h3>
    </div>
  );
};
export default MenuContent;
