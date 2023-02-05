const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done");
        }, 1500);
        reject("Rejected");
    });
    return promise;
};
setTimeout(() => {
    console.log("Timer done!");
    fetchData().then(text => {
        console.log(text);
    });
}, 2000);
console.log("main");
console.log("Running");
