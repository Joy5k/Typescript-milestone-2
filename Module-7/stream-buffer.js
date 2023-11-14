//  নিচে stream and buffering এর কাজ করা হচ্ছে। এই দুটো খুবি মজার যেমন যদি তোমার ডাটা
//অনেক বড় হয় এবং ডাটা লোড হতে অনেকটা সময় লাগে তখন ইউজার কে সামান্য করে ডাটা
// পাঠিয়ে দেয়াই হলো stream and buffering এর কাজ।
// যেমন ইউটিউব ভিডিও,লক্ষ করলে দেখতে পাবা একটু একটু করে ভিডিও  ডাউনলোড হয় এবং
//ইউজার দেখতে পায়।এখন যদি একবারে সম্পুর্ন ভিডিও ডাউনলোড হয়ে তারপর ইউজার দেখতে পেত
//এতে  ইউজার এক্সপেরিয়েন্স অনেক কমে যেত।ঠিক তেমনি  একটি কাজ নিচে করা হয়েছে।
// বড় একটা  আর্টিকেল একবারে  ডাউনলোড না হয়ে একটু একটু ডাউনলোড হচ্ছে আর সেটা ইউজার
//দেখতে পাচ্ছে।এই কাজ সম্পুর্নটাই ব্যকেন্ডে হচ্ছে।নিচের কোডের আউটপুট বুঝতে হলে //
//console open করে নেটওয়ার্ক স্লো কর



//creating a new server using row node js
const http = require('http');
const server = http.createServer()
const fs = require('fs');

server.on("request", (req,res) => {
    if (req.url === "read-only" && req.method == "GET") {
        
    }
    let readableStream = fs.createReadStream(process.cwd() + "/read.txt")
    readableStream.on("data", (buffer) => { 
        res.write(buffer)
    })
    readableStream.on("end", () => {
        res.end('Read closed')
    })
})
server.listen(5000, () => {
    console.log("listening on port  5000");
})