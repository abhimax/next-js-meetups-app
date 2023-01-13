import { MongoClient } from "mongodb";

// /api/new-meetup <- api url
async function handler(req, res){
    if(req.method === 'POST'){
        const data = req.body;
        //const { title, image, address, description } = data;
        // store them in DB
        const client = await MongoClient.connect('mongodb+srv://admin:<:P>@clusterabhi.bpxffpl.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();
        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);
        console.log(result);
        client.close();
        res.status(201).json({ message: 'Meetup inserted!'});
    }
}
export default handler;