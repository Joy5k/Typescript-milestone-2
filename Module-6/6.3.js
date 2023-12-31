// নিচে gender এর  উপর ভিত্তি করে  গ্রুপ করা হচ্ছে। এবং এক একটা  গ্রুপে কতোজন করে আছে
//সেটা কাউন্ট করতেছে $sumG
//Note:For crete a group you have to add _id
//$push: পুশ দ্বারা কোন স্পেসিফিক বা সম্পুর্র ডাটা ঐ ফিল্ডেই কোন প্রোপার্টি আকারে সেভ করা হয়
//যেমন নিচে একটা পুশের মাধ্যমে শূদু নাম গুলো pushData নামক এ্যারের প্রোপার্টির মধ্যে সেভ করা হচ্ছে
// আবার $$ROOT দিয়ে সম্পুর্ন ডাটা টাকেই এ্যারের মধ্যে সেভ করা হচ্ছে।
db.Test.aggregate([
    //stage-1
    {$group: { _id: "$gender",
    count:{$sum: 1},
    pushData:{$push:"$$ROOT"}}}
    // pushData:{$push:"$$name"}}}
    ]).project({
        "pushData.name":1,
        "pushData.email":1,
        "pushData.phone":1
    })

//.project() দিয়ে বলে দিচ্ছি ক্লাইন্ট সাইটে কি কি ডাটা পাঠাবো।যে ডাটা ক্লাইন্টে পাঠানোর প্রয়োজন নাই
//অযথা সেই ডাটা না পাঠানোই ভালো।