//let user;
//console.log(user.name); // Runtime Error: Cannot read property 'name' of undefined


try {
  // Code that may throw error
  let result = riskyFunction();
} catch (error) {
  console.error("Error caught:", error.message);
}

try {
  // risky code
} catch (e) {
  console.log("Caught error:", e);
} finally {
  console.log("Cleanup code always runs");
}



function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}


async function fetchData() {
  try {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("API call failed:", error);
  }
}

