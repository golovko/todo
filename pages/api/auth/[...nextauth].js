import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "lib/prisma";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
     async session({ session, user, token }) {
      const sessionUser = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        }
      });

      session.user.id = sessionUser.id.toString();      
      return session;
    },
    async signIn({ profile }) {
      try {
        const userExists = await prisma.user.findUnique({
          where: {
            email: profile.email
          }
        });

        if (!userExists) {
          await prisma.user.create({
            data: { 
              email: profile.email,
              name: profile.name
             },
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});
