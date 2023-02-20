import style from "./App.module.scss";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/menu";

function App() {
  return (
    <div className={style.App}>
      <Header />
      <Menu />
    </div>
  );
}

export default App;
