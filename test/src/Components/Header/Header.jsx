import './style.scss';
import {Routes, Route, Link} from 'react-router-dom'
import Cards from '../Pages/Cards/Cards'
import ProgLang from '../Pages/ProgLangs/ProgLang'

export default function Header() {
  return (
    <>
      <header className="app-header">
        <nav>
          <span className="app-logo">Logo</span>
          <ul className="app-menu">
            <Link className="app-link" to={"/cards"}> Cards </Link>
            <Link className="app-link" to={"/proglang"}> Prog. lang. </Link>
          </ul >
        </nav>
      </header>

      <Routes>
        <Route path='/cards' element={<Cards/>}/>
        <Route path='/proglang' element={<ProgLang/>}/>
      </Routes>
    </>
  );
}

