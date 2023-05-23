import NextAuth from "next-auth";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "@/lib/mongodb";
import { hash, compare } from "bcryptjs";
import { ObjectId } from "mongodb";

const authOptions = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) {
          return;
        }
        // Add logic here to look up the user from the credentials supplied
        // const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
        const mongoClient = await clientPromise;
        // console.log("heheh");

        const data = await mongoClient
          .db("restAppDB")
          .collection("users")
          .find({ username: credentials.username })
          .toArray();
        // console.log("data",data)
        // console.log("req",req)

        const user = data[0];
        // console.log(user._id.toString());

        // const hashedPassword = await hash(credentials.password,12)
        // console.log(hashedPassword)
        // console.log();

        if (credentials?.username === user?.username) {
          // Any object returned will be saved in `user` property of the JWT
          // console.log(user)

          if (await compare(credentials.password, user.password)) {
            // console.log("SIGNED IN",user)
            return {
              name: user.username,
              email: user.email,
              password: user.password,
              id: user._id.toString(),
            } as any;
          } else {
            return null;
          }
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);

      // console.log(user)

      return token;
    },
    async session({ session, token, user }) {
      // console.log("USER",token);
      // session.user = token.user
      session.user.id = token.id;
      return session;
    },
    // redirect() {
    //   return "/dashboard";
    // },
  },
});

export { authOptions as POST, authOptions as GET };
