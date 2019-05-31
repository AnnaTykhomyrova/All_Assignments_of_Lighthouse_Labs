var students = [{
    id: 1,
    name: "bruce",
    age: 40
  },
  {
    id: 2,
    name: "zoidberg",
    age: 22
  },
  {
    id: 3,
    name: "alex",
    age: 22
  },
  {
    id: 4,
    name: "alex",
    age: 30
  },
];

// console.log(students);
students.sort((objA, objB) => {
  if (objA.name === objB.name){
    return  (objA.age < objB.age);
  } else {
    return (objA.name > objB.name);
  }

});

console.log(students);