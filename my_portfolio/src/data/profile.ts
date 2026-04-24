import type { Profile } from "../types";

export const profile: Profile = {
  fullName: "Tanat Metmaolee",
  title: "Data Engineer",
  summary:
    "CS graduate passionate about building robust data pipelines and scalable lakehouse architectures. I turn raw data into reliable, actionable insights — from batch ETL to real-time streaming systems.",
  email: "tanatb.th@gmail.com",
  github: "TanatB",
  githubUrl: "https://github.com/TanatB",
  linkedinUrl: "https://www.linkedin.com/in/tanat-metmaolee/",
  education: [
    {
      degree: "Bachelor of Computer Science",
      school: "The University of Queensland",
      location: "Brisbane, Australia",
      period: "2021 – 2024",
    },
  ],
  skills: [
    { category: "Languages", items: ["Python", "SQL", "TypeScript"] },
    {
      category: "Data & ETL",
      items: ["Apache Airflow", "Apache Spark", "Delta Lake", "Apache Iceberg", "PostgreSQL", "DuckDB"],
    },
    { category: "Cloud & Infra", items: ["AWS", "GCP", "Docker"] },
    { category: "Frontend", items: ["React", "Vite"] },
  ],
};
