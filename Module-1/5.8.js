// নিচে কোডে জাস্ট একটা ডাটার একটি প্রোটার্টির মান আপডেট করা হচ্ছে।
// আপডেট করার নিয়ম প্রথমে বলে দিতে হবে কোন ডাটার প্রোপার্টি পরিবর্তন করতে হবে।
// এরপর ঐ ডাটার কোন প্রোপার্টি পরিবর্তন করতে হবে এবং পরিবর্তনিয় ডাটা দিলেই কাজ শেষ।
//NOTE:$set সকল ডাটা পরিবর্তন করে নতুন ডাটা সেট করে
db.Test.updateOne(
    {"_id" : ObjectId("6406ad63fc13ae5a40000065")},
    {$set:
    {phone:"+8801601588531"}
    }
    )
// নিচে কোডে জাস্ট একটা এ্র্যারের  মান আপডেট করা হচ্ছে।$addToSet শুদুমাত্র array  এর মান
//সেট করার জন্য ব্যবহ্রত হয়।
    db.Test.updateOne(
        {"_id" : ObjectId("6406ad63fc13ae5a40000065")},
        {$addToSet:
        {interests:"gaming"}
        }
        )