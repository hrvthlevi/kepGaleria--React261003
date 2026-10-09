import type { KepAdat } from "../adatok";
import { useGaleriaContext } from "../contexts/GaleriaContext";

//definialjuk hogy milyen adatokat var a komponens a szulotol
interface KisKepProps {
  adat: KepAdat;
  index: number;
}
export function KisKep({ adat, index }: KisKepProps) {
  // a kiválasztást a contextből kapjuk
  const { kepIndex, setKepIndex } = useGaleriaContext();
  return (
    //amikor a div-re kattintanak meghivjuk a szulotol kapott fgv-t a sajat indexunkkel
    <div
      className={`kiskep ${index === kepIndex ? "aktiv" : ""}`}
      onClick={() => setKepIndex(index)}
    >
      <img src={adat.src} alt={adat.alt}></img>
    </div>
  );
}
