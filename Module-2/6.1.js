//নিচে  কোডে প্রথমে gender ব্যবহার করে শুদু Male নিয়ে  এবং age 30  এর নিচে। এই ফিল্ড নেয়া
//হচ্ছে।তারপর সেই ফিল্ড থেকে শুদু name and gender ডাটা নিচ্ছে।

db.Test.aggregate([
    //stage-1
{$match: {gender:"Male", age:{$lt:30}}},
//stage-2
{$project: {name:1,gender:1
}}])