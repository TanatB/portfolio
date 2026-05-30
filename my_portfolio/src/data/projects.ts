import type { Project } from "../types";

// TODO: Swap these for your real projects. githubUrl/liveUrl are optional.
export const projects: Project[] = [
  {
    title: "Live Air Quality Dashboard",
    description:
      "Real-time air-quality monitoring pipeline ingesting sensor feeds, transforming them with PySpark, and serving sub-second analytics from DuckDB to a live dashboard.",
    tags: ["Python", "DuckDB", "PySpark", "Streaming"],
    githubUrl: "https://github.com/your-handle/live-air-quality-dashboard", // TODO
    highlight: "Sub-second queries over millions of sensor readings",
    featured: true,
  },
  {
    title: "SQL Data Warehouse",
    description:
      "Dimensional warehouse built with a medallion architecture (bronze → silver → gold), containerized for an on-premise deployment with reproducible builds.",
    tags: ["SQL", "Docker", "Data Modeling", "ETL"],
    githubUrl: "https://github.com/your-handle/sql-data-warehouse", // TODO
    highlight: "End-to-end medallion architecture",
    featured: true,
  },
  {
    title: "Airflow ETL Platform",
    description:
      "Production-style Airflow setup orchestrating ingestion, validation, and load DAGs with retries, alerting, and data-quality gates.",
    tags: ["Airflow", "Python", "Orchestration"],
    githubUrl: "https://github.com/your-handle/airflow-etl", // TODO
    highlight: "Self-healing DAGs with quality gates",
  },
  {
    title: "ML From Scratch",
    description:
      "Classic supervised-learning algorithms implemented from first principles to build intuition for the math behind the libraries.",
    tags: ["Python", "NumPy", "ML"],
    githubUrl: "https://github.com/your-handle/ml-from-scratch", // TODO
  },
];
