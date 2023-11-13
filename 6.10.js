//নিচে সার্চ কুয়েরি দিয়ে টেক্সট মেথট কে কল করা হচ্চে।প্রথমে about ফিল্ট কে ইনডেক্মিং করে
//তারপর সেই ফিল্ড থেকে সার্চ কুয়েরি করতেছে।

// db.getCollection("massive-data").createIndex({about:"text"})
db.getCollection("massive-data").find({ $text: { $search: "dolore" } }).project({
    about: 1
})