import './style.css';
import Menu from './Menu/Menu.js'

function Header() {
  return (
      <header className="app-header">
        <Menu link1='Learn React' link2='Learn React 2' link3='Learn React 3' link4='Learn React 4'/>
      </header>
  );
}

export default Header;
