import { getSession } from "next-auth/react";
 
export default async function Session (req, res) {
  const session = await getSession({ req });
 
  if (session) {
      res.status(200).json({
     	name: session.user.name,
	    message: "Welcome authenticated user",
    });
  } else {
    res.status(403).json({
      error: "You must sign-in to view the content on this page.",
    });
  }
};