let person = { name: "Pursalane", age: 11, gender: "Female" };

for (let propertyName in person) {
  console.log(propertyName + " = " + person[propertyName]);
}

// console.log(person.name);
// console.log(person.age);

// console.log(person["name"]);
// console.log(person["age"]);

//you loop through arrays using for of
//you loop through an object using for in