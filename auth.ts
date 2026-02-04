import NextAuth from "next-auth";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    // TODO: Add providers (e.g. GitHub, Google) or a simple Credentials provider for demo
  ],
});
