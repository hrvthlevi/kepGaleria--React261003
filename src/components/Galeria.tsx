import { useGaleriaContext } from "../contexts/GaleriaContext";
import { KisKep } from "./KisKep";
import "./galeria.css";

export function Galeria() {
  //a listát a contextből kapjuk
  const { adatLista } = useGaleriaContext();
  return (
    <div className="galeria">
      {/* vegigmegyunk az adatokon es minden elemhez legeneralunk egy kiskep komponenst  */}
      {adatLista.map((elem, index) => (
        <KisKep key={index} adat={elem} index={index} />
      ))}
    </div>
  );
}
