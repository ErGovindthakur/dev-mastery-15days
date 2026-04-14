export const GET = async (request, { params }) => {
  const { id } = await params;

  const projects = [
    { id: 1, title: "Project_1", TechStacks: "React,Node,Python,Mongo,JavaScript" },
    { id: 2, title: "Project_2", TechStacks: "React,Node,Python,Mongo,JavaScript" },
    { id: 3, title: "Project_3", TechStacks: "React,Node,Python,Mongo,JavaScript" }
  ];

  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return Response.json({ error: "Project not found" }, { status: 404 });
  }

  return Response.json(project);
};
