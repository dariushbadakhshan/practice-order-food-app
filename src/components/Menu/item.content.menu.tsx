import { FC } from "react";

import Image from "./UI/image-item.menu";

type props = {
  title: string;
  description: string;
  price: number;
  url: string;
};

const MenuContent: FC<props> = ({ url, title, description, price }) => {
  return (
    <div>
      <Image url={url} />
      <h2>{title} </h2>
      <p>{description} </p>
      <h3>{price}</h3>
    </div>
  );
};
export default MenuContent;
