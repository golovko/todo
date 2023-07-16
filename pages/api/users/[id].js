
export default async function userHandler(req, res) {
  const { query, method } = req;
  const id = query.id;

  switch (method) {
    case "GET":
      let user = await prisma.user.findFirst({
        where: { id: id }
      });
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ error: "Not Found" });
      }
      break;
    case "PUT":
      try {
        let users = await prisma.user.update({
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
        const deleteUser = await prisma.user.delete({
          where: { id: id },
        });
        res.status(200).json({ status: "Successfully deleted" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}