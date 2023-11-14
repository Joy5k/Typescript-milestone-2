//The Database..data link: https://github.com/Apollo-Level2-Web-Dev/mongodb-practice/blob/main/practice-data.json

//নিচে কোডে interests নামক যেই এ্যারে আছে তার মধ্যে "Reading","Travelling","Gaming" যেই
// এ্যারের মধ্যে আছে সেই এ্যারে গুলো দাও।
db.Test.find({interests:{$all:["Reading","Travelling","Gaming"]}}).project({interests:1})

// এখানে এটা বোঝাচ্ছে যে interests নামক এ্যারের মধ্যে যেই এ্যারের ২ নাম্বার পজিশনে Cooking
// আছে কেবল  সেই এ্যারে গুলো দাও
db.Test.find({ "interests.2": "Cooking" }).project({ interests: 1 })

//নিচে Skill নামক প্রোপার্টি থেকে name:"JAVASCRIPT",level:"Intermidiate" যত গুলো data
//পাও সব নিয়ে আসো
db.Test.find({skills:{$elemMatch: {name:"JAVASCRIPT",level:"Intermidiate"}}}).project({skills:1})

