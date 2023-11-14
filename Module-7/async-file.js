//নিচে সিনক্রোনাস এবং এসিনক্রোনাস কিভাবে কাজ করে  এবং কখন সিনক্রোনাস এবং এসিনক্রোনাস
 //ব্যবহার করতে হয়।



const fs = require('fs');

const read = fs.readFile("./read.txt", "utf-8", (err,data) => {
    if (err) { 
        throw Error(err);
    }
    else {
    }
    const write = fs.writeFile("./read.txt", data, (err, data) => { 
        if (err) {
            throw Error(err);
        }
        console.log('I am in Functional');
    });
})
console.log("out of function");