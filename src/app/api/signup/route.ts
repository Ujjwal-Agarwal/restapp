import clientPromise from "@/lib/mongodb";
import { NextApiResponse } from "next";
import { hash } from "bcryptjs";
import { userValidator } from "@/lib/validations/signup";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const user = userValidator.parse(body.user);
    console.log(user)
    const hashPassword = await hash(user.password, 12);
    const mongoClient = await clientPromise;
    
    const mongoDB = mongoClient.db("restAppDB").collection('users');

    const result = await mongoDB.insertOne({
        username: user.username,
        password: hashPassword
    });
    return new Response("OK");
  } catch (error) {}
}
