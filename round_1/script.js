// Q 1
const arr = [2, 5, 3, 4, 7];

const newArrMap = arr.map((el) => {
  return el + 2;
});

const newArrEach = arr.forEach((el, idx) => {
  arr[idx] = el + 3;
});

// console.log("map", newArrMap);
// console.log("forEach", newArrEach);
// console.log("originalArr", arr);

// Q 2
// console.log(typeof undefined); // undefined
// console.log(typeof null); //object
// console.log(b); // b is not defined
// console.log(null == undefined); // true
// console.log(null === undefined); // false

// Q 3
document.querySelector("#products").addEventListener("click", (e) => {
  // console.log(e);
  if ((e.target.tagName = "LI")) {
    window.location.href = "#" + e.target.id;
  }
});

// Q 4
let arr1 = [
  [1, 2],
  [3, 5],
  [5, [6, 7], 9],
  [10, 11, 12],
];
// [1, 2, 3, 5, 5, 6, 7, 9, 10, 11, 12]
// const flattedArr = arr1.flat(2); // one way
// const flattedArr = [].concat(...arr1);
const flattedArr = (arr, depth = 1) => {
  let result = [];

  arr.forEach((el) => {
    if (Array.isArray(el) && depth > 0) {
      result.push(...flattedArr(el, depth - 1));
    } else {
      result.push(el);
    }
  });

  return result;
};
// console.log(flattedArr(arr1, (depth = 2)));

// Q 5
{
  const a = "Hello";
}

// console.log(a); // I can access it with var, but I cannot with let and const

// Q 6
function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i); // What is logged? // 3 with var and 0, 1, 2 with let
    }, i * 1000);
  }
}
// a(); // var has a function scope

// Q 7
let person = {
  name: "Ciprian",
  hello: function (thing) {
    console.log(this.name + " says hello " + thing);
  },
};

let person1 = {
  name: "Andrew",
};

// person.hello("again");
// person.hello.call(person1, "again");
// person.hello.apply(person1, ["things"]);
// const newPerson = person.hello.bind(person1);
// newPerson("world");

// Q 8
function addFive(a) {
  return a + 5;
}

function subtractTwo(a) {
  return a - 2;
}

function multiplyFour(a) {
  return a * 4;
}

const compose = (...functions) => {
  return (args) => {
    return functions.reduceRight((arg, fn) => fn(arg), args);
  };
};

const composeFct = compose(addFive, subtractTwo, multiplyFour);
// console.log(composeFct(5));

// Q 9
function showText(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

// Promise.all([showText("hello", 1000), Promise.resolve("Hi")]).then((value) =>
//   console.log(value)
// );

// Promise.all polyfill
const arrWithPromises = [showText("hello", 1000), Promise.resolve("Hi")];
function myPromiseAll(promises) {
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise, idx) => {
      promise
        .then((res) => {
          result.push(res);
          if (idx === promises.length - 1) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

// myPromiseAll(arrWithPromises).then((value) => console.log(value));
