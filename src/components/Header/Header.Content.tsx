import style from "./Header.Content.module.scss";
import img from "../../images/gheader.png";
const Content = () => {
  return (
    <div className={style.content}>
      <div className={style.title}>
        <h1>Order Your</h1>
        <h2>Favorite Delisious Foods</h2>
        <p>
          Choose your favorite meal from our broad selection of available meales
          and enjoy a delicious luch or dinner at home.
        </p>
      </div>
      <div className={style.image}>
        <img src={img} alt="header" />
      </div>
    </div>
  );
};
export default Content;
