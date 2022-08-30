import logo from "../../assets/IronLogo.png"
import style from "./style.module.css";
import menu from "../../assets/Menu.png"

function Header() {
    return (
      <div className={style.container}>
        <img src={logo} alt="logo" className={style.logo} />
        <img src={menu} alt="menu" className={style.menu} />
      </div>
    );
  }
  
  export default Header;