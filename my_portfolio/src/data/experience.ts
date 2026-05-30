import type { Experience } from "../types";

// TODO: Replace with your real roles and measurable highlights.
export const experience: Experience[] = [
  {
    role: "Data Engineer",
    company: "Your Company", // TODO
    period: "2024 — Present",
    location: "Bangkok, TH",
    highlights: [
      "Designed and shipped Airflow ETL pipelines feeding the analytics warehouse.",
      "Modeled a dimensional warehouse that cut common report queries from minutes to seconds.",
      "Introduced data-quality checks that caught upstream breakages before they hit dashboards.",
    ],
    stack: ["Airflow", "Python", "SQL", "Docker", "AWS"],
  },
  {
    role: "Data Engineering — Coursework & Projects",
    company: "Self-directed / Bootcamps", // TODO
    period: "2023 — 2024",
    highlights: [
      "Completed intensive data-engineering tracks covering Spark, warehousing, and orchestration.",
      "Built end-to-end portfolio projects from ingestion through serving layer.",
    ],
    stack: ["PySpark", "DuckDB", "PostgreSQL", "dbt"],
  },
];
