// /api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const data = req.body;

      const client = await MongoClient.connect(
        "mongodb+srv://oykuparlak:dOexcWsck4LSSBdM@cluster0.vmxa0mz.mongodb.net/meetups?retryWrites=true&w=majority"
      );

      const db = client.db();
      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne(data);

      console.log(result);

      client.close();

      res.status(201).json({ message: "Meetup inserted" });
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    console.error('Error in handler:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export default handler;
