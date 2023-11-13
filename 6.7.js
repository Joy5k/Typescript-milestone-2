//নিচে $facet দিয়ে একই field থেকে বিভিন্ন ডাটাকে একসাথে নিয়ে আসা যায়।যেমন নিচে  একসাথে তিনটি
//ফিল্ডের ডাটা নিয়ে আসতেছে।এটা হলো পাইপলাইন,তিনটা ডাটা ভিন্ন ভিন্ন ভাবে  আসতেচে কারো  উপর কেউ নির্ভরশীল না

db.Test.aggregate([
    { 
        $facet: {
       "friendsList":[
            { $unwind: "$friends"},
             {$group: { _id: "$friends",count:{$sum: 1}}}
           ],
           "eductation":[
               {$unwind: "$education"},
               {$group: { _id: "$education",count:{$sum: 1}}}
               ],
               "skills":[
                 {$unwind: "$skills"},
                 {$group: { _id: "$skills",count:{$sum: 1}}}
                   ]
       }
         
     },
     ])
 