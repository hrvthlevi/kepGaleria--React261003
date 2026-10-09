# Képgaléria (React + Context)

Egyszerű képgaléria React-tel és TypeScript-tel. Egy nagy kép látszik a nevével, latin nevével és leírásával, alatta kisképek vannak. A nagy képet az Előző/Következő gombbal vagy egy kiskép kattintásával lehet váltani.

Az állapotkezelést **Context + Provider** végzi, ugyanúgy, ahogy az órán a todo feladatnál.

**Élő oldal:** https://hrvthlevi.github.io/kepGaleria--React261003/

**Készítette:** Horváth Levente Roland

---

## Technológiák

- React 19 + TypeScript
- Vite
- CSS (grid, media query)
- GitHub Actions + GitHub Pages

## Futtatás

```bash
npm install
npm run dev        # fejlesztői szerver
npm run build      # éles build (TypeScript-ellenőrzéssel)
npm run preview    # a lebuildelt oldal megnézése
```

---

## Mappaszerkezet

```
public/kepek/            a virágképek (virag_1..4.jpeg)
src/
  adatok.tsx             KepAdat típus + képek adatai
  contexts/
    GaleriaContext.tsx   context, provider, saját hook
  components/
    NagyKep.tsx          az aktuális kép + léptető gombok
    Galeria.tsx          kisképek rácsa
    KisKep.tsx           egy kiskép
  App.tsx                oldal váza
  main.tsx               itt öleljük körbe a providerrel az appot
```

---

## Hogyan működik a Context (jegyzet)

Ugyanaz a négy lépés, mint a todónál:

1. **Context és provider létrehozása** – `createContext`, `GaleriaProvider`
2. **A providerben a state és a függvények** – `kepIndex`, `setKepIndex`, `leptetesJobbra`, `leptetesBalra`
3. **A szülőkomponens körbeölelése** – `main.tsx`-ben `<GaleriaProvider><App /></GaleriaProvider>`
4. **Felhasználás a komponensekben** – a saját `useGaleriaContext()` hookkal

Ezzel megszűnt a prop drilling. Korábban az `App` tárolta az indexet, és propként adta tovább a `NagyKep`-nek és a `Galeria`-nak (azon keresztül a `KisKep`-nek). Most mindenki közvetlenül a contextből veszi, amire szüksége van.

A saját hook hibát dob, ha a provideren kívül használják:

```tsx
export function useGaleriaContext() {
  const context = useContext(GaleriaContext);
  if (context === undefined) {
    throw new Error("Az app csak provideren belül használható");
  }
  return context;
}
```

### Léptetés

A léptetésnél a körbeforgás maradékos osztással megy:

```tsx
// jobbra: az utolsó után újra az első
setKepIndex((aktualis) => (aktualis + 1) % adatLista.length);

// balra: az elsőről az utolsóra ugrik
setKepIndex((aktualis) => (aktualis === 0 ? adatLista.length - 1 : aktualis - 1));
```

---

## GitHub Pages beállítása

- `vite.config.ts`: `base: '/kepGaleria--React261003/'` (a végén **perjellel**)
- A képek a `public/kepek` mappában vannak, mert a build csak a `public` tartalmát másolja át változtatás nélkül
- A képek útvonala `import.meta.env.BASE_URL`-ből épül: `` `${ALAP}kepek/virag_1.jpeg` ``
- `.github/workflows/deploy.yml`: build és telepítés minden `main` ágra pusholt commit után
- GitHub: Settings → Pages → Source: **GitHub Actions**

---

## Amit tanultam, és amibe belefutottam

- **Közös állapotnál egyszerre kell átállni.** Az index minden komponensnek kell, ezért az `App`, a `NagyKep` és a `Galeria` átírását egy commitban csináltam meg. Külön lépésekben két párhuzamos állapot jött volna létre.
- **Elírt léptető logika.** Az Előző gomb rossz képre ugrott, mert elírtam a számolást a `leptetesBalra` függvényben.
- **A `base` záró perjele számít.** Perjel nélkül a kép útvonala `/kepGaleria--React261003kepek/...` lett, és a képek nem töltöttek be.
- **A `kepek` mappa a `public`-ba való.** A gyökérben a `dev` szerver kiszolgálná, de a `build` nem másolná át.
- **A `preview` a régi buildet mutatja.** A kódváltoztatás után előbb `npm run build`, utána `npm run preview`.
- **A `vite.config.ts` módosítása után újra kell indítani a szervert.**