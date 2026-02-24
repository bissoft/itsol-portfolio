import type { Metadata } from "next";
import { getProjectsData } from "@/lib/cms";
import CaseStudyClient from "./CaseStudyClient";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const { projects } = await getProjectsData();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Case Study Not Found - ITSOL",
    };
  }

  return {
    title: `${project.title} - Case Study | ITSOL`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { id } = await params;
  const { projects } = await getProjectsData();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <CaseStudyClient
      project={project as any}
      nextProject={nextProject as any}
    />
  );
}
