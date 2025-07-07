const deliverPackage = () => {
    return new Promise((resolve, reject) => {
        console.log("Package is on its way...");
        setTimeout(() => {
            const delivered = true; // Simulate delivery status
            if (delivered) {
                resolve("Package delivered successfully!");
            } else {
                reject("Failed to deliver package.");
            }
        }, 3000); // Simulates a 3-second delay
    });
};

// Using the promise
deliverPackage()
    .then((message) => {
        console.log(message); // Output: Package delivered successfully!
    })
    .catch((error) => {
        console.log(error); // Output: Failed to deliver package.
    });


    function waitWithPromise(ms) {
 return new Promise((resolve) => {
   setTimeout(() => {
     resolve(`⏳ Waited ${ms}ms (Promise)`);
   }, ms);
 });
}


console.log("Start (Promise)");


waitWithPromise(3000).then((msg) => {
 console.log(msg);
 console.log("End (Promise)");
});


console.log("This runs immediately after Promise call");

