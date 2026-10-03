import { useState } from "react";
import { adatLista } from "./adatok";
import { Galeria } from "./components/Galeria";
import { NagyKep } from "./components/NagyKep";
import "./App.css";

function App() {
  //useState tarolja az allapotot, 0-rol indulunk (elso kep indexe)
  const [KepIndex, setKepIndex] = useState(0);

  //leptetes elore, ha az utolso kepen vagyunk, elejere ugrik, kulonben hozzaad egyet
/*   const leptetesJobbra = () => {
    setKepIndex((aktualis) =>
      aktualis === adatLista.length - 1 ? 0 : aktualis - 1,
    );
  };
//leptetes hatra, ha a legelso kepen vagyunk, legvegere ugrik, kulonben vonjon ki egyet
  const leptetesBalra = () => {
    setKepIndex((aktualis) =>
      aktualis === 0 ? adatLista.length - 1 : aktualis - 1,
    );
  }; */
//HIBAJAVITAS
// A maradekos osztas (%) garantalja, hogy ha elerjük a lista veget, nullaról indul ujra
  const leptetesJobbra = () => {
    setKepIndex((aktualis) => (aktualis + 1) % adatLista.length);
  };

  // Ha az elson vagyunk (0), visszaugrik az utolsora (hossz - 1), amugy csokkenti egygyel
  const leptetesBalra = () => {
    setKepIndex((aktualis) => (aktualis === 0 ? adatLista.length - 1 : aktualis - 1));
  };
  return(
    <div className="App">
      <header className="App-header">
        <h1>Képgaléria</h1>
      </header>

      <main className="App-main">
        {/* Nagykep megkapja az aktualis 1db kepet es a ket lepteto fgv-t */}
        <NagyKep
        adat={adatLista[KepIndex]}
        onKovetkezo={leptetesJobbra}
        onElozo={leptetesBalra}
        />
        {/* kiskepek */}
        <Galeria adatLista={adatLista} onKepKattintas={setKepIndex} />
      </main>
    </div>
  )
}
export default App
