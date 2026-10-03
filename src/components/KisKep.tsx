import type { KepAdat } from "../adatok";

//definialjuk hogy milyen adatokat var a komponens a szulotol
interface KisKepProps {
  adat: KepAdat;
  index: number;
  onClick: (kivalasztottIndex: number) => void;
}
export function KisKep({ adat, index, onClick }: KisKepProps) {
  return (
    //amikor a div-re kattintanak meghivjuk a szulotol kapott fgv-t a sajat indexunkkel
    <div className="kiskep" onClick={() => onClick(index)}>
      <img src={adat.src} alt={adat.alt}></img>
    </div>
  );
}
