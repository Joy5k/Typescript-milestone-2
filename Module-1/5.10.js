//$set ব্যবহার করে কোন অজেক্ট প্রোপার্টি একধিক মান পরিবর্তন  করা হচ্ছে। শুদু অবজেক্টের

db.Test.updateOne(
    { "_id": ObjectId("6406ad63fc13ae5a40000065") },
   {$set: {
       "address.city":"Patuakhali",
       "address.postalCode":"8600",
       "address.country":"Bangladesh"
   }}
)
//নিচে "education.$.major":"CSE" এর $ বিষয়টা ভালো ভাবে বুঝতে হবে।এখানে $ দিয়ে এটা বুঝাচ্ছে যে
// প্রথম education নামক array  এর মধ্যে major নামক প্রথম  প্রোপার্টিটা পরিবর্তন করে CSE করো।
// এখানে major নামক প্রথম  প্রোপার্টি বলতে এটা বোঝাচ্ছে যে একই নামে অনেক প্রোপার্টি থাকতে পারে
//সেখান থেকে "education.major":"Communications" এই প্রোপার্টি নাও এবং যদি এই প্রোপার্টি নামে
// অনেক গুলো প্রোপার্টি থাকে তবে প্রথম  প্রোপার্টির মান পরিবর্তন করে CSE করো ।ব্যচ এটা হলো $  এর কাজ

db.Test.updateOne(
    { "_id": ObjectId("6406ad63fc13ae5a40000065"),"education.major":"Communications" },
   {$set: {
      "education.$.major":"CSE"
   }}
)
