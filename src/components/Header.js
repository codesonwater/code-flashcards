import { useNavigate } from "react-router-dom";


function Header() {

    return (
    <header className="header">
      <button className="headerLogo"> {"{  codeCards  }"} </button>
      <button className="loginNavBtn"> Login </button>
    </header>
  );
}

export default Header