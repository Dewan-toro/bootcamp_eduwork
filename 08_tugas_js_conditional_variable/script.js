const calonPresidents = [
  {
    no: 1,
    nama: "H. ANIES RASYID BASWEDAN, PH.D",
    umur: 54,
    ttl: {
      tempat: "Kuningan",
      tgl: "7 Mei 1969",
    },
  },
  {
    no: 2,
    nama: "H. PRABOWO SUBIANTO",
    umur: 72,
    ttl: {
      tempat: "Jakarta",
      tgl: "17 Oktober 1951",
    },
  },
  {
    no: 3,
    nama: "H. GANJAR PRANOWO, S,H. M,LPe",
    umur: 55,
    ttl: {
      tempat: "Karanganyar",
      tgl: "28 Oktober 1968",
    },
  },
];

// Conditional Variable dengan operator ternary
const statusUsia = calonPresidents[0].umur > 60 ? "Lansia" : "Muda/Tengah";
console.log(`${calonPresidents[0].nama} memiliki status usia: ${statusUsia}`);

// Conditional Variable dengan operator and
const statusUsiaAnd = calonPresidents[1].umur > 60 && "Lansia";
console.log(
  `${calonPresidents[1].nama} memiliki status usia: ${statusUsiaAnd}`
);

// Conditional Variable dengan operator or
const statusUsiaOr = calonPresidents[2].umur > 60 || "Sat-set";
console.log(`${calonPresidents[2].nama} memiliki status usia: ${statusUsiaOr}`);

// Manipulasi data dengan map
const namaCapres = calonPresidents.map((capres) => capres.nama);
console.log(namaCapres);

// Manipulasi data dengan filter
const capresMuda = calonPresidents.filter((capres) => capres.umur < 60);
console.log(capresMuda);
