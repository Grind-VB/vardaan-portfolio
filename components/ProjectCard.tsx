import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <div className="max-w-3xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="mb-6 text-gray-700 dark:text-gray-300">{project.description}</p>
      <h2 className="text-2xl font-semibold mb-2">Technologies:</h2>
      <ul className="list-disc ml-6 text-gray-800 dark:text-gray-200">
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}
