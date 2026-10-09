import { createContext, useContext, useState, type ReactNode } from "react";
import { adatLista, type KepAdat } from "../adatok";

/*  1. Context és Provider létrehozása
    2. Providerben használt state és függvények megadása
    3. Szülőkomponens körbeölelése a providerrel (main.tsx)
    4. Felhasználás a komponensekben a hookkal */

interface GaleriaContextValue {
  adatLista: KepAdat[];
  kepIndex: number;
  setKepIndex: (index: number) => void;
  leptetesJobbra: () => void;
  leptetesBalra: () => void;
}

export const GaleriaContext = createContext<GaleriaContextValue | undefined>(
  undefined,
);

interface GaleriaProviderProps {
  children: ReactNode;
}

export function GaleriaProvider({ children }: GaleriaProviderProps) {
  //useState tárolja az állapotot, 0-ról indulunk(első kép indexe)
  const [kepIndex, setKepIndex] = useState(0);

  //Maradékos osztás: az utolsó után újra 0-ról indul:
  function leptetesJobbra() {
    setKepIndex((aktualis) => (aktualis + 1) % adatLista.length);
  }

  //Az elsőről visszaugrik az utolsóra, amúgy csökkent eggyel:
  function leptetesBalra() {
    setKepIndex((aktualis) => (aktualis === 0 ? adatLista.length - 1 : 1));
  }
  return (
    <GaleriaContext.Provider
      value={{
        adatLista,
        kepIndex,
        setKepIndex,
        leptetesJobbra,
        leptetesBalra,
      }}
    >
      {children}
    </GaleriaContext.Provider>
  );
}

//Saját hook, ezt használjuk a komponensekben
export function useGaleriaContext() {
  const context = useContext(GaleriaContext);
  if (context === undefined) {
    throw new Error("Az app csak provideren belül használható!");
  }
  return context;
}
