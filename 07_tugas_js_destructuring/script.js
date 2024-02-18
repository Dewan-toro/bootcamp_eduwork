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

// Destructuring array
const [paslonSatu, paslonDua, paslonTiga] = calonPresidents;
console.log(paslonSatu);

// Destructuring object
const {
  no,
  nama,
  umur,
  ttl: { tgl },
} = paslonDua;
console.log(nama, umur, tgl);

// Function dengan destructuring object
function displayCapresInfo({ nama, umur }) {
  console.log(`nama: ${nama}, umur: ${umur}`);
}

displayCapresInfo(paslonTiga);

// Alias dan default value pada destructuring
const { nama: capresNama, umur: capresUmur, gender = "Male" } = paslonTiga;
console.log(capresNama);
console.log(capresUmur);
console.log(gender);
