import './App.css';
import concert from "./concert.png";

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
      <img src={concert} height={350} alt="Music performed at concert" />
      <ul style={{ textAlign: "left"}}>
        {props.musicArray.map((music) => (
          <li key={music.id}>{music.title}</li>
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

const musicObjs = musicArray.map((music, i) => ({ id: i, title: music}));

function App() {
  return (
    <div className="App">
      <Header name="Sounds"></Header>
      <Main listen="Music Genres" musicArray={musicObjs}/>
      <Footer date={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
