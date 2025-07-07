function fetchName() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Sidharth"), 5000);
    });
}

 function showName() {
    //const name = await fetchName();  // waits for promise to finish
       // const name = fetchName(); // ❌ This returns a Promise, not the value
  fetchName().then(name => {
    console.log("Name is:", name);
     });
}
console.log("still waiting..");
showName();
