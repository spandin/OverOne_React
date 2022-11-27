import './App.css';

// 1. В компоненте App (в файле App.js) создайте меня (шапку сайта). Можете скопировать эту вёрстку из проекта, 
// который создался после модуля CSS, или же создать меню заново, в котором будет присутствовать несколько ссылок.

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <nav>
          <span className="app-logo">Logo</span>
          <ul className="app-menu">
            <a className="app-link" href="https://reactjs.org"> Learn React </a>
            <a className="app-link" href="https://reactjs.org"> Learn React </a>
            <a className="app-link" href="https://reactjs.org"> Learn React </a>
            <a className="app-link" href="https://reactjs.org"> Learn React </a>
          </ul >
        </nav>
      </header>
    </div>
  );
}

export default App;
