import type { NextApiRequest, NextApiResponse } from "next"
import clientPromise from "@/lib/mongodb";

interface ticket{
    name: String,
    phone: Number,
}

export async function GET (req: NextApiRequest){
    const mongoClient = await clientPromise;
    // const data= await mongoClient.db("restAppDB").collection('tickets').find().toArray()

    const hk = mongoClient.db("restAppDB").collection<ticket>('tickets');

    const result = await hk.insertOne({
        name:"Addam",
        phone: 12122
    });

    return new Response("OK")
};

export default GET

