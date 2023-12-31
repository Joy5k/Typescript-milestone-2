//$match , $ addFields , $out and $merge নিচে কোডে এই গুলো ব্যবহার করা হয়েছে্
//$match: এটা কাজ কোন লজিকের উপর  এটি ডাটা ফিল্টার করে।যেমন নিছে  আমরা দেখতেছি
//$match gender=Male নামক প্রোপার্টি যেই Field  আছে শুদু সেই Field গুলোই সেই নিয়ে  আসবে
//$addFields: এটার কাজ সিম্পল,নামেই বোঝা যায় এটা কাজ কিছূ  এড করা। এবং সে নিচে সেটাই
// করতেছে।
//$out এটার কাজ হলো কোন নতুন কালেশণ তৈরি করে সেই কালেকশনে নিচের add করা বা মডিফাই
//করা কোড সেভ করবে।অর্থাত নিচের কোড রান করলে আরেকটি নতুন কালেকশন তৈরি হবে ডাটাবেজে
//মেইন কালেকশনে কোন পরিবর্তনি আসবেনা।
//$merge: এটা হলো মেইন কালেকশনে মডিফাই করা।যেমন নিচে আমরা দেখতেছি addField মেথট ব্যাবহার করে
// ডাটা মডিফাই করতেছে।এবং সেটা {$merge:"Test"} টেস্ট নামক কালেকশনেই সেভ হচ্ছে।নতুন করে কোন কালেকশন তৈরি করছে না।

db.Test.aggregate([
    //stage-1
{$match: {gender:"Male"}},
//stage-2
{$addFields: {cours:"Next Level",educTech:"programming hero",Mentor:"Mir vai"}},
//stage-3
// {$project: {cours:1,educTech:1}},
//stage-4
// {$out:"cours-student"}
{$merge:"Test"}
])
