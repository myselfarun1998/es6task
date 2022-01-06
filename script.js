let employee = [
  {
    name: "john doe",
    phone: 93636691,
    empid: 001,
    designation: "developer",
    skills: ["java", "javascript", "react native", "flutter"],
    address: {
      place: "chennai",
      pincode: 626012,
    },
  },
  {
    name: "letto mark",
    phone: 93636491,
    empid: 002,
    designation: "developer",
    skills: ["java", "javascript", "react native", "flutter"],
    address: {
      place: "chennai",
      pincode: 626012,
    },
  },
  {
    name: "rose",
    phone: 93636691,
    empid: 003,
    designation: "developer",
    skills: ["java", "javascript", "react native", "flutter"],
    address: {
      place: "bangalore",
      pincode: 626012,
    },
  },
];
//
// };

// findIndexOf
console.log(
  " ---------------------------------findIndexOf-----------------------------------"
);
console.log(employee);
const myemp = employee.findIndex((emp) => emp.empid == 003);
console.log(`the find the index is   ${myemp}`); //template literals
console.log(
  " ---------------------------------firstIndexOf-----------------------------------"
);
// firstIndexOf

let arr = ["ram", "ravi", "seethu", "mani"];
const index1 = arr.indexOf("mani");
// lastIndexOf
const index2 = arr.lastIndexOf("ravi");
console.log(`the first index is   ${index1}`); //template literals
console.log(`the last index is   ${index2}`); //template literals
console.log(
  " ---------------------------------class & constructorf-----------------------------------"
);
// ---------------------------------class & constructor-----------------------------------
class MyempSalary {
  //class
  constructor(salary, esi, pfAmt) {
    this.salary1 = salary;
    this.esi = esi;
    this.pfAmt = pfAmt;
  } // consructor
}
const john = new MyempSalary("20000", "1000", "400");
let mark = new MyempSalary("19000", "1000", "400");
let rose = new MyempSalary("25000", "1000", "400");
console.log(john);
console.log(mark);
console.log(rose);
console.log(
  " ---------------------------------promises-----------------------------------"
);

// ---------------------------------promises-----------------------------------
console.log(
  " ---------------------------------   class/super/constructor   -----------------------------------"
);
class NewSalary extends MyempSalary {
  constructor(medicalInsuramce, emp_salary, emp_esi, emp_pfAmt) {
    super(emp_salary, emp_esi, emp_pfAmt); // super class
    this.medInsurance = medicalInsuramce;
  }
}

const NewSalary1 = new NewSalary("200", "20000", "500", "900");
console.log(NewSalary1);
// //  Empsal();

console.log(
  " ---------------------------------promises-----------------------------------"
);
// ---------------------------------promises-----------------------------------
// resolve
// waiting
// rejected

let promises = new Promise(function (resolve, rejected) {
  resolve("data retrived succesfully");
  rejected("oops!! error occured");
});

// promises.then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.log(error);
// })
console.log(
  " ---------------------------------   async/wait  -----------------------------------"
);
// ---------------------------------async/wait-----------------------------------

const getdata = async () => {
  try {
    const data = await promises;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
getdata();
console.log(" ---------------------------------   map/sort/filer/reduce   -----------------------------------")
// ---------------------------------map/sort/filer/reduce-----------------------------------

let emp_salary1 = [
  {
    name1: "ravi",
    id1: "001",
    salary1: 15000,
  },
  {
    name1: "ravi",
    id1: "002",
    salary1: 20000,
  },
  {
    name1: "ravi",
    id1: "003",
    salary1: 350000,
  },
];

let emp_salary2 = [20000, 30000, 20000]; ///salary

console.log(emp_salary2);

let sal1 = emp_salary2.reduce((prev, current) => {
  return prev + current;
});

console.log("i have invested " + sal1 + "for my employees");

let grossSalary = emp_salary1.map((sal) => {
  return sal.salary1 - 2000 - 800;
});
console.log(
  " Pf is 2000 and ESI is 800 remaining your monthly gross salary is " +
    "  " +
    grossSalary
);

let higherSalary = emp_salary1.filter((sal) => {
  return sal.salary1 > 17000;
});
console.log(higherSalary);

let sortSalary = emp_salary1.sort((sal) => {
  return sal.salary1;
});
console.log(sortSalary);
console.log(" ---------------------------------   spraed/rest/destructure  -----------------------------------");
// ---------------------------------spraed/rest/destructure-----------------------------------

let newSpread = [...emp_salary2, 90000];
console.log(newSpread + "am spread operator");

const newRest = (...rest) => {
  return rest.filter((el) => el == 20);
};
console.log("am rest operator " + newRest(20, 40, 80, 20, 30));

let destructure = [1, 2, 3, 4, 5];
let [one, two, ...rest] = destructure;
console.log(one);
console.log(rest);
console.log(" ---------------------------------  getter and setter   -----------------------------------");
// --------------------------------- getter and setter -----------------------------------
let empName = {
  firstName: "siva",
  lastName: "kumar",
  get fullname() {
    return `${empName.firstName} ${empName.lastName}`;
  },
  set newfullName(name) {
    let name1 = name.split(" ");
    this.firstName = name1[0];
    this.lastName = name1[1];
  },
};

let ourname = (empName.newfullName = "ravi shasthiri");
console.log(ourname);

// ---------------------------------use Strict-----------------------------------
console.log(" ---------------------------------  use Strict   -----------------------------------");
function fun() {
  "use strict";
  let c = 10 + 2;
  return c;
}
console.log(fun());

console.log(` ---------------------------------  task
From abov code snippet,get the value of c and use array destructuring 
and assign it to seperate variable and print them  -----------------------------------`);


function add2(a, b, ...c) {
  return c;
}
const [a, b, c, d, e] = add2(1, 2, 3, 4, 4, 55, 66);

console.log('a:', a);
console.log('b:', b);
console.log('c:', c);
console.log('d:', d);
console.log('e:', e);
