import './style.css';
import Cards from './Cards/Cards';

function Header() {
  return (
    <main>
        <h1>Карточки</h1>
        <div className="cards">
          <Cards name='Belarus' capital='Minsk' region='EU' flag='https://flagcdn.com/by.svg' lang='Ru, By' />
          <Cards name='Russia' capital='Moskow' region='EU' flag='https://flagcdn.com/ru.svg' lang='Ru' />
        </div>
    </main>
  );
}

export default Header;