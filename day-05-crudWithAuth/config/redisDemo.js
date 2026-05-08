import redis from "redis";
const client = redis.createClient();

const getData = async(req,res) =>  {
  const cached = await client.get("user");

  if (cached) {
    return res.send(JSON.parse(cached)); // cache hit
  }

  const data = await db.getUser(); // DB call
  await client.setEx("user", 60, JSON.stringify(data));

  res.send(data);
}