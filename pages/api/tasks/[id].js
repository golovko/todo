import prisma from "lib/prisma.js";

export default async function userHandler(req, res) {
  const { query, method } = req;
  const id = query.id;

  switch (method) {
    case "GET":
      let task = await prisma.task.findFirst({
        where: { id: id }
      });
      if (task) {
        res.status(200).json(task);
      } else {
        res.status(404).json({ error: "Not Found" });
      }
      break;
    case "PUT":
      try {
        let tasks = await prisma.task.update({
          where: { id: id },
          data: req.body,
        });
        res.status(201).json({ status: "Successfully updated" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
      break;
    case "DELETE":
      try {
        const deleteUser = await prisma.task.delete({
          where: { id: id },
        });
        res.status(200).json({ status: "Successfully deleted" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
