// What is Aggregation ?
// -> Aggregation means, process data in stages to transform it.

/*
Interview defs :
Aggregation pipeline is a framework in MongoDB used to process and transform documents through multiple stages.
*/

/*
Pipeline Structure:
db.collection.aggregate([
{stage1},
{stage2},
{stage3}
])
*/

// 1. $match (used to filter data)
// like find() in mongodb

db.posts.aggregate([
     {$match: {likesCount: {$gt:10}}}
])


//2. $group (Very Important)
// Group data like SQL "GROUP BY"

db.posts.aggregate([
     {
          $group:{
               _id: "$createdBy",
               totalPosts:{$sum:1}
          }
     }
])
/*
Output:
 => Each user → number of posts
*/

// 3. $sort (just like sort in mongodb)

{$sort:{likesCount:-1}}

// 4. $limit 
{$limit:5}

// 5. $lookup (MongoDB JOIN)
// Combine collections

db.posts.aggregate([
     {
          $lookup:{
               from:"users",
               localField:"createdBy",
               foreignField:"_id",
               as:"user"
          }
     }
])

// 6. $project (select fields)
db.posts.aggregate([
     {
          $project: {
               title:1,
               likesCount:1
          }
     }
])


// Real-World Example (Your Project)
// Get Top 3 Most Liked Posts with User Info

db.posts.aggregate([
     {
          $sort:{likesCount:-1}
     },// 1. I got most liked post in desc order

     {
          $limit:3
     }, // 2. I got three top most liked posts

     {
          $lookup:{
               from:"users",
               localField:"createdBy",
               foreignField:"_id",
               as:"user"
          }
     }, // 3.I got user Info

     {
          $project:{
               title:1,
               likesCount:1,
               "user.name":1
          }
     }

])

/*
# Golden Rule
1. Always start with $match
2. Then $group
3. Then $sort / $project
*/


// Mini Task
// write aggregation for:
/*
1.Posts with more than 0 likes
2.Include user name
3.Sort by likes descending
4.Show only title, likesCount, user name
 */

db.posts.aggregate([
  {
    $match: { likesCount: { $gt: 0 } }
  },
  {
    $sort: { likesCount: -1 }
  },
  {
    $lookup: {
      from: "users",
      localField: "createdBy",
      foreignField: "_id",
      as: "user"
    }
  },
  {
    $unwind: "$user"
  },
  {
    $project: {
      title: 1,
      likesCount: 1,
      "user.name": 1
    }
  }
])

// Task 2 : Get top 2 users who have most posts

db.posts.aggregate([
  {
    $group: {
      _id: "$createdBy",
      totalPosts: { $sum: 1 }
    }
  },
  {
    $sort: { totalPosts: -1 }
  },
  {
    $limit: 2
  }
])


/*
 1. Group posts by user
2. Count posts per user
3. Sort users by count (desc)
4. Take top 2
 */


// * What is an Index?

// => An index is a data structure that helps MongoDB find data without scanning every document.