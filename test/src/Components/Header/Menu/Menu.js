import './style.css';

const Menu = ({link1, link2, link3, link4}) => {
  return (
    <nav>
    <span className="app-logo">Logo</span>
    <ul className="app-menu">
      <a className="app-link" href="https://reactjs.org"> {link1} </a>
      <a className="app-link" href="https://reactjs.org"> {link2} </a>
      <a className="app-link" href="https://reactjs.org"> {link3} </a>
      <a className="app-link" href="https://reactjs.org"> {link4} </a>
    </ul >
  </nav>
  )
}

export default Menu;
