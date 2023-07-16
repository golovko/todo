import prisma from "lib/prisma.js";

// REST API "USER" CRUD operations 
export default async function handler(req, res) {
  if (req.method == "GET") {
    try {
      const users = await prisma.user.findMany({});
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else if (req.method == "DELETE") {
    try {
      const deleteUser = await prisma.user.delete({
        where: req.body,
      });
      res.status(200).json({ status: "Successfully deleted" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else if (req.method == "POST") {
    try {
      const user = await prisma.user.create({ data: req.body });
      res.status(201).json({ status: "Successfully created" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else if (req.method == "PUT") {
    try {
      const user = await prisma.user.update({
        where: {
          id: req.body.id,
        },
        data: req.body,
      });
      res.status(201).json({ status: "Successfully updated" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}
