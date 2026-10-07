
////////// 1 ///////////

let str = "  Добро пожаловать в JavaScript  ";

str = str.trim().toUpperCase();

console.log(str.length); 
console.log(str.includes("JAVASCRIPT")); 

////////// 2 ///////////

let email = "student@university.kg";
let atIndex = email.indexOf("@");

let username = email.slice(0, atIndex);
let domain = email.slice(atIndex + 1);

console.log(username); 
console.log(domain);   


////////// 3 ///////////


function reverseWords(str) {
  return str.trim().split(/\s+/).reverse().join(" ");
}

console.log(reverseWords("JavaScript это интересно"));


////////// 4 ///////////

function getAge(birthYear) {
  let currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

console.log(getAge(1990));

////////// 5 ///////////

function formatDate(date) {
  return date.toLocaleDateString();
}

let today = new Date();
console.log(formatDate(today));

////////// 6 ///////////

function daysBetween(date1, date2) {
  let diffTime = Math.abs(date2 - date1);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

let date1 = new Date("2023-01-01");
let date2 = new Date("2023-01-15");
console.log(daysBetween(date1, date2));

////////// 7 ///////////

function divide(a, b) {
  try {
    return a / b;
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}
console.log(divide(10, 0)); 

////////// 8 ///////////

function getCountry(user) {
  try {
    if (!user.address || !user.address.country) {
      throw new Error("страна не указана");
    }
    return user.address.country.toUpperCase();
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}

console.log(getCountry({ address: { country: "Кыргызстан" } })); 
console.log(getCountry({ address: {} }));                          
console.log(getCountry("Кыргызстан"));     


////////// 9 ///////////

function parseJSONSafe(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}
console.log(parseJSONSafe('{"name": "John", "age": 30}')); 
console.log(parseJSONSafe('{"name": "John", "age": 30'));   

////////// 10 ///////////

function waitAndLog(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

waitAndLog("Привет через 2 секунды!", 2000).then((result) => {
  console.log(result);
});

///////// 11 ///////////

const stepFirst = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Шаг 1 выполнен"), 1000);
  });
}

const stepSecond = (previousResult) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(previousResult + " → Шаг 2 выполнен"), 1000);
  });
}

stepFirst()
  .then((result1) => {
    return stepSecond(result1);
  })
  .then((finalResult) => {
    console.log(finalResult);
  })
  .catch((error) => {
    console.log("Ошибка:", error);
  });

  ///////// 12 ///////////

  let user = { id: 1, name: "Тимур", age: 20, hobbies: ["футбол", "программирование"] };


const jsonString = JSON.stringify(user);
console.log(jsonString);



const parsedUser = JSON.parse(jsonString);
console.log(parsedUser.hobbies);

///////// 13 ///////////

fetch("https://dummyjson.com/users/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Ошибка HTTP: " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Имя:", data.firstName, data.lastName);
    console.log("Email:", data.email);
  })
  .catch((error) => {
    console.log("Произошла ошибка:", error.message);
  });
