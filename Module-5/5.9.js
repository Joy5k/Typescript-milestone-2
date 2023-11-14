//নিচের কোডে age নামক প্রোপার্টিটা ডিলেট করে ফেলা হয়েছে। কোন প্রপার্টি ডিলিট করার নিয়ম হলো।
//updateOne ব্যবহার করা এরপর  কোন ডাটার প্রোপার্টি  আপডেটা করব সেই ডাটার আইডি দেয়া
// এরপর $unset method ব্যবহার করা। তারপর কোন প্রপার্টি  ডিলিট করতে চাই সেই প্রোপার্টি নাম দিয়ে empty string অথবা 1 দেয়া।

db.Test.updateOne(
    {"_id" : ObjectId("6406ad63fc13ae5a40000065")},
    {$unset:{age:""}
    },

// কোন ে এ্যরের এর শেষের  এলিমেন্ট ডিলিট করা হচ্ছে
    db.Test.updateOne(
        {"_id" : ObjectId("6406ad63fc13ae5a40000065")},
        {$pop: {interests:1}
        }
        )
),
    
//কোন এ্যারের মধ্য থেকে নির্দ্রিষ্ট কোন ডাটা   ডিলেট করতে এই ম্যথেট ব্যবহার করতে হয়।
    
db.Test.updateOne(
    {"_id" : ObjectId("6406ad63fc13ae5a40000065")},
    {$pull: {friends:"Tanmoy Parvez"}
    }
    )
// একটা এ্যারে থেকে অনেক ডাটা বের করতে  এই ম্যথট ব্যবহার হয়
db.Test.updateOne(
    {"_id" : ObjectId("6406ad63fc13ae5a40000065")},
    {$pullAll: {friends:"Tanmoy Parvez"}
    }
    )
