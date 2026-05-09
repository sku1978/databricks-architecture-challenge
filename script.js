const zones = [
  {
    id: "platform",
    title: "Platform Foundation",
    hint: "Workspace, account, compute strategy, environments, repos, and configuration.",
  },
  {
    id: "security",
    title: "Identity, Security, and Access",
    hint: "Users, groups, service principals, secrets, credentials, network security, and access controls.",
  },
  {
    id: "ingestion",
    title: "Data Ingestion",
    hint: "Auto Loader, Lakeflow Connect, CDC, batch file ingestion, streaming ingestion, and external sources.",
  },
  {
    id: "storage",
    title: "Storage and Table Management",
    hint: "Delta Lake, managed tables, external tables, volumes, catalogs, schemas, and storage credentials.",
  },
  {
    id: "engineering",
    title: "Data Engineering and Transformation",
    hint: "Lakeflow Declarative Pipelines, notebooks, jobs, workflows, Spark, SQL, and data quality.",
  },
  {
    id: "governance",
    title: "Governance and Discovery",
    hint: "Unity Catalog, lineage, tags, comments, search, policies, classification, and federation.",
  },
  {
    id: "sharing",
    title: "Data Sharing and Interoperability",
    hint: "Delta Sharing, clean rooms, external locations, federated access, and partner sharing patterns.",
  },
  {
    id: "analytics",
    title: "Analytics and BI Serving",
    hint: "SQL warehouses, dashboards, queries, alerts, metrics, BI integration, and semantic consumption.",
  },
  {
    id: "ml",
    title: "Machine Learning and AI",
    hint: "Mosaic AI, MLflow, features, vectors, models, agents, and GenAI.",
  },
  {
    id: "operations",
    title: "Operations, Monitoring, and Cost Management",
    hint: "System tables, audit logs, billing usage, job history, query history, monitoring, and budgets.",
  },
];

const services = [
  {
    id: "account-console",
    name: "Account Console",
    zone: "platform",
    description: "Administers workspaces, users, groups, metastores, network settings, and account-level configuration.",
  },
  {
    id: "workspace",
    name: "Databricks Workspace",
    zone: "platform",
    description: "The collaborative environment for notebooks, jobs, dashboards, repos, catalogs, and platform assets.",
  },
  {
    id: "serverless-compute",
    name: "Serverless Compute",
    zone: "platform",
    description: "Databricks-managed compute for notebooks, workflows, SQL, and pipelines without cluster management.",
  },
  {
    id: "classic-compute",
    name: "Classic Compute",
    zone: "platform",
    description: "Customer-account compute for configurable clusters, jobs, and all-purpose workloads.",
  },
  {
    id: "sql-warehouses",
    name: "SQL Warehouses",
    zone: "analytics",
    description: "Optimized compute endpoints for Databricks SQL, dashboards, BI tools, and SQL tasks.",
  },
  {
    id: "asset-bundles",
    name: "Databricks Asset Bundles",
    zone: "platform",
    description: "Infrastructure-as-code packaging for Databricks jobs, pipelines, notebooks, and workspace resources.",
  },
  {
    id: "unity-catalog-permissions",
    name: "Unity Catalog Permissions",
    zone: "security",
    description: "Central grants and access policies for tables, views, volumes, functions, models, and other assets.",
  },
  {
    id: "storage-credentials",
    name: "Storage Credentials",
    zone: "storage",
    description: "Unity Catalog objects that authorize access from Databricks to cloud object storage.",
  },
  {
    id: "external-locations",
    name: "External Locations",
    zone: "sharing",
    description: "Governed cloud storage paths that combine a URL with a storage credential and permissions.",
  },
  {
    id: "databricks-secrets",
    name: "Databricks Secrets",
    zone: "security",
    description: "Secret scopes and keys for safely referencing passwords, tokens, and API credentials in workloads.",
  },
  {
    id: "service-principals",
    name: "Service Principals",
    zone: "security",
    description: "Non-human identities used by jobs, automation, CI/CD, and service-to-service integrations.",
  },
  {
    id: "private-link",
    name: "Databricks PrivateLink",
    zone: "security",
    description: "Private connectivity options for workspace access, serverless egress, and backend traffic patterns.",
  },
  {
    id: "lakeflow-connect",
    name: "Lakeflow Connect",
    zone: "ingestion",
    description: "Managed and standard connectors for ingesting from SaaS apps, databases, files, and message buses.",
  },
  {
    id: "saas-connectors",
    name: "Managed SaaS Connectors",
    zone: "ingestion",
    description: "Fully-managed connectors for enterprise applications such as Salesforce, Workday, HubSpot, Jira, and more.",
  },
  {
    id: "database-cdc",
    name: "Database CDC Connectors",
    zone: "ingestion",
    description: "Managed database ingestion using change data capture from systems such as SQL Server, MySQL, and PostgreSQL.",
  },
  {
    id: "auto-loader",
    name: "Auto Loader",
    zone: "ingestion",
    description: "Incrementally and efficiently processes new files that arrive in cloud object storage.",
  },
  {
    id: "copy-into",
    name: "COPY INTO",
    zone: "ingestion",
    description: "SQL command for idempotent batch file loading from cloud storage into Delta tables.",
  },
  {
    id: "partner-connect",
    name: "Partner Connect",
    zone: "sharing",
    description: "Simplifies connecting validated ingestion, ELT, BI, and governance partners to Databricks.",
  },
  {
    id: "structured-streaming",
    name: "Structured Streaming",
    zone: "ingestion",
    description: "Apache Spark engine for near-real-time processing with familiar batch-style APIs and fault tolerance.",
  },
  {
    id: "streaming-tables",
    name: "Streaming Tables",
    zone: "ingestion",
    description: "Delta tables designed for incremental ingestion and low-latency streaming transformations in pipelines.",
  },
  {
    id: "kafka-source",
    name: "Kafka Source",
    zone: "ingestion",
    description: "Reads Apache Kafka topics using Structured Streaming or Lakeflow Spark Declarative Pipelines.",
  },
  {
    id: "kinesis-source",
    name: "Amazon Kinesis Source",
    zone: "ingestion",
    description: "Ingests Amazon Kinesis streams into Databricks for streaming analytics and transformations.",
  },
  {
    id: "delta-streaming",
    name: "Delta Streaming Reads/Writes",
    zone: "ingestion",
    description: "Uses Delta Lake tables as reliable streaming sources and sinks for incremental pipelines.",
  },
  {
    id: "continuous-pipelines",
    name: "Continuous Pipelines",
    zone: "engineering",
    description: "Runs streaming data pipelines continuously for low-latency updates from supported sources.",
  },
  {
    id: "delta-lake",
    name: "Delta Lake",
    zone: "storage",
    description: "Transactional lakehouse storage layer with ACID guarantees, time travel, schema enforcement, and performance features.",
  },
  {
    id: "managed-tables",
    name: "UC Managed Tables",
    zone: "storage",
    description: "Unity Catalog tables whose lifecycle, storage location, optimization, and maintenance are managed by Databricks.",
  },
  {
    id: "external-tables",
    name: "External Tables",
    zone: "storage",
    description: "Unity Catalog metadata over data stored in cloud object storage that you manage directly.",
  },
  {
    id: "iceberg-tables",
    name: "Apache Iceberg Tables",
    zone: "storage",
    description: "Open table format support for lakehouse interoperability and governed analytic tables.",
  },
  {
    id: "volumes",
    name: "Unity Catalog Volumes",
    zone: "storage",
    description: "Governed storage for non-tabular data such as files, model assets, libraries, and unstructured inputs.",
  },
  {
    id: "table-optimization",
    name: "Table Optimization",
    zone: "storage",
    description: "Platform capabilities for maintaining table layout, performance, and storage efficiency.",
  },
  {
    id: "lakeflow-pipelines",
    name: "Lakeflow Spark Declarative Pipelines",
    zone: "engineering",
    description: "Declarative SQL and Python pipelines for batch, streaming, materialized views, and incremental transformations.",
  },
  {
    id: "lakeflow-jobs",
    name: "Lakeflow Jobs",
    zone: "engineering",
    description: "Schedules and orchestrates multi-task workflows across notebooks, pipelines, SQL, dbt, Python, and ML tasks.",
  },
  {
    id: "notebooks",
    name: "Databricks Notebooks",
    zone: "engineering",
    description: "Collaborative coding environment for SQL, Python, Scala, R, visualization, exploration, and production tasks.",
  },
  {
    id: "spark-sql",
    name: "Spark SQL",
    zone: "engineering",
    description: "Distributed SQL execution over lakehouse data using Apache Spark and Databricks Runtime optimizations.",
  },
  {
    id: "materialized-views",
    name: "Materialized Views",
    zone: "engineering",
    description: "Precomputed datasets that can be incrementally refreshed for transformations and serving use cases.",
  },
  {
    id: "expectations",
    name: "Data Quality Expectations",
    zone: "engineering",
    description: "Declarative quality checks that validate, drop, or fail records as they move through pipelines.",
  },
  {
    id: "unity-catalog",
    name: "Unity Catalog",
    zone: "governance",
    description: "Unified governance for data and AI assets with access control, lineage, discovery, audit, and sharing.",
  },
  {
    id: "automated-lineage",
    name: "Automated Lineage",
    zone: "governance",
    description: "Tracks how data flows through queries, tables, notebooks, jobs, dashboards, and downstream assets.",
  },
  {
    id: "data-discovery",
    name: "Data Discovery and Tags",
    zone: "governance",
    description: "Search, metadata, comments, tags, and descriptions that help teams understand and find governed assets.",
  },
  {
    id: "row-column-controls",
    name: "Row Filters and Column Masks",
    zone: "governance",
    description: "Fine-grained controls that restrict rows and protect sensitive columns at query time.",
  },
  {
    id: "lakehouse-federation",
    name: "Lakehouse Federation",
    zone: "sharing",
    description: "Queries external data systems through Unity Catalog without copying the data into Databricks.",
  },
  {
    id: "delta-sharing",
    name: "Delta Sharing",
    zone: "sharing",
    description: "Open protocol for securely sharing data and AI assets across platforms, clouds, and organizations.",
  },
  {
    id: "clean-rooms",
    name: "Clean Rooms",
    zone: "sharing",
    description: "Privacy-safe collaboration spaces for sharing and analyzing data with partners without exposing raw datasets.",
  },
  {
    id: "databricks-sql",
    name: "Databricks SQL",
    zone: "analytics",
    description: "SQL environment for querying lakehouse data, building dashboards, creating alerts, and serving BI workloads.",
  },
  {
    id: "aibi-dashboards",
    name: "AI/BI Dashboards",
    zone: "analytics",
    description: "Interactive dashboards with AI-assisted authoring, visualizations, filters, and governed sharing.",
  },
  {
    id: "genie-spaces",
    name: "Genie Spaces",
    zone: "analytics",
    description: "Conversational analytics spaces where business users ask natural-language questions about governed data.",
  },
  {
    id: "metric-views",
    name: "Metric Views",
    zone: "analytics",
    description: "Semantic layer objects for defining reusable metrics and consistent business calculations.",
  },
  {
    id: "sql-alerts",
    name: "SQL Alerts",
    zone: "analytics",
    description: "Automated checks that evaluate query results and notify teams when conditions are met.",
  },
  {
    id: "databricks-apps",
    name: "Databricks Apps",
    zone: "analytics",
    description: "Hosted interactive apps that combine analytics, AI, data, and workflows inside Databricks.",
  },
  {
    id: "mosaic-ai",
    name: "Mosaic AI",
    zone: "ml",
    description: "Integrated AI and ML platform for preparing data, building models, deploying GenAI apps, and monitoring.",
  },
  {
    id: "mlflow",
    name: "MLflow Tracking and Registry",
    zone: "ml",
    description: "Tracks experiments and manages model lifecycle, versions, lineage, and registry workflows.",
  },
  {
    id: "feature-store",
    name: "Feature Store",
    zone: "ml",
    description: "Central registry for reusable ML features governed in Unity Catalog with lineage and sharing.",
  },
  {
    id: "feature-serving",
    name: "Feature Serving",
    zone: "ml",
    description: "Serves feature values to models or applications through scalable, low-latency endpoints.",
  },
  {
    id: "vector-search",
    name: "Vector Search",
    zone: "ml",
    description: "Vector index service for retrieval augmented generation, semantic search, and embedding-powered applications.",
  },
  {
    id: "model-serving",
    name: "Model Serving",
    zone: "ml",
    description: "Deploys custom, foundation, and external models behind scalable REST APIs for real-time or batch inference.",
  },
  {
    id: "foundation-models",
    name: "Foundation Model APIs",
    zone: "ml",
    description: "Databricks-hosted and external foundation models available through governed APIs and SQL functions.",
  },
  {
    id: "agent-framework",
    name: "Agent Framework",
    zone: "ml",
    description: "Tools for building, deploying, evaluating, and monitoring production-grade AI agents and RAG applications.",
  },
  {
    id: "jobs-history",
    name: "Jobs Run History",
    zone: "operations",
    description: "Operational history for scheduled and triggered workflows, including status, timing, retries, and task details.",
  },
  {
    id: "pipeline-event-logs",
    name: "Pipeline Event Logs",
    zone: "operations",
    description: "Detailed Lakeflow pipeline events for monitoring progress, failures, data quality, and operational behavior.",
  },
  {
    id: "system-tables",
    name: "System Tables",
    zone: "operations",
    description: "Account-level operational tables for usage, lineage, billing, access, query, and audit analysis.",
  },
  {
    id: "billing-usage",
    name: "Billing Usage",
    zone: "operations",
    description: "Usage and billing records for analyzing consumption, chargeback, forecasting, and cost optimization.",
  },
  {
    id: "audit-logs",
    name: "Audit Logs",
    zone: "operations",
    description: "Security and compliance records of user, workspace, account, and data access activity.",
  },
  {
    id: "query-history",
    name: "Query History",
    zone: "operations",
    description: "Tracks SQL query executions, performance, users, warehouses, and troubleshooting metadata.",
  },
  {
    id: "model-monitoring",
    name: "Model Serving Monitoring",
    zone: "operations",
    description: "Endpoint logs, metrics, traces, quality monitoring, and serving diagnostics for ML and AI deployments.",
  },
  {
    id: "lakehouse-monitoring",
    name: "Lakehouse Monitoring",
    zone: "operations",
    description: "Monitors data and model quality over time so teams can detect drift, anomalies, and quality regressions.",
  },
  {
    id: "budget-policies",
    name: "Budget Policies",
    zone: "operations",
    description: "Cost controls and attribution policies that help teams manage platform usage against defined budgets.",
  },
];

const zonesGrid = document.querySelector("#zonesGrid");
const palette = document.querySelector("#palette");
const statusMessage = document.querySelector("#statusMessage");
const scoreValue = document.querySelector("#scoreValue");
const scoreLabel = document.querySelector("#scoreLabel");
const checkBtn = document.querySelector("#checkBtn");
const revealBtn = document.querySelector("#revealBtn");
const resetBtn = document.querySelector("#resetBtn");
const exportBtn = document.querySelector("#exportBtn");
const helpBtn = document.querySelector("#helpBtn");
const helpDialog = document.querySelector("#helpDialog");
const closeHelpBtn = document.querySelector("#closeHelpBtn");

let selectedCardId = null;
let helpReturnFocus = null;

const serviceTooltip = document.createElement("div");
serviceTooltip.id = "serviceTooltip";
serviceTooltip.className = "service-tooltip";
serviceTooltip.setAttribute("role", "tooltip");
document.body.append(serviceTooltip);

function getService(id) {
  return services.find((service) => service.id === id);
}

function shuffle(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

function createZone(zone) {
  const article = document.createElement("article");
  article.className = "dropzone";
  article.dataset.zone = zone.id;

  article.innerHTML = `
    <div class="dropzone__header">
      <div>
        <h3>${zone.title}</h3>
        <p>${zone.hint}</p>
      </div>
      <span class="dropzone__count" aria-label="Cards in ${zone.title}">0</span>
    </div>
    <div class="dropzone__cards drop-target" data-zone="${zone.id}" tabindex="0" aria-label="Drop cards into ${zone.title}">
      <span class="empty-note">Drop Databricks cards here</span>
    </div>
  `;

  return article;
}

function createCard(service) {
  const card = document.createElement("button");
  card.type = "button";
  card.id = service.id;
  card.className = "service-card";
  card.draggable = true;
  card.dataset.serviceId = service.id;
  card.dataset.correctZone = service.zone;
  card.dataset.description = service.description;
  card.setAttribute("aria-grabbed", "false");
  card.setAttribute("aria-label", `${service.name}. ${service.description}`);
  card.innerHTML = `
    <span class="service-card__mark" aria-hidden="true">DB</span>
    <span class="service-card__text">${service.name}</span>
  `;

  card.addEventListener("dragstart", handleDragStart);
  card.addEventListener("dragend", handleDragEnd);
  card.addEventListener("pointerenter", (event) => showServiceTooltip(event, service));
  card.addEventListener("pointermove", positionServiceTooltip);
  card.addEventListener("pointerleave", hideServiceTooltip);
  card.addEventListener("focus", (event) => showServiceTooltip(event, service, true));
  card.addEventListener("blur", hideServiceTooltip);
  card.addEventListener("click", (event) => {
    event.stopPropagation();
    selectCard(service.id);
  });
  card.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      clearSelection();
      hideServiceTooltip();
    }
  });

  return card;
}

function renderZones() {
  zonesGrid.innerHTML = "";
  zones.forEach((zone) => zonesGrid.append(createZone(zone)));
}

function renderCards() {
  palette.innerHTML = "";
  shuffle(services).forEach((service) => palette.append(createCard(service)));
}

function handleDragStart(event) {
  hideServiceTooltip();
  const card = event.currentTarget;
  card.classList.add("is-dragging");
  card.setAttribute("aria-grabbed", "true");
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", card.dataset.serviceId);
}

function handleDragEnd(event) {
  event.currentTarget.classList.remove("is-dragging");
  event.currentTarget.setAttribute("aria-grabbed", "false");
  document.querySelectorAll(".drop-target").forEach((target) => {
    target.classList.remove("is-over");
  });
}

function handleDropTargetEvents(target) {
  target.addEventListener("dragover", (event) => {
    event.preventDefault();
    target.classList.add("is-over");
    event.dataTransfer.dropEffect = "move";
  });

  target.addEventListener("dragleave", () => {
    target.classList.remove("is-over");
  });

  target.addEventListener("drop", (event) => {
    event.preventDefault();
    target.classList.remove("is-over");
    const serviceId = event.dataTransfer.getData("text/plain");
    moveCard(serviceId, target.dataset.zone);
    announceMove(serviceId, target.dataset.zone);
  });

  target.addEventListener("click", () => {
    if (selectedCardId) {
      moveCard(selectedCardId, target.dataset.zone);
      announceMove(selectedCardId, target.dataset.zone);
      clearSelection();
    }
  });
}

function wireDropTargets() {
  document.querySelectorAll(".drop-target").forEach(handleDropTargetEvents);
  document.querySelectorAll(".dropzone").forEach((zoneElement) => {
    zoneElement.addEventListener("click", (event) => {
      if (!selectedCardId || event.target.closest(".service-card")) {
        return;
      }

      moveCard(selectedCardId, zoneElement.dataset.zone);
      announceMove(selectedCardId, zoneElement.dataset.zone);
      clearSelection();
    });
  });
}

function selectCard(serviceId) {
  if (selectedCardId === serviceId) {
    clearSelection();
    return;
  }

  clearSelection();
  selectedCardId = serviceId;
  const card = document.querySelector(`[data-service-id="${serviceId}"]`);
  card.classList.add("is-selected");
  card.setAttribute("aria-grabbed", "true");
  setStatus(`Selected ${getService(serviceId).name}. Click any zone to place it.`, "warning");
}

function clearSelection() {
  selectedCardId = null;
  document.querySelectorAll(".service-card.is-selected").forEach((card) => {
    card.classList.remove("is-selected");
    card.setAttribute("aria-grabbed", "false");
  });
}

function moveCard(serviceId, zoneId) {
  const card = document.querySelector(`[data-service-id="${serviceId}"]`);
  const destination =
    zoneId === "palette"
      ? palette
      : document.querySelector(`.dropzone__cards[data-zone="${zoneId}"]`);

  if (!card || !destination) {
    return;
  }

  card.classList.remove("is-correct", "is-incorrect");
  destination.append(card);
  updateEmptyNotes();
  updateCounts();
  updateScore();
}

function announceMove(serviceId, zoneId) {
  const service = getService(serviceId);
  const zone = zones.find((item) => item.id === zoneId);

  if (!service) {
    return;
  }

  if (zoneId === "palette") {
    setStatus(`${service.name} returned to the service palette.`);
    return;
  }

  setStatus(`${service.name} placed in ${zone?.title || "the selected zone"}.`);
}

function updateEmptyNotes() {
  document.querySelectorAll(".dropzone__cards").forEach((target) => {
    const hasCards = target.querySelector(".service-card");
    const emptyNote = target.querySelector(".empty-note");

    if (!hasCards && !emptyNote) {
      const note = document.createElement("span");
      note.className = "empty-note";
      note.textContent = "Drop Databricks cards here";
      target.append(note);
    }

    if (hasCards && emptyNote) {
      emptyNote.remove();
    }
  });
}

function updateCounts() {
  document.querySelectorAll(".dropzone").forEach((zoneElement) => {
    const count = zoneElement.querySelectorAll(".service-card").length;
    zoneElement.querySelector(".dropzone__count").textContent = count;
  });
  document.body.classList.toggle("is-palette-empty", palette.querySelectorAll(".service-card").length === 0);
}

function updateScore() {
  const placedCards = [...document.querySelectorAll(".dropzone .service-card")];
  const correctCards = placedCards.filter((card) => {
    const actualZone = card.closest(".dropzone").dataset.zone;
    return actualZone === card.dataset.correctZone;
  });

  scoreValue.textContent = `${placedCards.length}/${services.length}`;
  scoreLabel.textContent =
    placedCards.length === services.length
      ? `${correctCards.length} correct`
      : "cards placed";
}

function clearCheckState() {
  document.querySelectorAll(".service-card").forEach((card) => {
    card.classList.remove("is-correct", "is-incorrect");
  });
  document.querySelectorAll(".dropzone").forEach((zoneElement) => {
    zoneElement.classList.remove("is-correct", "is-needs-work");
  });
}

function checkArchitecture() {
  clearSelection();
  clearCheckState();

  const placedCards = [...document.querySelectorAll(".dropzone .service-card")];
  const unplacedCount = services.length - placedCards.length;
  let correctCount = 0;

  placedCards.forEach((card) => {
    const actualZone = card.closest(".dropzone").dataset.zone;
    const isCorrect = actualZone === card.dataset.correctZone;
    card.classList.add(isCorrect ? "is-correct" : "is-incorrect");
    correctCount += isCorrect ? 1 : 0;
  });

  document.querySelectorAll(".dropzone").forEach((zoneElement) => {
    const cards = [...zoneElement.querySelectorAll(".service-card")];
    const hasIncorrect = cards.some((card) => {
      return card.dataset.correctZone !== zoneElement.dataset.zone;
    });
    const hasCorrect = cards.length > 0 && !hasIncorrect;

    if (hasIncorrect) {
      zoneElement.classList.add("is-needs-work");
    }

    if (hasCorrect) {
      zoneElement.classList.add("is-correct");
    }
  });

  updateScore();

  if (correctCount === services.length) {
    setStatus("Excellent. Every Databricks card is in the suggested architecture zone.", "good");
  } else if (unplacedCount > 0) {
    setStatus(
      `${correctCount} cards are currently in suggested zones. ${unplacedCount} cards are still in the palette.`,
      "warning"
    );
  } else {
    setStatus(
      `${correctCount} of ${services.length} cards match the suggested architecture. Red cards need another look.`,
      "warning"
    );
  }
}

function revealSuggestedAnswer() {
  clearSelection();
  clearCheckState();

  zones.forEach((zone) => {
    const target = document.querySelector(`.dropzone__cards[data-zone="${zone.id}"]`);
    services
      .filter((service) => service.zone === zone.id)
      .sort((first, second) => first.name.localeCompare(second.name))
      .forEach((service) => {
        const card = document.querySelector(`[data-service-id="${service.id}"]`);
        target.append(card);
        card.classList.add("is-correct");
      });
  });

  updateEmptyNotes();
  updateCounts();
  updateScore();
  setStatus("Suggested answer revealed. Use it as a facilitation baseline, not a single universal design.", "good");
}

function resetBoard() {
  clearSelection();
  clearCheckState();
  hideServiceTooltip();
  setStatus("Board reset. Drag cards from the palette into the matching architecture zones.");
  document.querySelectorAll(".service-card").forEach((card) => card.remove());
  palette.innerHTML = "";
  shuffle(services).forEach((service) => palette.append(createCard(service)));
  updateEmptyNotes();
  updateCounts();
  updateScore();
}

function getBoardAnswer() {
  const answer = {
    app: "Databricks Data Platform Architecture Challenge",
    exportedAt: new Date().toISOString(),
    zones: {},
    unplaced: [],
  };

  zones.forEach((zone) => {
    answer.zones[zone.title] = [...document.querySelectorAll(`.dropzone[data-zone="${zone.id}"] .service-card`)].map(
      (card) => card.querySelector(".service-card__text").textContent
    );
  });

  answer.unplaced = [...palette.querySelectorAll(".service-card")].map((card) => {
    return card.querySelector(".service-card__text").textContent;
  });

  return answer;
}

async function exportTeamAnswer() {
  const answer = getBoardAnswer();
  const exportText = JSON.stringify(answer, null, 2);
  const blob = new Blob([exportText], { type: "application/json" });
  const link = document.createElement("a");
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

  link.href = URL.createObjectURL(blob);
  link.download = `databricks-team-answer-${timestamp}.json`;
  link.click();
  URL.revokeObjectURL(link.href);

  try {
    await navigator.clipboard.writeText(exportText);
    setStatus("Team answer exported as JSON and copied to the clipboard.", "good");
  } catch {
    setStatus("Team answer exported as JSON. Clipboard copy was not available in this browser.", "good");
  }
}

function setStatus(message, tone = "") {
  statusMessage.textContent = message;
  statusMessage.classList.toggle("is-good", tone === "good");
  statusMessage.classList.toggle("is-warning", tone === "warning");
}

function openHelpDialog() {
  helpReturnFocus = document.activeElement;
  helpDialog.hidden = false;
  document.body.style.overflow = "hidden";
  helpDialog.querySelector(".help-dialog__panel").focus();
}

function closeHelpDialog() {
  helpDialog.hidden = true;
  document.body.style.overflow = "";

  if (helpReturnFocus && typeof helpReturnFocus.focus === "function") {
    helpReturnFocus.focus();
  }
}

function handleHelpDialogClick(event) {
  if (event.target.matches("[data-help-close]")) {
    closeHelpDialog();
  }
}

function handleHelpDialogKeydown(event) {
  if (event.key === "Escape" && !helpDialog.hidden) {
    closeHelpDialog();
  }
}

function showServiceTooltip(event, service, anchorToCard = false) {
  serviceTooltip.innerHTML = `
    <strong>${service.name}</strong>
    <span>${service.description}</span>
  `;
  serviceTooltip.classList.add("is-visible");
  event.currentTarget.setAttribute("aria-describedby", "serviceTooltip");

  if (anchorToCard) {
    const rect = event.currentTarget.getBoundingClientRect();
    positionTooltip(rect.left + rect.width / 2, rect.top - 8);
    return;
  }

  positionServiceTooltip(event);
}

function hideServiceTooltip() {
  serviceTooltip.classList.remove("is-visible");
  document.querySelectorAll("[aria-describedby='serviceTooltip']").forEach((card) => {
    card.removeAttribute("aria-describedby");
  });
}

function positionServiceTooltip(event) {
  positionTooltip(event.clientX, event.clientY);
}

function positionTooltip(x, y) {
  if (!serviceTooltip.classList.contains("is-visible")) {
    return;
  }

  const margin = 14;
  const offset = 16;
  const tooltipRect = serviceTooltip.getBoundingClientRect();
  let left = x + offset;
  let top = y + offset;

  if (left + tooltipRect.width + margin > window.innerWidth) {
    left = x - tooltipRect.width - offset;
  }

  if (top + tooltipRect.height + margin > window.innerHeight) {
    top = y - tooltipRect.height - offset;
  }

  serviceTooltip.style.left = `${Math.max(margin, left)}px`;
  serviceTooltip.style.top = `${Math.max(margin, top)}px`;
}

function init() {
  renderZones();
  renderCards();
  wireDropTargets();
  updateEmptyNotes();
  updateCounts();
  updateScore();

  checkBtn.addEventListener("click", checkArchitecture);
  revealBtn.addEventListener("click", revealSuggestedAnswer);
  resetBtn.addEventListener("click", resetBoard);
  exportBtn.addEventListener("click", exportTeamAnswer);
  helpBtn.addEventListener("click", openHelpDialog);
  closeHelpBtn.addEventListener("click", closeHelpDialog);
  helpDialog.addEventListener("click", handleHelpDialogClick);
  document.addEventListener("keydown", handleHelpDialogKeydown);
}

init();
