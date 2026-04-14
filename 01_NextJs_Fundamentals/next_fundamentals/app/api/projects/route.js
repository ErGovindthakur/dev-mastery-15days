     export const GET = async() => {
          return Response.json([
               {
                    "id":1,
                    "title":"Project_1",
                    "TechStacks":"React,Node,Python,Mongo,JavaScript"
               },
               {
                    "id":2,
                    "title":"Project_2",
                    "TechStacks":"React,Node,Python,Mongo,JavaScript"
               },
               {
                    "id":3,
                    "title":"Project_3",
                    "TechStacks":"React,Node,Python,Mongo,JavaScript"
               }
          ])
     }