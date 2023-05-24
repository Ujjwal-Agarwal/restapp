import clientPromise from "@/lib/mongodb";
import { NextApiResponse } from "next";
import { hash } from "bcryptjs";
import { userValidator } from "@/lib/validations/signup";
import { z } from "zod";


export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("body",body)

    const user = userValidator.parse(body.user);
    console.log("user",user)
    const hashPassword = await hash(user.password, 12);
    const mongoClient = await clientPromise;
    
    const mongoDB = mongoClient.db("restAppDB").collection('users');

    const result = await mongoDB.insertOne({
        username: user.username,
        password: hashPassword,
        email: user.email,
    });
    return new Response("OK");
  } catch (error) {
    if(error instanceof z.ZodError){
        return new Response(`Invalid request payload`, { status: 422 });
    }
    return new Response(`Invalid request`, { status: 400 });
  }
}
