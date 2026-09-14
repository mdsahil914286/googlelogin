// import { betterAuth } from "better-auth";
// import { mongodbAdapter } from "better-auth/adapters/mongodb";
// import { nextCookies } from "better-auth/next-js";
// import { db,client } from "./db";

// export const auth = betterAuth({
//   database: mongodbAdapter(db,{client}),


//   baseURL : process.env.BETTER_AUTH_URL,

// //   konsi authantaction method use karni hai
// socialProviders :{
//     google :{
//         clientId : process.env.GOOGLE_CLIENT_ID,
//         clientSecret : process.env.GOOGLE_CLIENT_SECRET
//     }
// },

// plugins :[nextCookies()],
// });





import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { db, client } from "./db";

const requiredEnv = [
  "BETTER_AUTH_SECRET",
  "BETTER_AUTH_URL",
  "GOOGLE_CLIENT_ID",
  "GOOGLE_CLIENT_SECRET",
];

for (const name of requiredEnv) {
  if (
    !process.env[name] ||
    process.env[name].startsWith("replace-with") ||
    process.env[name].startsWith("your-") ||
    process.env[name].startsWith("generate-")
  ) {
    throw new Error(`${name} is missing in .env.local`);
  }
}

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

  plugins: [nextCookies()],
});