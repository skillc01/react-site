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
      <ul style={{ textAlign: "left"}}>
        {props.musicArray.map((music, i) => (
          <li key={i}>{music}</li>
        ))}
      </ul>
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

const musicArray = [
  "Smooth Jazz",
  "Classical",
  "Heavy Metal",
  "Pop"
];

musicArray.map( (music) => console.log(music));

function App() {
  return (
    <div className="App">
      <Header name="Sounds"></Header>
      <Main listen="Listen Live" musicArray={musicArray}/>
      <Footer date={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
