import './App.css';

function Header(props) {
  return(
    <header>
      <h1>{props.name} on the Web</h1>
    </header>
  )
}

function Main(props) {
  return(
    <section>
      <p>{props.listen}</p>
    </section>
  )
}

function Footer(props) {
  return(
    <footer>
      <p>Copyright {props.date}</p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header name="Sounds"></Header>
      <Main listen="Listen Live"/>
      <Footer date={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
