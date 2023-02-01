import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: { email: {} },
      async authorize(credentials, req) {
        return { id: "1", email: "vmikyan@gmail.com" };
      },
    }),
  ],
  pages: { signIn: "/auth/login" },
};

export default NextAuth(authOptions);
