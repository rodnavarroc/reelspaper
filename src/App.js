import './App.css';
import Item from './Item';

function App() {
  return (
    <div className="App">
      <main>

        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <span className="navbar-brand">📰 &nbsp;Reelspaper</span>
            <span className="float-right btnMenu btn btn-outline-dark btn-sm"><a style={{ textDecoration: "none", color: "inherit" }} href="https://buymeacoffee.com/rodnavarroc" target="_blank" rel="noreferrer">Support 🎉</a></span>
          </div>
        </nav>

        <div className="containerx" id="mainC">

         <Item />

        </div>

      </main>

      <footer className="fixed-bottom bg-dark text-light p-1"><center>Made with 💖 by @rodnavarroc</center></footer>
    </div>
  );
}

export default App;
