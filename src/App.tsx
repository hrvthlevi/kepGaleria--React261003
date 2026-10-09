import { Galeria } from "./components/Galeria";
import { NagyKep } from "./components/NagyKep";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Képgaléria</h1>
        </header>
        <main className="App-main">
          {/* a komponensektől a contextből kapják az adatokat*/}
          <NagyKep />
          <Galeria />
        </main>
      </div>
    </>
  );
}
export default App;
