/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((el) => {
    if(el.profession == 'developer')
    console.log(el)
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((el) => {
    if(el.profession == 'developer')
    console.log(el)
  })
}

function addData() {
  //Write your code here, just console.log
  let newEmployee = {
    id:4,
    name:"susan",
    age:"20",
    profession:"intern"
  };
  arr.push(newEmployee);
  arr.forEach((el) => console.log(el));
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.forEach((el, index) => {
    if(el.profession == 'admin') {
      arr.splice(index,1);
    }
  })
  arr.forEach((el) => console.log(el));
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    {id:5, name:'Harry', age:'21', profession: 'developer'},
    {id:6, name:'Rone', age:'20', profession: 'intern'},
    {id:7, name:'Harmaini', age:'19', profession: 'developer'},
  ]

  const concatinatedArr = arr.concat(newArr);
  concatinatedArr.forEach((el) => console.log(el));
}
