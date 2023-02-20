import style from "./Header.Navbar.module.scss";
const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div>
        <p>Omnia Food</p>
      </div>
      <div>
        <button>Your Card</button>
      </div>
    </nav>
  );
};
export default Navbar;
