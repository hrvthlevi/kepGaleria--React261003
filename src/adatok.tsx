export interface KepAdat {
  src: string;
  alt: string;
  nev: string;
  latinNev: string;
  leiras: string;
}

//AI írta hozzá az adatokat!
export const adatLista: KepAdat[] = [
  {
    src: "./kepek/virag_1.jpeg",
    alt: "Gyöngyvirág narancsvörös termései egy szár végén",
    nev: "Gyöngyvirág termése",
    latinNev: "Convallaria majalis",
    leiras:
      "A gyöngyvirág tavasszal illatos, fehér harang alakú virágokat hoz, nyár végére pedig ezekből narancsvörös bogyók fejlődnek. A növény minden része mérgező, a bogyók különösen veszélyesek a gyerekekre.",
  },
  {
    src: "./kepek/virag_2.jpeg",
    alt: "Sárga gyújtoványfű virága közelről",
    nev: "Gyújtoványfű virága",
    latinNev: "Linaria vulgaris",
    leiras:
      "A közönséges gyújtoványfű virága kétajkú, halványsárga, a közepén narancssárga dudorral. Útszéleken, árkok mentén és parlagon is gyakran találkozni vele.",
  },
  {
    src: "./kepek/virag_3.jpeg",
    alt: "Sárga gyújtoványfű virágzata",
    nev: "Gyújtoványfű virágzata",
    latinNev: "Linaria vulgaris",
    leiras:
      "A gyújtoványfű vékony, keskeny levelű szárának végén hosszú fürtben nyílnak a sárga virágok. Nyár elejétől késő őszig virágzik, a méhek és poszméhek kedvelik.",
  },
  {
    src: "./kepek/virag_4.jpeg",
    alt: "Lila liliomszerű virág hosszú porzókkal",
    nev: "Lila liliomfélék virága", // nem találtam mi ez pontosan :(
    latinNev: "—",
    leiras:
      "Lilás szirmú, liliomszerű virág, hosszan kiálló porzókkal. Árnyékos, nedvesebb helyeken, kertekben gyakran ültetett díszvirág.",
  },
];