import '../styles/App.scss';
import logo from '../images/Rick_and_Morty_logo.png'

function App() {
  return (
    <div className="page">
      <header className="header">
        <img src={logo} alt="Rick and Morty logo" />
      </header>
      <main className="main">
        <form action="">
          <input type="text" />
        </form>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
