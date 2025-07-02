import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold font-serif mb-4">{project.title}</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-sm"
          >
            {t}
          </span>
        ))}
      </div>

      <p className="text-md text-gray-600 dark:text-gray-400 whitespace-pre-line">
        {project.content}
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href={project.liveUrl}
          target="_blank"
          className="text-blue-600 dark:text-blue-400 underline"
        >
          🌐 Live Site
        </a>
        <a
          href={project.repoUrl}
          target="_blank"
          className="text-blue-600 dark:text-blue-400 underline"
        >
          🧠 GitHub Repo
        </a>
      </div>
    </main>
  );
}
