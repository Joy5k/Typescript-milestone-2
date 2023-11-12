//using some simple method
//$subtract  এটা দিয়ে জাস্ট বিয়োগ করা হয়েছে

db.Test.aggregate({
    $group: { _id: "$null",totalSalary:{$sum: "$salary"},
    maxSalary:{$max: "$salary"},
    minSalary:{$min: "$salary"},
    avgSalary:{$avg: "$salary"}
    }
    
}).project({
    maxSalary:1,
    //don't afraid just rename it
    minimumeSalary:"$minSalary",
    avaregeSalary:"$avgSalary",
    rengeBetweenMaxAndMin:{$subtract: ["$maxSalary","$minSalary"]}
})
