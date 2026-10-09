import { useGaleriaContext } from "../contexts/GaleriaContext";
import "./nagykep.css";

export function NagyKep() {
  //Az aktuális képet és a léptetőket a contextből kapjuk
  const { adatLista, kepIndex, leptetesJobbra, leptetesBalra } =
    useGaleriaContext();
  const adat = adatLista[kepIndex];
  return (
    <div className="nagyKepKontener">
      {/* bal oldali lepteto */}
      <button onClick={leptetesBalra}>Előző</button>
      {/* fokep es a hozzatartozo adatok */}
      <div className="fokep">
        <h3>{adat.alt}</h3>
        <img src={adat.src} alt={adat.alt} />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
          expedita eum pariatur deleniti repudiandae, dolorum molestias facere
          aspernatur maiores corrupti blanditiis hic obcaecati sit perferendis
          aperiam nihil mollitia veritatis laboriosam.
        </p>
      </div>
      {/* jobb oldali lepteto */}
      <button onClick={leptetesJobbra}>Következő</button>
    </div>
  );
}
