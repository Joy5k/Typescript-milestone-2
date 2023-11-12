//নিচে একটা এ্যারের মধ্যে থেকে কমন ভেলূ গুলো বের করা হচ্ছে তার উপরি ভিত্তি করে  গ্রুপিং করা
// হচ্ছে. $group সাধারনত singe value এর উপর কাজ করে থাকে।কিন্তু interests হলো একটা
//এ্যরে ।এখন এ্যরের মধ্যে থেকে ভেলু উপর $unwind ব্যবহার করে প্রথমে  আলাদা করা হয়ছে
//এরপর সেই আলাদা করা ভেলু থেকে গ্রুপিং করা হচ্ছে।
//গ্রুপ করা age  এর  উপর ভিত্তি করে।এখানে মজার বিষয় হলো।অর্থাত কোন বয়সের লোকের interests
// গুলো কমন সেগুলো বের করা।যদি বিষয়টা একটু ক্লিয়ার করি তাহলে এমনটা হবে।

// const persone = {
//     age: 12,
//     interests:[gaming,cricket,football]
// }
// const persone = {
//     age: 12,
//     interests:[gaming,cooking,football]
// }
// const persone = {
//     age: 12,
//     interests:[gaming,cricket,football,Riding]
// }
// const persone = {
//     age: 12,
//     interests:[gaming,cricket,football,Coding]
// }
// const persone = {
//     age: 12,
//     interests:[gaming,cricket,football,Coding]
// }

// এখানে age=12  এর কমন interests গুলো হলো=gaming,football, এবং ডাটা গুলো কোন 
//এ্যারের মধ্যে রাখতে $push মেথট ব্যবহার কার হয়েছে।


db.Test.aggregate([
    //stage-1
   { $unwind: "$interests"},
   //stage-2
   {
       $group: { _id: "$age",interestInAge:{$push:"$interests"}}
       
   }
])
