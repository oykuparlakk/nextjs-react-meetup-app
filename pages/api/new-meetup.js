import { MongoClient } from "mongodb";

async function handler(req, res) {
  let client;

  try {
    if (req.method === "POST") {
      const data = req.body;

      client = await MongoClient.connect(
        "mongodb+srv://oykuparlak:a4UfQQzS0FB9zw0O@cluster0.vmxa0mz.mongodb.net/meetups?retryWrites=true&w=majority"
      );

      const db = client.db();
      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      res.status(201).json({ message: "Meetup inserted" });
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    console.error("Error in handler:", error);
    res.status(500).json({ message: "Internal Server Error" });
  } finally {
    if (client) {
      await client.close();
    }
  }
}

export default handler;
