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
function fetchvoid(){
    console.log("void function called");
}

async function runApp() {
    const loginMessage = await loginUser();
    console.log(loginMessage);

    const dashboard = await fetchDashboard();
    console.log(dashboard);

}

runApp();
fetchvoid();
