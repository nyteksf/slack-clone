import GitHub from "@auth/core/providers/github";
import { convexAuth } from "@convex-dev/auth/server";

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [GitHub({
    clientSecret: "90afc3e62665c043d4fcbeb3df40c027052ed970",
    clientId: "Iv23liLSUKjmX2bO6cM4",
  })],
});
