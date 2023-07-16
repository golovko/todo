import prisma from "lib/prisma.js";

export default async function handler(req, res) {
  if (req.method == "GET") {
    try {
      const tasks = await prisma.task.findMany({});
      res.status(200).json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else if (req.method == "POST") {
    try {
      let tasks = await prisma.task.create({ data: req.body });
      res.status(201).json({ status: "Successfully created" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
