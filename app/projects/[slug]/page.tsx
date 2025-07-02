import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

type Params = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.title} – Vardaan Bazaz`,
    description: project.description,
    openGraph: {
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Vardaan Bazaz Portfolio Screenshot",
        },
      ],
    },
    twitter: {
      images: ["/og-image.png"],
    },
  };
}

export default function ProjectPage({ params }: Params) {
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
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            🌐 Live Site
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            🧠 GitHub Repo
          </a>
        )}
      </div>
    </main>
  );
}
