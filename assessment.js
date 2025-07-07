//let fruits = [100, 20, 30];
//fruits.sort((a, b) => a - b);  
//console.log(fruits);

let testResults = ['pass', 'fail', 'pass', 'pass', 'fail', 'skipped', 'pass'];

let countResults = testResults.reduce((acc, result) => {
  acc[result] = (acc[result] || 0) + 1;
  return acc;
}, {});

console.log(countResults);

//convert the below promise into async/await

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`⏳ Waited ${ms}ms (promise)`);
    }, ms);
  });
}

console.log("FUNCTION-01: Start (sync)");

async function runWithAsyncAwait() {
  const msg = await wait(3000);
  console.log(msg);
  console.log("FUNCTION-02: End (async/await)");
}

console.log("FUNCTION-03: This runs immediately after async call");

runWithAsyncAwait();

//convert the below into promise with .then()
function loginUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Logged in as Sidharth"), 6000);
    });
}

function fetchDashboard() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Dashboard loaded"), 3000);
    });
}

function fetchvoid() {
    console.log("void function called");
}

function runApp() {
    loginUser()
        .then((loginMessage) => {
            console.log(loginMessage);
            return fetchDashboard();
        })
        .then((dashboard) => {
            console.log(dashboard);
            fetchvoid();
        });
}

runApp();

