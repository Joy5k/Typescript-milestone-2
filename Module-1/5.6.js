//The Database..data link: https://github.com/Apollo-Level2-Web-Dev/mongodb-practice/blob/main/practice-data.json



//  এটার মানে age নামক প্রোপার্টি যগুলো ফিল্ডের মধ্য়ে আছে সব গুলো ফিল্ড  দাও 
db.test.find({ age: { $exists: true } })

// এটার মানে unknown নামক প্রোপার্টি যগুলো ফিল্ডের মধ্য়ে আছে সব গুলো ফিল্ড  দাও ।কিন্তু
//যতি unknown প্রোপার্টি  টাই না থাকে তাহলে?? তাহলে exsits:true দেয় তাহলে কোন ডাটাই
// দেখাবে না যেহেতু unknown propterty is not available in the database.But you will
// by force using exists true..
db.test.find({ unknown: { $exists: true } })

//নিচের কোড দ্বারা  এটা বোঝাচ্ছে যে age নামক  প্রোপার্টি গুলোর মধ্যে যেই age প্রোপার্টির মান string 
 // সেগুলো দাও
db.test.find({ age: { $type: "string" } })

//নিচের কোড দ্বারা  এটা বোঝাচ্ছে যে database data  এর মধ্যে friends নামক array ,
// যেই data  এর মধ্যে আছে সেই ডাটা গুলো দাও
db.Test.find({ friends: { $type: "array" } }).project({ friends: 1 })

//নিচের কোড দ্বারা  এটা বোঝাচ্ছে যে database data  এর মধ্যে friends নামক array আছে  এবং যেই এ্যরের 4 টা প্রোপার্টি আছে  সেই ডাটা দাও সেগুলো দাও

//NOTE:$size method is used only for the array purpose

db.Test.find({ friends: { $size: 4 } }).project({ friends: 1 })

//IF you want to know or check the empty array. Then just input on the size method 0
//like this db.Test.find({friends:{$size: 0}}).project({friends:1})


// if some data will be matched the requirement then these data you will get
db.Test.find({ company: { $type: "null" } }).project({ friends: 1 })

