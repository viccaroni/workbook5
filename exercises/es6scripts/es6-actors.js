let academyMembers = [
  {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"],
  },
  {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"],
  },
  {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"],
  },
  {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"],
  },
];

// Who is the Academy Member whose ID is 187?
const memberId = academyMembers.find((m) => m.memID == 187);
console.log("Who is the Academy Member whose ID is 187?");
console.log(memberId);
console.log("====================");

// Who has been in at least 3 films?
const filmNames = academyMembers.filter((m) => m.films.length >= 3);
console.log(" Who has been in at least 3 films?");
console.log(filmNames);
console.log("====================");

// Who has a name that starts with "Bob"?
const namesThatStartWithBob = academyMembers.filter((n) =>
  n.name.startsWith("Bob")
);
console.log('Who has a name that starts with "Bob"?');
console.log(namesThatStartWithBob);
console.log("====================");

// HARDER: Which Academy Members have been in a film
// that starts with "A"
const members = academyMembers.filter((m) =>
  m.films.find((f) => f.toLowerCase().startsWith("a"))
);
console.log(
  'HARDER: Which Academy Members have been in a film that starts with "A"'
);
console.log(members);
