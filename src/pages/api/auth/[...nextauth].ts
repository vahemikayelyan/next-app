import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: { email: {}, password: {} },
      async authorize(credentials, _req) {
        console.log(credentials);
        if (credentials?.email == "admin" && credentials.password == "admin") {
          return { id: "1", email: "vmikyan@gmail.com" };
        }

        return null;
      },
    }),
  ],
  pages: { signIn: "/auth/login" },
};

export default NextAuth(authOptions);
