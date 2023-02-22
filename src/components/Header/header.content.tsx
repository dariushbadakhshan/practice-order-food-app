import style from "./Header.Content.module.scss";

const Content = () => {
  return (
    <div className={style.content}>
      <h1>Order Your</h1>
      <h2>Favorite Delisious Foods</h2>
      <p>
        Choose your favorite meal from our broad selection of available <br />
        meales and enjoy a delicious luch or dinner at home.
      </p>
    </div>
  );
};
export default Content;
