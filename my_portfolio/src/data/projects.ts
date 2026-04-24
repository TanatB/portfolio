import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "Weather ETL Pipeline",
    description:
      "End-to-end ETL pipeline ingesting weather data from the Open-Meteo API into a medallion architecture (bronze → silver → gold) backed by PostgreSQL. Orchestrated with Apache Airflow for scheduled runs and containerized with Docker for reproducible environments.",
    tags: ["Python", "Airflow", "PostgreSQL", "Docker", "Open-Meteo API"],
    githubUrl: "https://github.com/TanatB/sql-data-warehouse-project",
    status: "complete",
    category: "de",
  },
  {
    title: "Real-Time E-Commerce Lakehouse",
    description:
      "Cloud lakehouse platform for e-commerce analytics built on Apache Spark with Delta Lake and Apache Iceberg on AWS/GCP. Handles data scraping, ingestion, and full-layer modeling (bronze → silver → gold) designed for both real-time and batch workloads.",
    tags: ["Spark", "Delta Lake", "Iceberg", "AWS", "GCP", "Python"],
    githubUrl: "https://github.com/TanatB/realtime-eCommerce-lakehouse",
    status: "in-progress",
    category: "de",
  },
  {
    title: "ERP Software",
    description:
      "Full-stack ERP system covering accounting, inventory, and business operations — inspired by PeakAccount. Built to demonstrate end-to-end software engineering across a real-world business domain.",
    tags: ["TypeScript", "React"],
    githubUrl: "",
    status: "coming-soon",
    category: "swe",
  },
];
