import type { NextApiRequest, NextApiResponse } from "next"
import clientPromise from "@/lib/mongodb";

interface ticket{
    name: String,
    phone: Number,
}

export async function GET (req: NextApiRequest){
    const mongoClient = await clientPromise;
    const data= await mongoClient.db("restAppDB").collection('tickets').find().toArray()
    console.log(data)
    // const hk = mongoClient.db("restAppDB").collection<ticket>('tickets');

    // const result = await hk.insertOne({
    //     name:"Ujjwal",
    //     phone: 19189191
    // });



    return new Response("OK")
};

export default GET

